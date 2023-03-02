<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
});
</script>
<template>
  <div class="CertificateCounter">
    <div v-for="(item, count) in items" class="CertificateCounter__item">
      <div class="CertificateCounter__item-number">{{ (count + 1) }}</div>
      <div class="CertificateCounter__item-text">{{ item }}</div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.CertificateCounter {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0;
  list-style-type: none;
  gap: 24px;

  &__item {
    width: 100%;
    &-number {
      position: relative;
      margin-bottom: 16px;
      padding-left: 22px;

      font: var(--font-h2-medium);
      color: #003B97;

      &:before {
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -5px;
        border-radius: 50%;
        background-color: #00B7CC;
      }
    }
    &-text {
      font: var(--font-p);
    }
  }
}
</style>