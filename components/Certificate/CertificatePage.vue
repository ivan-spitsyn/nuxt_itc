<template>
  <div class="page">
    <CertificateHeader />
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