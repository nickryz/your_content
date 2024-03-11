<script setup lang="ts">
import { ref, watch } from 'vue'
import gsap from 'gsap'
import { useGSAPContext } from '@/composables/useGSAPContext'
// @ts-ignore
import { MorphSVGPlugin } from '@/libs/gsap/MorphSVGPlugin'

gsap.registerPlugin(MorphSVGPlugin)

const active = ref(false)
const pathGroup = ref<HTMLElement | null>(null)
const { context } = useGSAPContext(initScene)

watch(active, (active) => {
  active ? context.value?.play() : context.value?.reverse()
})

function initScene(self: gsap.Context) {
  const paths: HTMLCollection | [] = pathGroup.value?.children || []
  const tl = gsap.timeline({ paused: true })

  ;[...paths].forEach((path) => {
    const newPath: string | null = path.getAttribute('data-target')

    if (newPath) {
      tl.to(
        path,
        {
          morphSVG: newPath,
          stroke: 'black'
        },
        0
      )
    }
  })

  self.add('play', () => {
    tl.play()
  })

  self.add('reverse', () => {
    tl.reverse()
  })
}
</script>

<template>
  <div class="cursor-pointer" @click="active = !active">
    <svg width="30" height="61" viewBox="0 0 30 61" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  </div>
</template>

<style scoped></style>
