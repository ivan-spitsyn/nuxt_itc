<template>
  <slot />
</template>
<style lang="scss">
:root {
  --bp-mobile: 1023px;


  --font-family-general: 'Stag Sans', Arial, sans-serif;
  --font-size-h1: 52px;

  --font-h1-size: 52px;
  --font-h1-weight: 700;
  --font-h1-line-height: 1.4;


  --font-h1: var(--font-family-general) var(--font-h1-size) var(--font-h1-line-height);


  --font-sm: var(--font-family-general) 14px 400 20px;

  --font-base: var(--font-family-general) 16px 400 24px;
  --font-base-medium: var(--font-family-general) 16px 500 24px;

  --font-lg: var(--font-family-general) 18px 400 32px;
  --font-lg-medium: var(--font-family-general) 18px 500 28px;

  --font-xl: var(--font-family-general) 22px 400 32px;
  --font-xl-medium: var(--font-family-general) 22px 500 32px;

  --font-2xl: var(--font-family-general) 24px 400 32px;
  --font-2xl-medium: var(--font-family-general) 24px 500 32px;

  --font-3xl: var(--font-family-general) 40px 400 56px;
  --font-3xl-medium: var(--font-family-general) 40px 500 56px;

  --font-4xl: var(--font-family-general) 48px 400 64px;
  --font-4xl-medium: var(--font-family-general) 48px 500 64px;
}
</style>