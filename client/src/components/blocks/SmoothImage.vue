<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'
import gsap from 'gsap'
import { useGSAPContext } from '@/composables/useGSAPContext'
// @ts-ignore
import { MorphSVGPlugin } from '@/libs/gsap/MorphSVGPlugin'
gsap.registerPlugin(MorphSVGPlugin)

interface Props {
  imgSrc: string
  dscr?: string
}

const props = defineProps<Props>()
const uid: string | number = getCurrentInstance()?.uid || Math.random()

useGSAPContext(initScene)

const figure = ref(null)
const path = ref(null)

function initScene() {
  const tl = gsap.timeline({ paused: true })

  const morph = {
    end: 'M0 20C0 8.95429 8.95431 0 20 0H640C651.046 0 660 8.95431 660 20V640C660 651.046 651.054 660 640.008 660C612.831 660 563.545 660 528 660C476.451 660 447.549 660 396 660C344.451 660 315.549 660 264 660C212.451 660 183.549 660 132 660C96.4552 660 47.169 660 19.9915 660C8.94585 660 0 651.046 0 640V20Z',
    middle: [
      'M0 20C0 8.95431 8.95431 0 20 0H640C651.046 0 660 8.95431 660 20V273.428C660 293.345 632.497 302.094 619.824 286.728C592.322 253.379 555.921 217 528 217C476.451 217 447.549 349.5 396 349.5C344.451 349.5 315.549 100 264 100C212.451 100 186.526 470 132 470C80.0222 470 7.19047 174.21 0.49727 146.566C0.130269 145.05 0 143.712 0 142.153V20Z',
      'M0 20C0 8.95431 8.95431 0 20 0H640C651.046 0 660 8.95431 660 20V178.998C660 181.64 659.527 184.139 658.486 186.567C647.205 212.89 575.39 376 528 376C476.451 376 447.549 210.5 396 210.5C344.451 210.5 315.549 484 264 484C212.451 484 190 137.5 119 137.5C88.7592 137.5 62.6909 148.113 42.7269 160.298C26.6953 170.082 0 158.877 0 140.095V20Z',
      'M0 20C0 8.95431 8.95431 0 20 0H640C651.046 0 660 8.95431 660 20V257.791C660 276.718 635.047 285.974 621.649 272.606C593.948 244.966 556.543 214 528 214C476.451 214 447.549 463.5 396 463.5C344.451 463.5 315.549 159 264 159C212.451 159 190 334.5 119 334.5C53.0114 334.5 6.89062 182.901 0.708624 161.5C0.213951 159.787 0 158.097 0 156.314V20Z',
      'M0 20C0 8.95431 8.95431 0 20 0H640C651.046 0 660 8.95431 660 20V187.429C660 191.697 658.676 195.803 656.051 199.169C640.389 219.252 581.334 291 537 291C485.451 291 447.549 117 396 117C344.451 117 315.549 459 264 459C212.451 459 190 272 119 272C95.7351 272 74.9397 287.086 57.4934 307.37C42.755 324.507 0 314.697 0 292.095V20Z'
    ],
    start:
      'M0 0.5C0 0.223858 0.223858 0 0.5 0H659.5C659.776 0 660 0.223858 660 0.5V0.5C660 0.776142 659.829 1 659.553 1C653.058 1 577.308 1 528 1C476.451 1 447.549 1 396 1C344.451 1 315.549 1 264 1C212.451 1 183.549 1 132 1C82.6923 1 6.94176 1 0.447341 1C0.171199 1 0 0.776142 0 0.5V0.5Z'
  }

  gsap.set(figure.value, { opacity: 0 })

  tl.to(path.value, {
    morphSVG: morph.middle[Math.floor(Math.random() * morph.middle.length)],
    duration: 0.7,
    ease: 'power4.in'
  })
  tl.to(path.value, {
    morphSVG: morph.end,
    duration: 0.7,
    ease: 'power4.out'
  })

  gsap
    .timeline({
      scrollTrigger: {
        trigger: figure.value,
        start: 'top 70%'
      }
    })
    .to(figure.value, {
      opacity: 1,
      duration: 0.01,
      onComplete: function () {
        tl.play()
      }
    })
}
</script>

<template>
  <figure>
    <div ref="figure" class="aspect-square overflow-hidden rounded-2xl">
      <svg
        viewBox="0 0 660 660"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-full h-full"
      >
        <mask :id="`${uid}`">
          <path
            ref="path"
            d="M0 0.5C0 0.223858 0.223858 0 0.5 0H659.5C659.776 0 660 0.223858 660 0.5V0.5C660 0.776142 659.829 1 659.553 1C653.058 1 577.308 1 528 1C476.451 1 447.549 1 396 1C344.451 1 315.549 1 264 1C212.451 1 183.549 1 132 1C82.6923 1 6.94176 1 0.447341 1C0.171199 1 0 0.776142 0 0.5V0.5Z"
            fill="#EEEEF2"
          ></path>
        </mask>
        <image
          width="100%"
          height="100%"
          class="w-full h-full"
          :mask="`url(#${uid})`"
          :href="props.imgSrc"
          data-svg-origin="0 0"
        ></image>
      </svg>
    </div>
    <figcaption v-if="props.dscr" class="mt-2">{{ dscr }}</figcaption>
  </figure>
</template>

<style scoped></style>
