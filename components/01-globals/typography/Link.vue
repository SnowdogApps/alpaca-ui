<template>
  <a
    :class="[
      'link', {
        'link--invert': invert,
        'link--secondary': secondary
      },
      customClass
    ]"
    :href="href"
  >
    <slot />
  </a>
</template>

<script>
export default {
  props: ['href', 'invert', 'secondary', 'customClass']
}
</script>

<style lang="scss">
:root {
  --link__color: var(--blue);
  --link__decoration: underline;
  --link__font-family: var(--font-family-base);
  --link__font-weight: var(--font-weight-normal);
  --link__color-hover: var(--color-secondary);
  --link__line-height: var(--font-line-height);
  --link__transition: var(--transition-base);
  --link__color--invert: var(--gray-darker);
  --link__color-hover--invert: var(--blue);
}

a,
.link {
  color: var(--link__color);
  text-decoration: var(--link__decoration);
  transition: var(--link__transition);
  font-family: var(--link__font-family);
  font-weight: var(--link__font-weight);
  line-height: var(--link__line-height);
  text-decoration: none;
}

a:hover,
a:focus,
.link:hover,
.link:focus {
  color: var(--link__color-hover);
}

.link--invert {
  color: var(--link__color--invert);
}

.link--invert:hover,
.link--invert:focus {
  color: var(--link__color-hover--invert);
}

.link--secondary {
  color: var(--gray-lighter);
}

.link--secondary:hover,
.link--secondary:focus {
  color: var(--color-primary);
}
</style>
