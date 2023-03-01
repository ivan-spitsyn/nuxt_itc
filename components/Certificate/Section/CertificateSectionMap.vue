<template>
  <CertificateSection>
    <template #title>Наши авторизованные центры тестирования в России</template>
    <div class="Map">
      <img src="@/assets/images/certificate/map.jpg" alt="">
      <div class="Map__items">
        <div class="Map__item">
          <b>Москва:</b> 127018, Москва, ул. Складочная, д. 3, стр. 1
        </div>
        <div class="Map__item">
          <b>Санкт-Петербург:</b> 190000, Санкт-Петербург, Английская набережная, д. 70
        </div>
        <div class="Map__item">
          <b>Омск:</b> 1644046, Омск, ул. Маяковского, 74А:
        </div>
      </div>
    </div>
  </CertificateSection>
</template>

<style scoped lang="scss">
.Map {
  max-width: 1080px;
  margin: auto;

  img {
    display: block;
    max-width: 100%;
    margin-bottom: 22px;
  }

  &__items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  &__item {
    font: var(--font-p);
    b {
      font: var(--font-p-medium);
    }
  }
}
@media (max-width: var(--bp-mobile)) {
  .Map {
    padding-bottom: 80px;
  }
}
</style>