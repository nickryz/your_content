<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ref } from 'vue'
import { useGSAPContext } from '@/composables/useGSAPContext'

gsap.registerPlugin(ScrollTrigger)

useGSAPContext(initScene)

const cubes = ref<HTMLElement[] | null>(null)
function initScene() {
  cubes.value?.forEach((trigger) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        trigger: trigger,
        start: 'top 90%',
        end: 'bottom 30%'
        // markers: true
      }
    })
    tl.to(trigger, { rotate: 90 })
    tl.to(trigger, { x: 500 })
  })
}
</script>

<template>
  <div v-for="i in 10" :key="i" style="height: 100vh">
    <div class="container">
      <router-link to="test">go to test</router-link>
      <div ref="cubes" style="background: red; width: 100px; height: 100px" />
    </div>
  </div>
</template>

<style scoped></style>
