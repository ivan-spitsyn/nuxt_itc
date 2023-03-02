<template>
  <div class="CertificateReasons">
    <slot />
  </div>
</template>
<style lang="scss">
.CertificateReasons {
  display: grid;
  grid-template-areas:
        "sectionAdvantage-1 sectionAdvantage-3 sectionAdvantage-2"
        "sectionAdvantage-4 sectionAdvantage-3 sectionAdvantage-5";
  grid-template-columns: 1fr min-content 1fr;
  gap: 32px 52px;
  align-items: stretch;
  justify-content: center;
  align-content: stretch;

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:nth-child(1) {
      grid-area: sectionAdvantage-1;
      text-align: right;
    }

    &:nth-child(2) {
      grid-area: sectionAdvantage-2;
    }

    &:nth-child(3) {
      width: 330px;
      grid-area: sectionAdvantage-3;
    }

    &:nth-child(4) {
      grid-area: sectionAdvantage-4;
      text-align: right;
    }

    &:nth-child(5) {
      grid-area: sectionAdvantage-5;
    }
  }

  &__title {
    font: var(--font-h1);
    color: #003B97;
  }

  &__text {
    font: var(--font-p);
  }

  &__card {
    height: 100%;
    min-height: 320px;
    background: rgba(0, 22, 119, 0.12);
    border-radius: 12px;
    overflow: hidden;

    &-view {
      width: 100%;
    }

    &-image {
      width: 100%;
      &_mobile {
        display: none;
      }
    }

    &-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      padding: 32px 24px;

      text-align: center;
    }
    &-title {
      color: #003B97;
      font: var(--font-h1);
    }
    &-subtitle {
      font: var(--font-h4-medium);
    }
    &-description {
      font: var(--font-p);
    }
  }
}
</style>