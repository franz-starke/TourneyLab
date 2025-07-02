import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "TourneyLab DevDocs",
	description: "Documentation for the TourneyLab setup with Vue.js and Fastapi",
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Frontend', link: '/frontend/' },
			{ text: 'Backend-api', link: '/backend-api' },
		],

		sidebar: [
			{
				text: 'Frontend',
				collapsed: false, // Makes this section a dropdown
				items: [
					{ text: 'Vue-router', link: '/frontend/vue-router/' },
					{ text: 'Stores', link: '/frontend/stores/' },
					{
						text: 'Components',
						collapsed: true, // Makes this section a dropdown
						items: [
							{ text: 'LandingPage', link: '/frontend/components/LandingPage' },
							{ text: 'EnterTournament', link: '/frontend/components/EnterTournament' },
							{ text: 'CreateTournament', link: '/frontend/components/CreateTournament' },
							{ text: 'ViewOldTournaments', link: '/frontend/components/ViewOldTournaments' },
							{
								text: 'TournamentHome',
								collapsed: true, // Makes this section a dropdown
								items: [
									{ text: 'Dashboard', link: '/frontend/components/tournamentViews/Dashboard' },
									{ text: 'Games', link: '/frontend/components/tournamentViews/Games' },
									{ text: 'Teams', link: '/frontend/components/tournamentViews/Teams' },
									{ text: 'Team', link: '/frontend/components/tournamentViews/Team' },
									{ text: 'Settings', link: '/frontend/components/tournamentViews/Settings' },
									{ text: 'EvalTournament', link: '/frontend/components/tournamentViews/EvalTournament' },
									{ text: 'SyncTournament', link: '/frontend/components/tournamentViews/SyncTournament' }
								]
							},
							{
								text: 'Utilcomponents',
								collapsed: true, // Makes this section a dropdown
								items: [
									{ text: 'BackHeader', link: '/frontend/components/utilcomponents/BackHeader' },
									{ text: 'Game', link: '/frontend/components/utilcomponents/Game' },
									{ text: 'LanguageSelectBtn', link: '/frontend/components/utilcomponents/LanguageSelectBtn' },
									{ text: 'ThemeChangeBtn', link: '/frontend/components/utilcomponents/ThemeChangeBtn' },
								]
							},
						]
					},
					{
						text: 'Utils',
						collapsed: true, // Makes this section a dropdown
						items: [
							{ text: 'tournamentDataStructureUtil', link: '/frontend/utils/tournamentDataStructureUtil' },
							{ text: 'tournamentAlgo-v2', link: '/frontend/utils/tournamentAlgov2' },
							{ text: 'tournamentEvaluation', link: '/frontend/utils/tournamentEvaluation' },
							{ text: 'tournamentPDFCreation', link: '/frontend/utils/tournamentPDFCreation' },
							{ text: 'tournamentParamCheck', link: '/frontend/utils/tournamentParamCheck' },
							{ text: 'time', link: '/frontend/utils/time' },
						]
					},
					{ text: 'api-module', link: '/frontend/api-module/' }
				]
			},
		]
	}
})

