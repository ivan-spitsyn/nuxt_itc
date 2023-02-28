<script setup>
const props = defineProps({
  error: {
    type: Boolean,
    default: false
  }
})

</script>
<template>
  <label :class="['Checkbox', {'Checkbox_error': props.error}]">
    <slot class="Checkbox__input" name="input"/>
    <span class="Checkbox__box"></span>
    <span class="Checkbox__label">
      <slot/>
    </span>
  </label>
</template>
<style lang="scss">
.Checkbox {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 32px 0;
  cursor: pointer;
  input {
    display: none;
  }

  &__box {
    position: relative;
    display: block;
    width: 24px;
    min-width: 24px;
    height: 24px;
    min-height: 24px;
    background: #ffffff;
    border-radius: 6px;
    border: 2px solid #ffffff;
    margin-right: 12px;
    &:before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: url('@/assets/images/certificate/check-green.svg') center / contain no-repeat;
      opacity: 0;
    }
  }

  input:checked + &__box:before {
    opacity: 1;
  }

  &__label {
    a {
      color: #ffffff;
      text-decoration: underline;
    }
  }

  &_error &__box {
    border-color: var(--color-error);;
  }
}
</style>