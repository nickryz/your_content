<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useAppStore } from '@/stores/app'
import gsap from 'gsap'

const appStore = useAppStore()

const main = ref(null)
const tl = gsap.timeline()

function initScene() {
  const mainEl: HTMLElement | null = main.value

  if (mainEl) {
    tl.to(mainEl, { opacity: 0, duration: 0.4 })
  }

  return tl
}

onMounted(() => {
  appStore.routeGSAPAnimation.add(initScene())
})

onUnmounted(() => {
  appStore.routeGSAPAnimation.remove(initScene())
})
</script>

<template>
  <div ref="main">
    <slot />
  </div>
</template>

<style scoped></style>
