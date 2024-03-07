<script setup lang="ts">
import { useGSAPContext } from '@/composables/useGSAPContext'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// @ts-ignore
import { ScrollSmoother } from '@/libs/gsap/ScrollSmoother'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

function initSmoothScroll() {
  ScrollSmoother.create({
    smooth: 2
  })
}

useGSAPContext(initSmoothScroll)
</script>

<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
