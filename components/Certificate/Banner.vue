<script setup>
const props = defineProps({
  cover: {
    type: Object,
    default: () => ({
      picture: '',
      name: ''
    }),
    required: false
  },
  partners: {
    type: Array,
    default: () => ([]),
    required: false
  }
});
import Button from './Button.vue';
</script>

<template>
  <div class="Banner">
    <div class="container Banner__container">

      <div class="Banner__content">
        <h1 class="Banner__title"><slot name="title" /></h1>
        <div class="Banner__description"><slot name="description" /></div>
        <Button class="Banner__button">Оставить заявку</Button>
        <div v-if="props.partners.length" class="Banner__logo">
          <img v-for="{picture, name} in props.partners"
               :src="picture"
               :alt="name"
          >
        </div>
      </div>
      <div v-if="props.cover" class="Banner__image">
        <img :src="props.cover.picture" :alt="props.cover.name">
      </div>
    </div>

  </div>
</template>

<style lang="scss">
.Banner {
  background: var(--color-gradient-primary);
  height: 800px;
  padding-top: 134px;

  display: flex;
  align-items: center;

  @media (max-width: $media-mobile) {
    height: auto;
    padding-top: 88px;
  }

  &__title {
    @include text-4xl-medium;
    color: #fff;
    margin-bottom: 24px;

    @media (max-width: $media-mobile) {
      @include text-2xl-medium;
    }
  }

  &__sub-title {
    @include text-xl-medium;
    color: #fff;
    margin-bottom: 16px;

    @media (max-width: $media-mobile) {
      @include text-lg-medium;
    }
  }

  &__description {
    @include text-lg;
    color: #fff;
    margin-bottom: 24px;

    max-width: 90%;

    p:not(:last-child) {
      margin-bottom: 24px;

      @media (max-width: $media-mobile) {
        margin-bottom: 0;
      }
    }

    @media (max-width: $media-mobile) {
      @include text-base;
    }
  }

  &__button {
    margin-bottom: 56px;

    @media (max-width: $media-mobile) {
      width: 100%;
      margin-bottom: 24px;
    }
  }

  &__image {
    padding-right: 30px;

    @media (max-width: $media-mobile) {
      padding-right: 0;
      margin-bottom: 26px;
      max-width: 75%;
      display: block;
      margin: auto;
      margin-bottom: 20px;

      img {
        max-width: 100%;
      }
    }
  }

  &__container {
    @media (max-width: $media-mobile) {
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

    @media (max-width: $media-mobile) {
      margin-bottom: 40px;
    }
  }
}
</style>