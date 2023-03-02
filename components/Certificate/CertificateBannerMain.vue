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
  <div class="CertificateBannerMain">
    <div class="CertificateBannerMain__container container">
      <div class="CertificateBannerMain__content">
        <h1 class="CertificateBannerMain__title"><slot name="title" /></h1>
        <CertificateContent class="CertificateBannerMain__description">
          <slot name="description" />
        </CertificateContent>
        <div v-if="props.partners.length" class="CertificateBannerMain__logo">
          <img v-for="{picture, name} in props.partners"
               :src="picture"
               :alt="name"
          >
        </div>
      </div>
      <div v-if="props.cover" class="CertificateBannerMain__view">
        <img :src="props.cover.picture" :alt="props.cover.alt">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.CertificateBannerMain {
  background: linear-gradient(99.59deg, #001677 0%, #003B97 100%);
  height: 800px;
  padding-top: 134px;
  padding-bottom: 96px;

  display: flex;
  align-items: center;

  &__container {
    display: flex;
  }

  &__title {
    font: var(--font-h1-medium);
    color: #fff;
    margin-bottom: 24px;
  }

  &__description {
    color: #fff;
    margin-bottom: 24px;
    max-width: 90%;
  }

  &__logo {
    display: flex;
    flex-direction: row;
    gap: 32px;

    img {
      display: block;
      max-width: 100%;
      max-height: 48px;
    }
  }

  &__button {
    margin-bottom: 56px;
  }

  &__view {
    width: 100%;
    max-width: 400px;
    img {
      display: block;
      max-width: 100%;
      object-fit: contain;
    }
  }
}

@media (max-width: var(--bp-mobile)) {
  .CertificateBannerMain {
    height: auto;
    padding-top: 88px;

    &__title {
      font: var(--font-2xl-medium);
    }

    &__sub-title {
      font: var(--font-lg-medium);
    }

    &__description {
      font: var(--font-base);
      p:not(:last-child) {
        margin-bottom: 0;
      }
    }

    &__button {
      width: 100%;
      margin-bottom: 24px;
    }

    &__image {
      padding-right: 0;
      max-width: 75%;
      display: block;
      margin: 0 auto 20px;

      img {
        max-width: 100%;
      }
    }

    &__container {
      flex-direction: column-reverse;
    }

    &__logo {
      margin-bottom: 40px;
    }
  }
}
</style>