<script setup>
const slots = useSlots();
</script>
<template>
  <header class="header">
    <div class="container header__container">
      <a href="/" class="header__logo">
        <img src="@/assets/images/certificate/logo.svg"/>
      </a>
      <div v-if="slots.menu" class="header__menu">
        <slot name="menu"/>
      </div>
      <div v-if="slots.button" class="header__button">
        <slot name="button"/>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding: 24px 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  &__container {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    align-items: center;
  }

  &__logo {
    img {
      display: block;
    }
  }

  &__button {
    margin-left: 16px;
  }

  @media (max-width: var(--bp-mobile)) {
    padding: 12px 0;

    &__logo {
      max-width: 145px;
    }
    &__menu {
      display: none;
    }
    &__button {
      display: none;
    }
  }
}
</style>