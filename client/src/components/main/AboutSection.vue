<script setup lang="ts">
import BaseSection from '@/components/blocks/BaseSection.vue'
import PreTitleText from '@/components/blocks/PreTitleText.vue'
import PointTitle from '@/components/blocks/PointTitle.vue'

const textPoints = [
  'DELIVERING',
  'INNOVATIVE',
  'DESIGN',
  'AND',
  'DEVELOPMENT',
  'WITH',
  'IMPACTFUL',
  'DIGITAL',
  'MARKETING',
  'CAMPAIGNS',
  'THAT',
  'CATAPULT',
  'BRANDS',
  'FORWARD.'
]
</script>

<template>
  <BaseSection>
    <PointTitle title="About" class="pb-8" />
    <PreTitleText class="max-w-xs">
      WE SPECIALIZE IN CREATING MEANINGFUL DIGITAL EXPERIENCES INFUSED WITH EMOTION, DRIVEN BY
      INNOVATION, EVOKING A SENSE OF AWE AND WONDER.
    </PreTitleText>
    <div class="mt-8">
      <div v-for="text in textPoints" :key="text" class="text-s-4xl leading-none">{{ text }}</div>
    </div>
  </BaseSection>
</template>

<style scoped></style>
