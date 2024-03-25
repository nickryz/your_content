import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { useAppStore } from '@/stores/app'
import gsap from 'gsap'

const initRouter = () => {
  const appStore = useAppStore()

  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/test',
        name: 'test',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/Test.vue')
      }
    ]
  })

  router.beforeEach(async () => {
    // NAVBAR CONTROL
    // close on each rote && before each route we are waiting animation is ending (gsap timeline as Promise)
    appStore.isNavActive = false
    appStore.isScrollActive = false

    const animations = []

    if (appStore.navTimeline.totalDuration() > 0) animations.push(appStore.navTimeline?.reverse())
    if (appStore.routeTimeline.totalDuration() > 0) animations.push(appStore.routeTimeline?.play())

    await Promise.all(animations)

    // await appStore.navGSAPAnimation?.reverse()
    // await appStore.routeGSAPAnimation?.play()

    appStore.isScrollActive = true

    return true
  })

  router.afterEach(() => {
    appStore.routeTimeline?.reverse()
  })

  return router
}

export default initRouter
