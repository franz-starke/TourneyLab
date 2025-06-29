import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

/**
 * Generates a styled PDF from tournament data.
 * @param {Object} result - Output of evaluateTournamentData()
 */
export async function generatePdfBrowser(result) {
	let pdfDoc = await PDFDocument.create();
	let page = pdfDoc.addPage();
	const { width, height } = page.getSize();
	const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
	let y = height - 40;

	// Title
	page.drawText(`Turnier: ${result.name}`, { x: 40, y, size: 18, font });
	y -= 25;
	page.drawText(`Datum: ${result.date}`, { x: 40, y, size: 12, font });
	y -= 40;

	// Gruppenlabels
	const groupLabels = ["Fun", "Schwitzer"];

	result.groups.forEach((group, index) => {
		const label = result.groups.length === 1 ? "Fun" : groupLabels[index] || `Gruppe ${group.groupId}`;
		page.drawText(`${label}`, { x: 40, y, size: 14, font });
		y -= 20;

		// Tabellenkopf
		const headers = ["Rang", "Team", "Spiele", "S", "U", "N", "Punkte", "Diff"];
		const colWidths = [40, 50, 60, 20, 20, 20, 50, 40];
		let x = 40;

		headers.forEach((header, i) => {
			page.drawText(header, { x, y, size: 10, font });
			x += colWidths[i];
		});
		y -= 15;

		// Teameinträge
		group.teams.forEach((team) => {
			let x = 40;
			const values = [
				team.rank.toString(),
				team.id,
				team.games_played.toString(),
				team.wins.toString(),
				team.draws.toString(),
				team.losses.toString(),
				team.points.toString(),
				team.score_diff.toString()
			];

			values.forEach((val, i) => {
				page.drawText(val, { x, y, size: 10, font });
				x += colWidths[i];
			});

			y -= 15;

			// Seitenumbruch (rudimentär)
			if (y < 50) {
				page = pdfDoc.addPage();
				y = height - 40;
			}
		});

		y -= 25;
	});

	// PDF speichern & downloaden
	const pdfBytes = await pdfDoc.save();
	const blob = new Blob([pdfBytes], { type: "application/pdf" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = `${result.name.replace(/\s+/g, "_")}_Ergebnisse.pdf`;
	a.click();
	URL.revokeObjectURL(url);
}
