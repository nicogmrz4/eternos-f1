import HomeView from '@/views/HomeView.vue'
import CalendarView from '@/views/CalendarView.vue'
import TeamsChampionshipView from '@/views/TeamsChampionshipView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarView
    },
    {
      path: '/teams-championship',
      name: 'teams',
      component: TeamsChampionshipView
    },
    {
      path: '/rules',
      name: 'rules',
      component: () => import('@/views/RulesView.vue'),
    },
    {
      path: '/rules/room-config',
      name: 'room-config',
      component: () => import('@/views/rules/RoomSettings.vue')
    },
    {
      path: '/rules/points',
      name: 'points-rules',
      component: () => import('@/views/rules/Points.vue')
    },
    {
      path: '/rules/other-points',
      name: 'other-points-rules',
      component: () => import('@/views/rules/OtherPoints.vue')
    },        {
      path: '/rules/sprint',
      name: 'sprint-rules',
      component: () => import('@/views/rules/Sprint.vue')
    },
    {
      path: '/rules/penalties',
      name: 'penalties-rules',
      component: () => import('@/views/rules/Penalties.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth', }
  },
})

export default router
