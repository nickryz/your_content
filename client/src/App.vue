<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageForPage from '@/components/app/PageForPage.vue'
import MainHeader from '@/components/app/MainHeader.vue'
</script>

<template>
  <!-- HEADER -->
  <MainHeader class="fixed z-10" />
  <!-- PAGE BG -->
  <PageForPage />
  <!-- MAIN CONTENT -->
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
