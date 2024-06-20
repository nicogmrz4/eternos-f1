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
      component: () => import('@/views/RulesView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth', }
  },
})

export default router
