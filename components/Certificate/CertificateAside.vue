<template>
<div class="aside">
  <div class="aside__icon">
    <img src="@/assets/images/certificate/aside.svg" alt="aside">
  </div>
  <div class="aside__text">
    <slot />
  </div>
</div>
</template>
<style lang="scss">
.aside {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  &__image {
    img {
      display: block;
    }
  }
  &__text {
    font: var(--font-base);
    color: #676E76;

    a {
      color: #003B97;
      text-decoration: underline;
    }
  }
}
</style>