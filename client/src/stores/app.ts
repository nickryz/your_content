import { ref, shallowRef } from 'vue'
import { defineStore } from 'pinia'
import gsap from 'gsap'

function initTimeLine() {
  const tl = gsap.timeline({
    paused: true,
    onComplete() {
      console.log(2)
    }
  })

  // tl.addLabel('start')

  return tl
}
export const useAppStore = defineStore('app', () => {
  // SCROLL
  const isScrollActive = ref<boolean>(true)
  // NAVIGATION
  const isNavActive = ref<boolean>(false)
  const navGSAPAnimation = shallowRef(initTimeLine())
  // ROUTING
  const routeGSAPAnimation = shallowRef(initTimeLine())

  return { isNavActive, isScrollActive, navGSAPAnimation, routeGSAPAnimation }
})
