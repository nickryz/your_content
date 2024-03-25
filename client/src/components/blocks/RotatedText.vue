<script setup lang="ts">
import { useGSAPContext } from '@/composables/useGSAPContext'
import { computed, ref } from 'vue'
import gsap from 'gsap'

interface Props {
  textItems: string[]
  height?: number
  width?: number
  point?: 'rem' | 'px' | 'em' | '%'
}

const props = withDefaults(defineProps<Props>(), {
  height: 1,
  width: 3,
  point: 'rem'
})

const textElements = ref(null)

const w = computed(() => props.width + props.point)
const h = computed(() => props.height * 1.25 + props.point)

useGSAPContext(initScene)

function initScene() {
  const textItems = textElements.value || []
  if (textItems.length < 2) return

  const duration = 0.4
  const staggerDelay = 1.25
  const cycleDuration = duration + staggerDelay
  const repeatDelay = cycleDuration * (textItems.length - 1) + staggerDelay

  const tl = gsap.timeline({ paused: false })

  tl.from(textItems, {
    y: '100%',
    duration,
    stagger: {
      each: cycleDuration,
      repeat: -1,
      repeatDelay
    }
  })
  tl.to(
    textItems,
    {
      y: '-100%',
      duration,
      stagger: {
        each: cycleDuration,
        repeat: -1,
        repeatDelay
      }
    },
    cycleDuration
  )

  tl.seek(duration)
}
</script>

<template>
  <div class="relative overflow-hidden" :style="{ width: w, height: h }">
    <div
      v-for="text in props.textItems"
      :key="text"
      ref="textElements"
      class="absolute inset-0 uppercase z-10 flex items-center leading-tight whitespace-nowrap"
    >
      {{ text }}
    </div>
  </div>
</template>

<style scoped></style>
