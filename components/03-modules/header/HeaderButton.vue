<template>
  <button class="header-button">
    <alpaca-icon
      :icon="icon"
      custom-class="header-button__icon"
    />

    <span class="header-button__text">
      <slot />
    </span>
  </button>
</template>

<script>
import AlpacaIcon from '../../01-globals/icon/Icon.vue'

export default {
  components: {AlpacaIcon},
  props: ['icon']
}
</script>

<style lang="scss">
:root {
  --header-button__size: 48px;
  --header-button__margin: 0 0 0 var(--spacer);
  --header-button__margin--extra-large: 0 0 0 var(--spacer--medium);
  --header-button__padding: 0;
  --header-button__icon-margin: 0 0 2px 0;
  --header-button__icon-margin--medium: 0 0 4px 0;
  --header-button__icon-padding: 0 0 4px 0;
  --header-button__icon-color: var(--gray-darker);
  --header-button__icon-color--hover: var(--color-primary);
  --header-button__transition: var(--transition-base);
  --header-button__text-font-family: var(--font-family-base);
  --header-button__text-font-color: var(--gray);
  --header-button__text-font-size: 10px;
  --header-button__text-line-height: 10px;
  --header-button__counter-top: 0;
  --header-button__counter-top--medium: -2px;
  --header-button__counter-right: 8px;
  --header-button__counter-font-size: var(--font-size-extra-small);
  --header-button__counter-background: var(--color-primary);
  --header-button__counter-color: var(--white);
  --header-button__counter-size: 14px;
  --header-button__counter-border: 2px solid var(--white);
  --header-button__counter-dot-size: 2px;
  --header-button__counter-dot-bg-color: var(--white);
}

.header-button {
  position: relative;
  height: var(--header-button__size);
  min-width: var(--header-button__size);
  display: flex;
  margin: var(--header-button__margin);
  padding: var(--header-button__padding);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  text-decoration: none;
  background-color: #fff;
  font-family: var(--header-button__text-font-family);
}

@media all and (min-width: 1200px) {
  .header-button {
    margin: var(--header-button__margin--extra-large);
  }
}

.header-button:focus,
.header-button:hover {
  text-decoration: none;
}

.header-button:focus .header-button__icon,
.header-button:hover .header-button__icon {
  fill: var(--header-button__icon-color--hover);
}

.header-button--reset-margin {
  margin: 0;
}

.header-button__icon {
  margin: var(--header-button__icon-margin);
  padding: var(--header-button__icon-padding);
  fill: var(--header-button__icon-color);
  transition: var(--header-button__transition);
}

@media all and (min-width: 768px) {
  .header-button__icon {
    margin: var(--header-button__icon-margin--medium);
  }
}

.header-button__text {
  font-size: var(--header-button__text-font-size);
  line-height: var(--header-button__text-line-height);
  text-align: center;
  color: var(--header-button__text-font-color);
}

.header-button__counter {
  position: absolute;
  top: var(--header-button__counter-top);
  right: var(--header-button__counter-right);
  display: flex;
  width: var(--header-button__counter-size);
  height: var(--header-button__counter-size);
  border: var(--header-button__counter-border);
  border-radius: var(--header-button__counter-size);
  line-height: var(--header-button__counter-size);
  font-size: var(--header-button__counter-font-size);
  text-align: center;
  color: var(--header-button__counter-color);
  background-color: var(--header-button__counter-background);
}

.header-button__counter--hidden {
  display: none;
}

@media all and (min-width: 768px) {
  .header-button__counter {
    top: var(--header-button__counter-top--medium);
  }
}

.header-button__counter-dot {
  width: var(--header-button__counter-dot-size);
  height: var(--header-button__counter-dot-size);
  border-radius: var(--header-button__counter-dot-size);
  margin: auto;
  background-color: var(--header-button__counter-dot-bg-color);
}
</style>
