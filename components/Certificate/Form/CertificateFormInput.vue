<script setup>

const props = defineProps({
  label: {
    type: String,
    default: 'default',
  },
  required: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  }
})
</script>

<template>
  <div :class="['Input', { 'Input--error': props.error }]">
    <div class="Input__header">
      <div class="Input__label">{{ props.label }}</div>
      <div class="Input__snippet" v-if="props.required">Обязательно</div>
    </div>
    <slot/>
    <div class="Input__error" v-if="props.error">Заполните поле</div>
  </div>
</template>

<style lang="scss">
.Input {
  &__header {
    display: flex;
    margin-bottom: 12px;
    align-items: center;
    justify-content: space-between;

    @media (max-width: var(--bp-mobile)) {
      margin-bottom: 8px;
    }
  }

  &__snippet {
    font: var(--font-sm);

    text-align: right;
    color: #FFFFFF;
    opacity: 0.56;

    @media (max-width: var(--bp-mobile)) {
      //TODO: перенести в миксины
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
    }
  }

  &__label {
    font: var(--font-lg);
    color: #fff;

    @media (max-width: var(--bp-mobile)) {
      font: var(--font-base);
    }
  }

  &__input {
    background: #1F3D91;
    border: 1px solid rgba(255, 255, 255, 0.32);
    border-radius: 6px;
    height: 52px;
    padding: 12px 20px;
    font: var(--font-lg);
    color: #fff;
    width: 100%;
    outline: none;

    &:hover,
    &:active,
    &:focus {
      border: 1px solid #FFFFFF;
    }
  }

  &--error {
    .Input__input {
      background: rgba(235, 45, 26, 0.24);
      border: 2px solid var(--color-error);
    }

    .Input__error {
      position: absolute;
      top: 100%;
      margin-top: 8px;
      color: var(--color-error);
      font: var(--font-sm);
    }
  }
}
</style>