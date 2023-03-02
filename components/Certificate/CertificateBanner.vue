<script setup>
const slots = useSlots();
const props = defineProps({
  picture: {
    type: String,
    default: ''
  }
});
</script>
<template>
  <div class="CertificateBanner">
    <div class="CertificateBanner__info">
      <div class="CertificateBanner__title"><slot name="title" /></div>
      <CertificateContent class="CertificateBanner__content">
        <slot />
      </CertificateContent>
      <div v-if="slots.button" class="CertificateBanner__button"><slot name="button"/></div>
    </div>
    <div class="CertificateBanner__view">
      <img :src="props.picture" alt="">
    </div>
  </div>
</template>
<style scoped lang="scss">
.CertificateBanner {
  background: rgba(0, 59, 151, 0.12);
  border-radius: 12px;
  padding: 32px 40px;
  background: linear-gradient(99.59deg,#001677 0%,#003B97 100%);

  &__info {
    width: 66%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 32px;
    color: #ffffff;
  }

  &__title {
    font: var(--font-h2-medium);
  }

  &__content {}

  &__view {
    max-width: 34%;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    img {
      display: block;
      width: 100%;
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }
}
</style>