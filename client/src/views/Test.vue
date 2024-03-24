<script setup lang="ts"></script>

<template>
  <div>
    <div v-for="i in 5" :key="i" style="height: 100vh">
      <div class="container">
        <router-link to="test">go to test</router-link>
        <div ref="cubes" style="background: red; width: 100px; height: 100px" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
