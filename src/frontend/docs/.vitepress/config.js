import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TourneyLab Frontend Documentation",
  description: "Documentation for the TourneyLab Frontend setup with Vue.js",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/' },
      { text: 'Util', link: '/utils/' }
    ],

    sidebar: [
	{
		text: 'Components',
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
				{ text: 'Settings', link: '/components/tournamentViews/Settings' }
			]
		},
		]
	},
	{
		text: 'utils',
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
