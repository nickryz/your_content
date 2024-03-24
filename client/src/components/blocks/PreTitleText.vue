<script setup lang="ts">
interface Props {
  tag?: string
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'h3'
})
</script>

<template>
  <component :is="props.tag" class="text-sm font-thin text-light">
    <slot />
  </component>
</template>

<style scoped></style>
