<template>
  <div class="CertificateContent">
    <slot />
  </div>
</template>
<style lang="scss">
.CertificateContent {
  * {
    margin-top: 1.4em;
    margin-bottom: 1.4em;

    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

  h1 {
    font: var(--font-h1-medium);
  }

  h2 {
    font: var(--font-h2-medium);
  }

  h3 {
    font: var(--font-h3-medium);
  }

  h4 {
    font: var(--font-h4-medium);
  }

  p {
    font: var(--font-p);
  }

  small, .small {
    font: var(--font-small);
  }

  .tiny {
    font: var(--font-tiny);
  }

  b {
    font-weight: 500;
  }

  i {
  }

  a {
  }

  ul {
    list-style-type: none;
    padding-left: 36px;
    li {
      position: relative;
      &::before {
        content: '';
        width: 24px;
        height: 24px;
        min-width: 24px;
        min-height: 24px;
        position: absolute;
        left: -36px;
        top: 0;
        background-image: url(@/assets/images/icons/check/white.svg);
        margin-right: 12px;
      }
    }
  }

  .icon {
    display: block;
    margin-bottom: 32px;
  }

  img.full {
    display: block;
    width: 100%;
    max-width: 100%;
    max-height: 100%;
  }
}
</style>