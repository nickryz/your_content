<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useAppStore } from '@/stores/app'

import PageForPage from '@/components/app/PageForPage.vue'
import MainHeader from '@/components/app/MainHeader.vue'
import SmoothWrap from '@/components/app/SmoothWrap.vue'

const appStore = useAppStore()
</script>

<template>
  <!-- HEADER -->
  <MainHeader class="fixed z-10" />
  <!-- PAGE BG -->
  <PageForPage :is-menu-active="appStore.isNavActive" />
  <!-- MAIN CONTENT -->
  <main>
    <SmoothWrap :is-paused="appStore.isNavActive">
      <RouterView />
    </SmoothWrap>
  </main>
</template>

<style scoped></style>
