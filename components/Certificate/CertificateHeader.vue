<template>
  <header class="header">
    <div class="container header__container">
      <a href="/" class="header__logo">
        <img src="@/assets/images/certificate/logo.svg"/>
      </a>
      <div class="header__menu-wrap">
        <ul class="header__menu">
          <li class="header__menu-item">
            <a href="/" class="header__menu-link">О нас</a>
          </li>
          <li class="header__menu-item">
            <a href="/" class="header__menu-link">Сертификация</a>
          </li>
          <li class="header__menu-item">
            <a href="/" class="header__menu-link">Правила</a>
          </li>
          <li class="header__menu-item">
            <a href="/" class="header__menu-link">Контакты</a>
          </li>
        </ul>
        <CertificateButton>Пройти обучение и сертификацию</CertificateButton>
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

  @media (max-width: var(--bp-mobile)) {
    padding: 12px 0;
  }


  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    @media (max-width: var(--bp-mobile)) {
      max-width: 145px;
    }

    img {
      display: block;
    }
  }

  &__menu {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;

    &-wrap {
      display: flex;
      align-items: center;

      @media (max-width: var(--bp-mobile)) {
        display: none;
      }
    }

    &-item {
      padding: 10px;
      position: relative;
      margin-right: 16px;

      &:not(:last-child)::after {
        content: '';
        top: 0;
        bottom: 0;
        right: 0;
        width: 1px;
        background: #fff;
        display: block;
        position: absolute;
      }
    }

    &-link {
      color: #FFFFFF;
      margin-right: 16px;

      @media (hover: hover) {
        &:hover {
          opacity: 0.8;
        }

      }

    }
  }
}
</style>