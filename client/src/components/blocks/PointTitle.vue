<script setup lang="ts">
import PointText from '@/components/blocks/PointText.vue'

interface Props {
  title: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'title'
})
</script>

<template>
  <PointText :text-items="[props.title]" dotSize="0.75rem" class="leading-none text-xs" />
</template>

<style scoped></style>
