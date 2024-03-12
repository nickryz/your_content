import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { GSAPTimeline } from '@/libs/gsap/types/types'

type Timeline = null | Promise<GSAPTimeline> | GSAPTimeline

export const useAppStore = defineStore('app', () => {
  // NAVIGATION
  const isNavActive = ref<boolean>(false)
  const navGSAPAnimation = ref<Timeline>(null)

  return { isNavActive, navGSAPAnimation }
})
