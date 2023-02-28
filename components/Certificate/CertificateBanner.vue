<script setup>
const props = defineProps({
  cover: {
    type: Object,
    default: () => ({
      picture: '',
      alt: ''
    }),
    required: false
  },
  partners: {
    type: Array,
    default: () => ([]),
    required: false
  }
});
</script>

<template>
  <div class="Banner">
    <div class="container Banner__container">

      <div class="Banner__content">
        <h1 class="Banner__title"><slot name="title" /></h1>
        <div class="Banner__description"><slot name="description" /></div>

        <CertificateButton class="Banner__button">Оставить заявку</CertificateButton>

        <div v-if="props.partners.length" class="Banner__logo">
          <img v-for="{picture, name} in props.partners"
               :src="picture"
               :alt="name"
          >
        </div>
      </div>
      <div v-if="props.cover" class="Banner__image">
        <img :src="props.cover.picture" :alt="props.cover.alt">
      </div>
    </div>

  </div>
</template>

<style lang="scss">
.Banner {
  background: linear-gradient(99.59deg, #001677 0%, #003B97 100%);
  height: 800px;
  padding-top: 134px;

  display: flex;
  align-items: center;

  @media (max-width: var(--bp-mobile)) {
    height: auto;
    padding-top: 88px;
  }

  &__title {
    font: var(--font-4xl-medium);
    color: #fff;
    margin-bottom: 24px;

    @media (max-width: var(--bp-mobile)) {
      font: var(--font-2xl-medium);
    }
  }

  &__sub-title {
    font: var(--font-xl-medium);
    color: #fff;
    margin-bottom: 16px;

    @media (max-width: var(--bp-mobile)) {
      font: var(--font-lg-medium);
    }
  }

  &__description {
    font: var(--font-lg);
    color: #fff;
    margin-bottom: 24px;

    max-width: 90%;

    p:not(:last-child) {
      margin-bottom: 24px;

      @media (max-width: var(--bp-mobile)) {
        margin-bottom: 0;
      }
    }

    @media (max-width: var(--bp-mobile)) {
      font: var(--font-base);
    }
  }

  &__button {
    margin-bottom: 56px;

    @media (max-width: var(--bp-mobile)) {
      width: 100%;
      margin-bottom: 24px;
    }
  }

  &__image {
    padding-right: 30px;

    @media (max-width: var(--bp-mobile)) {
      padding-right: 0;
      max-width: 75%;
      display: block;
      margin: 0 auto 20px;

      img {
        max-width: 100%;
      }
    }
  }

  &__container {
    @media (max-width: var(--bp-mobile)) {
      flex-direction: column-reverse;
    }

    display: flex;
  }

  &__logo {
    display: flex;
    flex-direction: row;
    gap: 32px;

    img {
      display: block;
    }

    @media (max-width: var(--bp-mobile)) {
      margin-bottom: 40px;
    }
  }
}
</style>