import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "TourneyLab Docs",
	description: "Documentation for the TourneyLab setup with Vue.js and Fastapi",
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Developer Documentation', link: '/dev-doc/architecture' },
			{ text: 'Test Documentation', link: '/test-doc' },
			{ text: 'User Documentation', link: '/user-doc' },
			{ text: 'Operating Manual', link: '/op-man' },
			{ text: 'GitHub', link: 'https://github.com/franz-starke/TourneyLab' }
		],

		sidebar: [

			{
				text: 'Developer Documentation',
				collapsed: false,
				items: [
					{ text: 'Architecture',
						link: '/dev-doc/architecture/',
						collapsed: false,
					},
					{ text: 'UX-Concept',
						collapsed: false,
						items: [
							{ text: 'Persona', link: '/dev-doc/ux-concept/persona' },
							{ text: 'Wireframe', link: '/dev-doc/ux-concept/wireframe' },
						]
					},
					{
						text: 'Software Documentation',
						collapsed: true,
						items: [
							{
								text: 'Frontend',
								collapsed: false,
								items: [
									{ text: 'Vue-router', link: '/dev-doc/software-doc/frontend/vue-router/' },
									{ text: 'Stores', link: '/dev-doc/software-doc/frontend/stores/' },
									{
										text: 'Components',
										collapsed: true, // Makes this section a dropdown
										items: [
											{ text: 'LandingPage', link: '/dev-doc/software-doc/frontend/components/LandingPage' },
											{ text: 'EnterTournament', link: '/dev-doc/software-doc/frontend/components/EnterTournament' },
											{ text: 'CreateTournament', link: '/dev-doc/software-doc/frontend/components/CreateTournament' },
											{ text: 'ViewOldTournaments', link: '/dev-doc/software-doc/frontend/components/ViewOldTournaments' },
											{
												text: 'TournamentHome', link: '/dev-doc/software-doc/frontend/components/TournamentHome',
												collapsed: true, // Makes this section a dropdown
												items: [
													{ text: 'Dashboard', link: '/dev-doc/software-doc/frontend/components/tournamentViews/Dashboard' },
													{ text: 'Games', link: '/dev-doc/software-doc/frontend/components/tournamentViews/Games' },
													{ text: 'Teams', link: '/dev-doc/software-doc/frontend/components/tournamentViews/Teams' },
													{ text: 'Team', link: '/dev-doc/software-doc/frontend/components/tournamentViews/Team' },
													{ text: 'Settings', link: '/dev-doc/software-doc/frontend/components/tournamentViews/Settings' },
													{ text: 'EvalTournament', link: '/dev-doc/software-doc/frontend/components/tournamentViews/EvalTournament' },
													{ text: 'SyncTournament', link: '/dev-doc/software-doc/frontend/components/tournamentViews/SyncTournament' }
												]
											},
											{
												text: 'Utilcomponents',
												collapsed: true, // Makes this section a dropdown
												items: [
													{ text: 'BackHeader', link: '/dev-doc/software-doc/frontend/components/utilcomponents/BackHeader' },
													{ text: 'Game', link: '/dev-doc/software-doc/frontend/components/utilcomponents/Game' },
													{ text: 'LanguageSelectBtn', link: '/dev-doc/software-doc/frontend/components/utilcomponents/LanguageSelectBtn' },
													{ text: 'ThemeChangeBtn', link: '/dev-doc/software-doc/frontend/components/utilcomponents/ThemeChangeBtn' },
												]
											},
										]
									},
									{
										text: 'Utils',
										collapsed: true, // Makes this section a dropdown
										items: [
											{ text: 'tournamentDataStructureUtil', link: '/dev-doc/software-doc/frontend/utils/tournamentDataStructureUtil' },
											{ text: 'tournamentEvaluation', link: '/dev-doc/software-doc/frontend/utils/tournamentEvaluation' },
											{ text: 'tournamentPDFCreation', link: '/dev-doc/software-doc/frontend/utils/tournamentPDFCreation' },
											{ text: 'time', link: '/dev-doc/software-doc/frontend/utils/time' },
										]
									},
									{ text: 'api-module', link: '/dev-doc/software-doc/frontend/api-module/' }
								]
							},
							{ text: 'Backend',
								collapsed: false,
								items: [
									{ text: 'Api-Class', link: '/dev-doc/software-doc/backend/api' },
									{ text: 'Server-Class', link: '/dev-doc/software-doc/backend/server' },
									{ text: 'Database-Class', link: '/dev-doc/software-doc/backend/database' },
									{ text: 'Utils', link: '/dev-doc/software-doc/backend/utils' }
								]
							},
							{ text: 'API', link: '/dev-doc/software-doc/backend/api-endpoints/' }
						]
					},
				]
			},
			{ text: 'Test Documentation', link: '/test-doc/' },
			{ text: 'User Documentation', link: '/user-doc/' },
			{ text: 'Operating Manual', link: '/op-man/' },
		]
	}
})

