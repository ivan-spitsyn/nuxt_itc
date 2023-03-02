<template>
  <div class="CertificatePrice">
    <div class="CertificatePrice__text">Стоимость сертификации — 20 000 ₽</div>
    <div class="CertificatePrice__button">
      <CertificateButton>Пройти сертификацию</CertificateButton>
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