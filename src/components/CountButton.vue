<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

interface CountButtonProps {
  onClick: () => void
  action: string
}

const props = defineProps<CountButtonProps>()

const emit = defineEmits<{
  clicked: []
}>()

const handleClick = () => {
  props.onClick()
  emit(`clicked${props.action}`)
}
</script>

<template>
  <button @click="handleClick" class="count_button">
    <slot />
  </button>
</template>

<style scoped>
.count_button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #42b983;
  color: white;
  cursor: pointer;
}
</style>
