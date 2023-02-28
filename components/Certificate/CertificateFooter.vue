<template>
  <footer class="Footer">
    <div class="container Footer__container">
      <img src="@/assets/images/certificate/logo_footer.svg" alt="">
      <div class="Footer__links">
        <a href="">education@ibs.ru</a>
        <a href=""> +7 (495) 609–69–67</a>
        <span>IBS Training Center ©2023</span>
      </div>
    </div>

  </footer>
</template>

<style lang="scss">
.Footer {
  background: var(--color-gradient-primary);
  height: 80px;

  @media (max-width: var(--bp-mobile)) {
    height: auto;
  }

  img {
    display: block;
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    @media (max-width: var(--bp-mobile)) {
      flex-wrap: wrap;
      justify-content: center;
      padding: 24px 0 !important;
    }
  }

  &__links {
    @media (max-width: var(--bp-mobile)) {
      width: 100%;
      text-align: center;
      margin-top: 16px;
    }

    &>* {
      color: #fff;
      font: var(--font-lg);

      margin-left: 32px;

      @media (max-width: var(--bp-mobile)) {
        margin-left: 0;
        width: 100%;
        display: block;
        margin-bottom: 2px;

        &:last-child {
          margin-bottom: 0;
        }
      }

    }
  }
}
</style>