<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import type { GSAPTimeline } from '@/libs/gsap/types/types'

import TopLogo from '@/components/app/TopLogo.vue'
import HamburgerTrigger from '@/components/app/HamburgerTrigger.vue'

const appStore = useAppStore()

function onNavTriggerClick() {
  appStore.isNavActive = !appStore.isNavActive
}

function setNavGSAPAnimation(tl: GSAPTimeline) {
  appStore.navGSAPAnimation = tl
}
</script>

<template>
  <header class="w-full p-5 flex justify-between">
    <TopLogo class="w-14" />
    <HamburgerTrigger
      :is-active="appStore.isNavActive"
      @click="onNavTriggerClick"
      @animation-start="setNavGSAPAnimation"
    />
  </header>
</template>

<style scoped></style>
