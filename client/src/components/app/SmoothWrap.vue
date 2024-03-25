<script setup lang="ts">
import { useGSAPContext } from '@/composables/useGSAPContext'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// @ts-ignore
import { ScrollSmoother } from '@/libs/gsap/ScrollSmoother'
import { watch } from 'vue'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

interface Props {
  isPaused?: boolean
}

const props = defineProps<Props>()

const { context } = useGSAPContext(initSmoothScroll)

watch(
  () => props.isPaused,
  (isPaused) => context.value?.paused(isPaused)
)

function initSmoothScroll(self: gsap.Context) {
  const scroll = ScrollSmoother.create({
    smooth: 1.2
  })

  self.add('paused', (isPaused: boolean) => {
    scroll.paused(isPaused)
  })
}
</script>

<template>
  <div id="smooth-wrapper" class="smooth-wrapper">
    <div id="smooth-content">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
