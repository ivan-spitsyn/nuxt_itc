<script setup>
const slots = useSlots();
</script>
<template>
  <div class="CertificatePrice">
    <div class="CertificatePrice__text"><slot /></div>
    <div v-if="slots.button" class="CertificatePrice__button">
      <slot name="button" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.CertificatePrice {
  background: rgba(0, 59, 151, 0.12);
  border-radius: 12px;
  padding: 32px 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &__text {
   font: var(--font-h2-medium);
  }
}
</style>