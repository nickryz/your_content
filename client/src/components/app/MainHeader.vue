<script setup lang="ts">
import { useAppStore } from '@/stores/app'

import TopLogo from '@/components/app/TopLogo.vue'
import HamburgerTrigger from '@/components/app/HamburgerTrigger.vue'

const appStore = useAppStore()

async function onNavTriggerClick() {
  appStore.isNavActive = !appStore.isNavActive
  if (appStore.isNavActive) {
    await appStore.routeTimeline.play()
    appStore.navTimeline.play()
  } else {
    await appStore.navTimeline.reverse()
    appStore.routeTimeline.reverse()
  }
}
</script>

<template>
  <header class="main-header w-full px-5 py-3 sm:py-5 flex justify-between pointer-events-none">
    <TopLogo class="w-10 sm:w-14 pointer-events-auto" />
    <HamburgerTrigger
      :is-active="appStore.isNavActive"
      class="h-10 sm:h-14 w-auto pointer-events-auto"
      @click="onNavTriggerClick"
    />
  </header>
</template>

<style scoped>
.main-header {
  min-height: var(--header-height);
}
</style>
