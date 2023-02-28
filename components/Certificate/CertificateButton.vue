<script setup>
const props = defineProps({
  size: {
    type: String,
    default: "default",
  },
  color: {
    type: String,
    default: "default",
  },
});
</script>

<template>
  <button
      :class="['Button', `Button--${props.size}`, `Button--${props.color}`]"
  >
    <slot />
  </button>
</template>

<style lang="scss">
.Button {
  height: 48px;
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
  font: var(--font-lg);
  color: var(--color-primary);
  border: 1px solid transparent;
  transition: all 0.2s;
  white-space: nowrap;
  cursor: pointer;

  &--lg {
    height: 56px;
    min-height: 56px;

    @media (max-width: var(--bp-mobile)) {
      height: 48px;
    }
  }

  &--primary {
    color: #fff;
    background: var(--color-primary);
  }

  &--outline {
    background: #fff;
    border: 1px solid var(--color-primary);
  }

  &:hover {
  }

  &:focus {
  }
}
</style>
