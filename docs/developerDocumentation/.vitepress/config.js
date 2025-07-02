import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TourneyLab Developer Documentation",
  description: "Documentation for the TourneyLab setup with Vue.js and Fastapi",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Vue-router', link: '/vue-router' },
      { text: 'Components', link: '/components' },
      { text: 'Util', link: '/utils' },
	  { text: 'Backend-api', link: '/backend-api' },
      { text: 'Stores', link: '/stores' },
    ],

    sidebar: [
	{ text: 'Vue-router', link: '/vue-router/'},
	{ text: 'stores', link: '/stores/'},
	{ text: 'backend-api', link: '/backend-api/'},
	{

		text: 'Components', link: '/components/',
		items: [
		{ text: 'LandingPage', link: '/components/LandingPage' },
		{ text: 'EnterTournament', link: '/components/EnterTournament' },
		{ text: 'CreateTournament', link: '/components/CreateTournament' },
		{ text: 'ViewOldTournaments', link: '/components/ViewOldTournaments' },
		{
			text: 'TournamentHome', link: '/components/TournamentHome',
			items: [
				{ text: 'Dashboard', link: '/components/tournamentViews/Dashboard' },
				{ text: 'Games', link: '/components/tournamentViews/Games' },
				{ text: 'Teams', link: '/components/tournamentViews/Teams' },
				{ text: 'Team', link: '/components/tournamentViews/Team' },
				{ text: 'Settings', link: '/components/tournamentViews/Settings' },
				{ text: 'EvalTournament', link: '/components/tournamentViews/EvalTournament' }
			]
		},
		{
			text: 'Utilcomponents', link: '/components/utilcomponents',
			items: [
				{ text: 'BackHeader', link: '/components/utilcomponents/BackHeader' },
				{ text: 'Game', link: '/components/utilcomponents/Game' },
				{ text: 'LanguageSelectBtn', link: '/components/utilcomponents/LanguageSelectBtn' },
				{ text: 'ThemeChangeBtn', link: '/components/utilcomponents/ThemeChangeBtn' },

			]
		},
		]
	},


	{
		text: 'utils', link: '/utils/',
		items: [
		{ text: 'tournamentDataStructureUtil', link: '/utils/tournamentDataStructureUtil' },
		{ text: 'tournamentAlgo-v2', link: '/utils/tournamentAlgov2' },
		{ text: 'tournamentEvaluation', link: '/utils/tournamentEvaluation' },
		{ text: 'tournamentPDFCreation', link: '/utils/tournamentPDFCreation' },
		{ text: 'tournamentParamCheck', link: '/utils/tournamentParamCheck' },
		{ text: 'time', link: '/utils/time' },
		]
	}
	]
}})

