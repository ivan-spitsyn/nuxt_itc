<template>
  <CertificateSection>
    <template #title>Наши авторизованные центры тестирования в России</template>
    <div class="Map">
      <img src="@/assets/images/certificate/map.jpg" alt="">
      <div class="Map__item">
        <b>Москва: </b> 127018, Москва, ул. Складочная, д. 3, стр. 1
      </div>
      <div class="Map__item">
        <b> Санкт-Петербург: </b> 190000, Санкт-Петербург, Английская набережная, д. 70
      </div>
      <div class="Map__item">
        <b>Омск: </b> 1644046, Омск, ул. Маяковского, 74А:
      </div>
    </div>
  </CertificateSection>
</template>

<style lang="scss">
.Map {
  max-width: 1080px;
  margin: auto;

  @media (max-width: var(--bp-mobile)) {
    padding-bottom: 80px;
  }

  img {
    max-width: 100%;
    margin-bottom: 22px;
    display: block;
  }

  &__item {
    margin-bottom: 10px;
    font: var(--font-lg-medium);

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>