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
    <button class="Button Button--lg Button--default Section__card-button"><slot /></button>
  </div>
</div>
</template>
<style lang="scss">
.Section {
  &--Card {
    .Section__row {
      margin-bottom: 0;
      gap: 20px;

      @media (max-width: var(--bp-mobile)) {
        gap: 0;
      }
    }
  }

  &__col {
    &:last-child {
      .Section__card {
        margin-bottom: 0;
      }
    }
  }

  &__card {
    background: var(--color-primary);
    border-radius: 12px;
    padding: 56px 48px;
    color: #fff;
    height: 100%;

    display: flex;
    flex-wrap: wrap;

    margin: auto;

    @media (max-width: var(--bp-mobile)) {
      margin-bottom: 20px;
      height: auto;
      padding: 32px 20px;

      .Section__title {
        text-align: center;
      }
    }

    &-list {
      margin: 0;
      padding: 0;
      list-style: none;

      &__item {
        margin-bottom: 16px;
        font: var(--font-lg);
        line-height: 26px;
        position: relative;
        display: flex;

        @media (max-width: var(--bp-mobile)) {
          font: var(--font-base);
        }

        &::before {
          content: '';
          width: 24px;
          height: 24px;
          min-width: 24px;
          min-height: 24px;
          background-image: url(../../assets/images/check.svg);
          margin-right: 12px;
        }


        &:last-child {
          margin-bottom: 32px;
        }
      }
    }

    &-button {
      width: 100%;
      margin-top: auto;
    }
  }
}
</style>