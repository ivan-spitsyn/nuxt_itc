<template>
  <CertificatePage>
    <slot />
  </CertificatePage>
</template>
<style lang="scss">
:root {
  //Media Query
  --bp-mobile: 1023px;

  --gap: 20px;
  --container-size: 1140px;
  --container-size-small: 920px;

  --color-gradient-primary: linear-gradient(99.59deg, #001677 0%, #003B97 100%);
  --color-primary: #001677;
  --color-error: #EB2D1A;

  --font-family-general: 'Stag Sans', Arial, sans-serif;

  --font-h1: 400 48px/64px var(--font-family-general);
  --font-h1-medium: 500 48px/64px var(--font-family-general);

  --font-h2: 400 40px/56px var(--font-family-general);
  --font-h2-medium: 500 40px/56px var(--font-family-general);

  --font-h3: 400 32px/44px var(--font-family-general);
  --font-h3-medium: 500 32px/44px var(--font-family-general);

  --font-h4: 400 22px/32px var(--font-family-general);
  --font-h4-medium: 500 22px/32px var(--font-family-general);

  --font-p: 400 18px/26px var(--font-family-general);
  --font-p-medium: 500 18px/26px var(--font-family-general);

  --font-small: 400 16px/24px var(--font-family-general);
  --font-small-medium: 500 18px/26px var(--font-family-general);

  --font-tiny: 400 14px/20px var(--font-family-general);
  --font-tiny-medium: 500 14px/20px var(--font-family-general);


  --font-sm: 400 14px/20px  var(--font-family-general);

  --font-base: 400 16px/24px var(--font-family-general);
  --font-base-medium: 500 16px/24px var(--font-family-general);

  --font-lg: 400 18px/32px var(--font-family-general);
  --font-lg-medium: 500 18px/28px var(--font-family-general);

  --font-xl: 400 22px/32px var(--font-family-general);
  --font-xl-medium: 500 22px/32px var(--font-family-general);

  --font-2xl: 400 24px/32px var(--font-family-general);
  --font-2xl-medium: 500 24px/32px var(--font-family-general);

  --font-3xl: 400 40px/56px var(--font-family-general);
  --font-3xl-medium: 500 40px/56px var(--font-family-general);

  --font-4xl: 400 48px/64px var(--font-family-general);
  --font-4xl-medium: 500 48px/64px var(--font-family-general);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  position: relative;
  font-weight: normal;
}

body {
  min-height: 100vh;
  color: var(--color-text);
  background: var(--color-background);
  transition: color 0.5s, background-color 0.5s;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //font: var(--font-base);
  font: 400 16px/24px 'Stag Sans', Arial, sans-serif;
}

.container {
  max-width: calc(var(--container-size) + (var(--gap) * 2));
  padding: 0 20px;
  margin: 0 auto;
  width: 100%;

  &_small {
    max-width: calc(var(--container-size-small) + (var(--gap) * 2));
  }
}

a {
  text-decoration: none;
}
</style>