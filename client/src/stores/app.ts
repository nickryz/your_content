import { ref, shallowRef } from 'vue'
import { defineStore } from 'pinia'
import gsap from 'gsap'

function initNavTimeLine() {
  return initTimeLine().addLabel('start', 0).addLabel('main', '<')
}

function initTimeLine() {
  return gsap.timeline({
    paused: true
  })
}

export const useAppStore = defineStore('app', () => {
  const animatedPromises = ref<Promise<void>[]>([])
  // SCROLL
  const isScrollActive = ref<boolean>(true)
  // NAVIGATION
  const burgerTriggerAnimation = shallowRef<null | gsap.core.Timeline>(null)
  const isNavActive = ref<boolean>(false)
  const navGSAPAnimation = shallowRef(initTimeLine())
  // ROUTING
  const routeGSAPAnimation = shallowRef(initTimeLine())
  const navTimeline = shallowRef(initNavTimeLine())
  const routeTimeline = shallowRef(initTimeLine())

  return {
    isNavActive,
    isScrollActive,
    burgerTriggerAnimation,
    navGSAPAnimation,
    routeGSAPAnimation,
    routeTimeline,
    animatedPromises,
    navTimeline
  }
})
