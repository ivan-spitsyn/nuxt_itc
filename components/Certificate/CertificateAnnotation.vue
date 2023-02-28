<script setup>
const props = defineProps({
  link: {
    type: String,
    default: '/',
    required: true
  },
  title: {
    type: String,
    default: '',
    required: true
  },
  description: {
    type: String,
    default: '',
    required: false
  }
})
</script>
<template>
  <NuxtLink :to="props.link" class="annotation">
    <div class="annotation__title">{{ props.title }}</div>
    <div v-if="props.description" class="annotation__description">{{ props.description }}</div>
  </NuxtLink>
</template>
<style scoped lang="scss">
.annotation {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 360px;

  padding: 32px;
  border: 2px solid #333333;
  border-radius: 8px;

  text-decoration: none;

  &__title {
    text-align: center;
    font-size: 48px;
  }
}
</style>