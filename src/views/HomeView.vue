<script setup lang="ts">
import SmoothWrap from '@/components/SmoothWrap.vue'
</script>

<template>
  <SmoothWrap>
    <div
      v-for="i in 10"
      :style="i % 2 ? { background: 'tomato' } : {}"
      :key="i"
      style="height: 100vh"
    >
      <div class="container">
        <router-link to="test">go to test</router-link>
        <div style="background: red; width: 100px; height: 100px" />
      </div>
    </div>
  </SmoothWrap>
</template>

<style scoped></style>
