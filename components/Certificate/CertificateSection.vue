<script setup>
import {useSlots} from "vue";
const slots = useSlots();
</script>

<template>
  <section class="CertificateSection">
    <div v-if="slots.header || slots.title || slots.description" class="CertificateSection__header">
      <div class="container">
        <div v-if="slots.title" class="CertificateSection__title"><slot name="title" /></div>
        <div v-if="slots.description" class="CertificateSection__description"><slot name="description" /></div>
        <slot name="header" />
      </div>
    </div>
    <div class="CertificateSection__content">
      <div class="container"><slot /></div>
    </div>
    <div v-if="slots.footer" class="CertificateSection__footer">
      <div class="container"><slot name="footer" /></div>
    </div>
  </section>
</template>

<style lang="scss">
.CertificateSection {
  position: relative;

  &_blue {
    background: var(--color-gradient-primary);
    color: #ffffff;
  }

  &_levels {
    padding: 120px 0;
    background: var(--color-gradient-primary);
    color: #ffffff;
  }

  &__header {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 48px;
  }

  &__title {
    margin: 0;
    padding: 0;

    text-align: center;
    font: var(--font-3xl-medium);
  }

  &__description {
    margin-top: 16px;

    text-align: center;

    font-weight: 500;
    font-size: 22px;
    line-height: 32px;
  }

  &__content {}

  &__footer {}

  &__row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    gap: 34px;

    &_stretch {
      align-items: stretch;
    }
  }
  &__row + &__row {
    margin-top: 40px;
  }
  &__col {
    width: 100%;
    &_border {
      padding: 32px;

      border: 4px solid #00B7CC;
      border-radius: 12px;
    }
  }
}
</style>