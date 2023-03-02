<script setup>
const props = defineProps({
  number: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});
</script>
<template>
  <div class="CertificateNumberText">
    <div class="CertificateNumberText__number">{{props.number}}</div>
    <div class="CertificateNumberText__text">{{props.text}}</div>
  </div>
</template>
<style scoped lang="scss">
.CertificateNumberText {
  &__number {
    color: #003B97;
    font: var(--font-h4-medium);
  }
  &__text {
    font: var(--font-p);
  }
}
</style>