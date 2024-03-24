<script setup lang="ts">
import { useAppStore } from '@/stores/app'

import TopLogo from '@/components/app/TopLogo.vue'
import HamburgerTrigger from '@/components/app/HamburgerTrigger.vue'

const appStore = useAppStore()

async function onNavTriggerClick() {
  appStore.isNavActive = !appStore.isNavActive
  if (appStore.isNavActive) {
    await appStore.routeGSAPAnimation.play()
    appStore.navGSAPAnimation.play()
  } else {
    await appStore.navGSAPAnimation.reverse()
    appStore.routeGSAPAnimation.reverse()
  }
}
</script>

<template>
  <header class="main-header w-full px-5 py-3 sm:py-5 flex justify-between">
    <TopLogo class="w-10 sm:w-14" />
    <HamburgerTrigger
      :is-active="appStore.isNavActive"
      class="h-10 sm:h-14 w-auto"
      @click="onNavTriggerClick"
    />
  </header>
</template>

<style scoped>
.main-header {
  min-height: var(--header-height);
}
</style>
