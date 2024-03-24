<script setup lang="ts">
import { ref } from 'vue'
import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
// @ts-ignore
import { SplitText } from '@/libs/gsap/SplitText'

import BaseSection from '@/components/blocks/BaseSection.vue'
import { useGSAPContext } from '@/composables/useGSAPContext'
import PointText from '@/components/blocks/PointText.vue'
import PreTitleText from '@/components/blocks/PreTitleText.vue'

gsap.registerPlugin(SplitText, CustomEase)

const title = ref(null)
useGSAPContext(initScene)

function initScene() {
  let e = new SplitText(title.value, {
    type: 'lines, chars'
  })
  gsap.set(title.value, {
    perspective: 400
  }),
    gsap.set(e.chars, {
      transformOrigin: '0% 100%',
      scale: 6,
      opacity: 0,
      rotate: 45,
      y: window.innerHeight
    }),
    gsap.to(e.chars, {
      transformOrigin: '0% 100%',
      scale: 1,
      opacity: 1,
      rotate: 0,
      duration: 1,
      delay: 0.8,
      stagger: {
        amount: 0.3
      },
      y: 0,
      ease: CustomEase.create(
        'custom',
        'M0,0 C0,0 0.076,0.578 0.226,0.826 0.324,0.989 0.599,0.986 0.66,0.989 0.791,0.997 1,1 1,1 '
      )
    })
}
</script>

<template>
  <BaseSection class="hero min-h-screen">
    <div class="pt-header-h pb-8 h-full w-full relative flex flex-col">
      <div
        class="absolute left-0 top-0 pl-10 pr-5 w-full h-header-h flex items-center justify-center"
      >
        <PointText :text-items="['знімай', 'створюй', 'вірь в себе']" :width="6" class="mx-2" />
      </div>
      <div class="hero__inner flex flex-grow relative">
        <h1 ref="title" class="hero__title font-title my-auto">
          <div>ТВІЙ</div>
          <div>CONTENT <span class="hero__title--num text-accent whitespace-nowrap">2.0</span></div>
        </h1>
      </div>
      <div class="hidden sm:block">
        <PreTitleText class="w-1/3 max-w-xs ml-auto">
          WE SPECIALIZE IN CREATING MEANINGFUL DIGITAL EXPERIENCES INFUSED WITH EMOTION, DRIVEN BY
          INNOVATION, EVOKING A SENSE OF AWE AND WONDER.
        </PreTitleText>
      </div>
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.hero {
  display: flex;
  height: 100%;

  &__title {
    font-weight: 700;
    line-height: 0.9;
    font-size: clamp(90px, 15.27vw, 340px);

    &--num {
      font-size: clamp(110px, 18.66vw, 415px);
    }
  }
}
</style>
