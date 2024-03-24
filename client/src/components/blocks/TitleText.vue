<script setup lang="ts">
interface Props {
  tag?: string
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'h2'
})
</script>

<template>
  <component
    :is="props.tag"
    class="text-7xl sm:text-s-5xl font-semibold font-title uppercase leading-none"
  >
    <slot />
    <slot name="end">
      <div class="accent-point inline-block bg-accent rounded-sm" />
    </slot>
  </component>
</template>

<style scoped>
.accent-point {
  width: 0.2em;
  height: 0.2em;
  margin: 0 0.03em;
}
</style>
