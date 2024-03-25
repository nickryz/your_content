<script setup lang="ts">
import BaseSection from '@/components/blocks/BaseSection.vue'
import TitleText from '@/components/blocks/TitleText.vue'
import PointTitle from '@/components/blocks/PointTitle.vue'
import SmoothImage from '@/components/blocks/SmoothImage.vue'
</script>

<template>
  <BaseSection>
    <div class="flex flex-col sm:flex-row gap-y-8">
      <div class="sm:w-1/2">
        <PointTitle title="Portfolio" class="pb-8" />
        <TitleText>RECENT <br />WORK</TitleText>
        <SmoothImage img-src="/img/portfolio/1.webp" class="w-full sm:w-3/4 mt-8" />
      </div>
      <div class="sm:w-1/2">
        <SmoothImage img-src="/img/portfolio/1.webp" class="w-full sm:w-full ml-auto" />
      </div>
    </div>
    <div class="flex justify-between flex-col sm:flex-row gap-8 mt-8 sm:mt-32">
      <div class="sm:w-7/12">
        <SmoothImage img-src="/img/portfolio/1.webp" class="w-full sm:w-10/12 ml-auto sm:mb-32" />
      </div>
      <div class="sm:w-5/12 self-end">
        <SmoothImage img-src="/img/portfolio/1.webp" class="w-full sm:w-3/4 ml-auto" />
      </div>
    </div>
  </BaseSection>
</template>

<style scoped></style>
