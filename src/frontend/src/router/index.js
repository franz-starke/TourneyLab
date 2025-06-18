import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/components/LandingPage.vue'
import EnterTournament from '@/components/EnterTournament.vue'
import CreateTournament from '@/components/CreateTournament.vue'
import ViewOldTournaments from '@/components/ViewOldTournaments.vue'
import TournamentHome from '@/components/TournamentHome.vue'
import Dashboard from '@/components/tournamentViews/Dashboard.vue'
import Games from '@/components/tournamentViews/Games.vue'
import Settings from '@/components/tournamentViews/Settings.vue'
import Imprint from '@/components/tournamentViews/Imprint.vue'
import Teams from '@/components/tournamentViews/Teams.vue'
import EditGame from '@/components/tournamentViews/EditGame.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'landing',
			component: LandingPage,
		},
		{
			path: '/enter-tournament',
			name: 'enter-tournament',
			component: EnterTournament,
		},
		{
			path: '/create-tournament',
			name: 'create-tournament',
			component: CreateTournament,
		},
		{
			path: '/old-tournament',
			name: 'old-tournament',
			component: ViewOldTournaments,
		},
		{
			path: '/tournament-home',
			name: 'tournament-home',
			component: TournamentHome,
			children: [
				{
					path: 'dashboard',
					component: Dashboard,
				},
				{
					path: 'games',
					component: Games,
				},
				{
					path: 'teams',
					component: Teams,
				},
				{
					path: 'settings',
					component: Settings,
				},
				{
					path: 'imprint',
					component: Imprint,
				},
				{
					path: 'edit-game/:gameId',
					component: EditGame,
					name: 'edit-game',
					props: route => ({
						gameId: Number(route.params.gameId),
					})
				}
			],
		},
	],
})

export default router
