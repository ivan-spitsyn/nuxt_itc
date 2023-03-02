<script setup>
const slots = useSlots();
</script>

<template>
<div class="CertificateCardMini">
  <div v-if="slots.title" class="CertificateCardMini__title"><slot name="title" /></div>
  <CertificateContent class="CertificateCardMini__content">
    <slot/>
  </CertificateContent>
  <div v-if="slots.button" class="CertificateCardMini__button">
    <CertificateButton><slot name="button" /></CertificateButton>
  </div>
</div>
</template>

<style scoped lang="scss">
.CertificateCardMini {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  margin: auto;
  padding: 56px 48px;
  background: #003B97;
  border-radius: 12px;
  color: #fff;

  &__title {
    margin-top: 0;
    width: 100%;
    text-align: left;
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
  .CertificateCardMini {
   ul {
     li {}
   }
  }
}
</style>