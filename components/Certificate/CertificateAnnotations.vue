<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
    required: true
  },
})
</script>
<template>
  <div v-if="props.items.length" class="annotations">
    <CertificateAnnotation v-for="{link, title, description} in props.items" :key="link"
        :link="link"
        :title="title"
        :description="description"
    />
  </div>
</template>
<style scoped lang="scss">
.annotations {
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
}
</style>