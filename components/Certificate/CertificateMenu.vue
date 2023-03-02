<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>
<template>
  <ul class="menu">
    <li v-for="{link, text} in props.items" class="menu__item">
      <a :href="link" class="menu__link">{{ text }}</a>
    </li>
  </ul>
</template>
<style lang="scss">
.menu {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    padding: 0 10px;
    position: relative;
  }

  &__item + &__item {
    &::before {
      content: '';
      top: 0;
      bottom: 0;
      left: 0;
      width: 1px;
      background: #fff;
      display: block;
      position: absolute;
    }
  }

  &__link {
    color: #FFFFFF;
    font: var(--font-p-medium);

    @media (hover: hover) {
      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>