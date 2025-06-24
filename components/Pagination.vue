<script setup lang="ts">
import Button from '../ui/Button.vue';

defineProps<{
  onNext: () => void;
  onPrev: () => void;
  canPrev: boolean;
}>();
</script>

<template>
  <nav class="flex gap-4 mt-6" aria-label="Sidnavigering">
    <Button @click="onPrev" :disabled="!canPrev">Föregående</Button>
    <Button @click="onNext">Nästa</Button>
  </nav>
</template>