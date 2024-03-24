<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  size?: string
}

const props = defineProps<Props>()

const styles = computed(() => {
  return props.size ? { width: props.size, height: props.size } : {}
})
</script>

<template>
  <div class="point rounded-sm border flex justify-center items-center" :style="styles">
    <div class="point__inner rounded-sm scale-60 bg-accent w-full h-full" :style="styles"></div>
  </div>
</template>

<style scoped lang="scss">
.point {
  border-color: rgba(238, 238, 242, 0.2);

  &__inner {
    transform: scale(0.6);
  }
}
</style>
