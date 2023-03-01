<script setup>
const slots = useSlots();
</script>

<template>
<div class="CertificateCard">
  <div v-if="slots.title" class="CertificateCard__title"><slot name="title" /></div>
  <CertificateContent class="CertificateCard__content">
    <slot/>
  </CertificateContent>
  <div v-if="slots.button" class="CertificateCard__button">
    <CertificateButton><slot name="button" /></CertificateButton>
  </div>
</div>
</template>

<style scoped lang="scss">
.CertificateCard {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
  margin: auto;
  padding: 56px 48px;
  background: var(--color-primary);
  border-radius: 12px;
  color: #fff;

  &__title {
    margin-top: 0;
    width: 100%;
    text-align: center;
    font: var(--font-h3-medium)
  }

  &__content {
    margin-top: 0;
    margin-bottom: auto;
  }

  &__button {
    width: 100%;
    margin-top: auto;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    &:deep(.Button) {
      width: 100%;
    }
  }
}

@media (max-width: var(--bp-mobile)) {
  .CertificateCard {
   ul {
     li {}
   }
  }
}
</style>