<script setup lang="ts">
import AccentPoint from '@/components/blocks/AccentPoint.vue'
import RotatedText from '@/components/blocks/RotatedText.vue'

interface Props {
  textItems: string[]
  width?: number
  height?: number
  dotSize?: string
}

const props = withDefaults(defineProps<Props>(), {
  dotSize: '1.3rem',
  height: 1,
  width: 3
})
</script>

<template>
  <div class="flex items-center font-light uppercase">
    <AccentPoint :size="props.dotSize" class="mr-2" />
    <RotatedText
      v-if="textItems.length > 1"
      :text-items="props.textItems"
      :width="props.width"
      :height="props.height"
    />
    <div v-else>
      {{ textItems[0] }}
    </div>
  </div>
</template>

<style scoped></style>
