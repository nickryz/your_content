<script setup lang="ts">
import { useAppStore } from '@/stores/app'

import { RouterView } from 'vue-router'
import PageForPage from '@/components/app/PageForPage.vue'
import MainHeader from '@/components/app/MainHeader.vue'
import SmoothWrap from '@/components/app/SmoothWrap.vue'
import MainContentWrap from '@/components/app/MainContentWrap.vue'

const appStore = useAppStore()
</script>

<template>
  <!-- HEADER -->
  <MainHeader class="fixed z-20" />
  <!-- PAGE BG -->
  <PageForPage />
  <!-- MAIN CONTENT -->
  <MainContentWrap>
    <SmoothWrap :is-paused="appStore.isNavActive || !appStore.isScrollActive">
      <RouterView />
    </SmoothWrap>
  </MainContentWrap>
</template>

<style scoped></style>
