<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useAppStore } from '@/stores/app'
import gsap from 'gsap'

const appStore = useAppStore()

const name = 'mainContent'
const main = ref(null)

function initScene() {
  const tl = gsap.timeline()
  const mainEl: HTMLElement | null = main.value

  if (mainEl) {
    tl.to(mainEl, { opacity: 0, duration: 0.4 })
  }

  return tl
}

onMounted(() => {
  appStore.routeTimeline?.add(initScene(), 0)
})

onUnmounted(() => {
  const tl = appStore.routeTimeline.getById(name)
  appStore.routeTimeline.remove(tl)
})
</script>

<template>
  <main ref="main" class="h-full">
    <slot />
  </main>
</template>

<style scoped></style>
