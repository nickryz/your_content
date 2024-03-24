<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
// @ts-ignore
import { MorphSVGPlugin } from '@/libs/gsap/MorphSVGPlugin'
import { useAppStore } from '@/stores/app'

gsap.registerPlugin(MorphSVGPlugin)

const appStore = useAppStore()

const pathGroup = ref<HTMLElement | null>(null)

const tl = gsap.timeline()

function initScene() {
  const paths: HTMLCollection | [] = pathGroup.value?.children || []

  ;[...paths].forEach((path) => {
    const newPath: string | null = path.getAttribute('data-target')

    if (newPath) {
      tl.to(
        path,
        {
          morphSVG: newPath,
          stroke: 'black',
          duration: 0.8,
          ease: 'expo.inOut'
        },
        0
      )
    }
  })

  return tl
}

onMounted(() => {
  const position = appStore.navGSAPAnimation.labels.main
  if (position === undefined) {
    appStore.navGSAPAnimation.addLabel('main', '>')
  }
  appStore.navGSAPAnimation.add(initScene(), 'main')
})

onUnmounted(() => {
  appStore.navGSAPAnimation.remove(initScene())
})
</script>

<template>
  <svg
    width="30"
    height="61"
    viewBox="0 0 30 61"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    class="cursor-pointer"
  >
    <g ref="pathGroup">
      <path
        class="lineA"
        d="M5.07849 11V60 "
        stroke="#EEEEF2"
        stroke-width="2"
        data-target="M5.07849 34.5V35"
      ></path>
      <path
        class="lineB"
        d="M15.0785 16V45"
        stroke="#EEEEF2"
        stroke-width="2"
        data-target="M21 30H9"
      ></path>
      <path
        class="lineC"
        d="M25.0784 1V50"
        stroke="#EEEEF2"
        stroke-width="2"
        data-target="M25.0784 25V25.5"
      ></path>
      <path
        class="pointA"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.07843 11L9 8.4482L9 3.61273L5.07843 1L1.07843 3.61273L1 8.4482L5.07843 11Z"
        stroke="#EEEEF2"
        stroke-width="2"
        data-target="M5.07843 35L9 32.4482L9 27.6127L5.07843 25L1.07843 27.6127L1 32.4482L5.07843 35Z"
      ></path>
      <path
        class="pointB"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M25.0784 60L29 57.4482V52.6127L25.0784 50L21.0784 52.6127L21 57.4482L25.0784 60Z"
        stroke="#EEEEF2"
        stroke-width="2"
        data-target="M25.0784 35L29 32.4482V27.6127L25.0784 25L21.0784 27.6127L21 32.4482L25.0784 35Z"
      ></path>
    </g>
  </svg>
</template>

<style scoped></style>
