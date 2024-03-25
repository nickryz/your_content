<script setup lang="ts">
import gsap from 'gsap'
import { onMounted, onUnmounted, ref } from 'vue'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()

const svg = ref(null)
const path = ref(null)

const name = 'pageForPage'

function initScene() {
  const tl = gsap.timeline()

  const morph = {
    shapeStart:
      'M0 9.92881e-05C23 -0.00012411 47.5 9.92881e-05 60 9.92881e-05C72.5 9.92881e-05 105 9.92881e-05 120 9.92881e-05C135 9.92881e-05 160.5 0 180 0C199.5 0 221 9.92881e-05 240 9.92881e-05C259 9.92881e-05 283 9.92881e-05 300 9.92881e-05C317 9.92881e-05 336 9.92881e-05 360 9.92881e-05C360 34 360 751 360 751H0C0 751 0 35.0003 0 9.92881e-05Z',
    page2:
      'M0 209.5C23 209.5 21 491 60 491C99 491 83 281 120 281C157 281 141 368 180 368C219 368 205 209.5 240 209.5C275 209.5 267 424 300 424C333 424 336 311 360 311C360 345 360 751 360 751H0C0 751 0 244.5 0 209.5Z',
    page3:
      'M0 750C23 750 21 750 60 750C99 750 83 750 120 750C157 750 141 750 180 750C219 750 205 750 240 750C275 750 267 750 300 750C333 750 336 750 360 750C360 750.999 360 750.999 360 750.999H0.000144839C0.000144839 750.999 0 750.999 0 750Z',
    menuMid:
      'M0 202.5C23 202.5 21 125 60 125C99 125 83 272.5 120 272.5C157 272.5 141 96.5 180 96.5C219 96.5 205 330.5 240 330.5C275 330.5 267 215.5 300 215.5C333 215.5 336 265 360 265C360 299 360 751 360 751H0C0 751 0 237.5 0 202.5Z',
    menuEnd:
      'M0 464.5C23 464.5 46 464.5 60 464.5C74 464.5 100.5 464.5 120 464.5C139.5 464.5 164.5 464.5 180 464.5C195.5 464.5 223 464.5 240 464.5C257 464.5 289 464.5 300 464.5C311 464.5 336 464.5 360 464.5C360 498.5 360 751 360 751H0C0 751 0 499.5 0 464.5Z'
  }

  tl.to(path.value, {
    delay: 0.2,
    morphSVG: morph.page2,
    duration: 0.4,
    ease: 'expo.in'
  })

  tl.to(
    svg.value,
    {
      yPercent: 0,
      duration: 0.4,
      ease: 'expo.in'
    },
    '<'
  )

  tl.to(path.value, {
    morphSVG: morph.menuEnd,
    duration: 0.4,
    ease: 'expo.out'
  })

  return tl
}

onMounted(() => appStore.navTimeline?.add(initScene(), 'main'))

onUnmounted(() => {
  const tl = appStore.navTimeline.getById(name)
  appStore.navGSAPAnimation.remove(tl)
})
</script>

<template>
  <div class="fixed inset-0 overflow-hidden -z-10">
    <svg
      ref="svg"
      viewBox="0 0 360 751"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      class="w-full h-full absolute bottom-0 left-0"
    >
      <path
        ref="path"
        d="M0 9.92881e-05C23 -0.00012411 47.5 9.92881e-05 60 9.92881e-05C72.5 9.92881e-05 105 9.92881e-05 120 9.92881e-05C135 9.92881e-05 160.5 0 180 0C199.5 0 221 9.92881e-05 240 9.92881e-05C259 9.92881e-05 283 9.92881e-05 300 9.92881e-05C317 9.92881e-05 336 9.92881e-05 360 9.92881e-05C360 34 360 751 360 751H0C0 751 0 35.0003 0 9.92881e-05Z"
        fill="var(--main-bg-color)"
      ></path>
    </svg>
  </div>
</template>

<style scoped></style>
