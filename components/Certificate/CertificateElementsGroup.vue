<script setup>
const props = defineProps({
  col: {
    type: String,
    required: true
  }
});
</script>
<template>
  <div :class="['CertificateElementsGroup', 'CertificateElementsGroup_col-' + props.col ]">
    <slot />
  </div>
</template>
<style lang="scss">
.CertificateElementsGroup {
  display: grid;
  gap: 16px 24px;

  &_col-2 {
    grid-template-columns: 1fr 1fr;
  }
}
</style>