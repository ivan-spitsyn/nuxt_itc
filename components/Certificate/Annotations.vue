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
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 32px;
}
</style>