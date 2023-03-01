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
    <div class="Banner__container container">
      <div class="Banner__content">
        <h1 class="Banner__title"><slot name="title" /></h1>
        <CertificateContent class="Banner__description">
          <slot name="description" />
        </CertificateContent>
        <div v-if="props.partners.length" class="Banner__logo">
          <img v-for="{picture, name} in props.partners"
               :src="picture"
               :alt="name"
          >
        </div>
      </div>
      <div v-if="props.cover" class="Banner__view">
        <img :src="props.cover.picture" :alt="props.cover.alt">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.Banner {
  background: linear-gradient(99.59deg, #001677 0%, #003B97 100%);
  height: 800px;
  padding-top: 134px;

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
    font: var(--font-p);
    color: #fff;
    margin-bottom: 24px;

    max-width: 90%;

    p:not(:last-child) {
      margin-bottom: 24px;
    }
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
    img {
      display: block;
      max-width: 100%;
      object-fit: contain;
    }
  }
}

@media (max-width: var(--bp-mobile)) {
  .Banner {
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