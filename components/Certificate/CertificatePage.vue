<template>
  <div class="page">
    <CertificateHeader>
      <template #menu><slot name="menu" /></template>
      <template #button><slot name="button" /></template>
    </CertificateHeader>
    <div class="page__content">
      <slot />
      <CertificateFooter />
    </div>
  </div>
</template>
<style scoped lang="scss">
.page {
  &__content {
    display: flex;
    flex-direction: column;
    gap: 120px;
  }
}
</style>