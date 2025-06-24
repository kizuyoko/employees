<template>
  <li class="flex items-center gap-4 mb-4">
    <img
      :src="img"
      :alt="name"
      class="object-cover w-16 h-16 rounded-full"
    />
    <div>
      <h2>{{ name }}</h2>
      <a :href="`mailto:${email}`" :aria-label="`Skicka e-post till ${name}`">
        e-postadress
      </a>
    </div>
  </li>
</template>

<script setup>
defineProps({
  name: String,
  email: String,
  img: String
});
</script>