<template>
  <div class="mega-menu">
    <ul class="mega-menu__list container">
      <li
        v-for="item in menu"
        :key="'mega-menu-' + item.label"
      >
        <router-link
          :to="item.href"
          class="mega-menu__link"
        >
          {{ item.label }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['menu']
  }
</script>

<style>
  :root {
    --mega-menu__margin: 0;
    --mega-menu__border-bottom: 1px solid var(--gray-light);
    --mega-menu__font-color: var(--gray-darker);
    --mega-menu__font-weight: var(--font-weight-bold);
    --mega-menu__font-size: var(--font-size-base);
    --mega-menu__font-size--large: 16px;
    --mega-menu__background-color: var(--white);
    --mega-menu__list-padding: 0;
    --mega-menu__list-justify-content: flex-start;
    --mega-menu__list-background-color: var(--white);
    --mega-menu__link-padding: 12px var(--spacer--medium);
    --mega-menu__link-margin: 0 var(--spacer--medium);
    --mega-menu__link-color: var(--gray-darker);
    --mega-menu__link-color--active: var(--color-primary);
    --mega-menu__link-text-decoration: none;
  }

  .mega-menu {
    display: none;
    background: var(--mega-menu__background-color);
    color: var(--mega-menu__font-color);
    position: relative;
    margin: var(--mega-menu__margin);
    border-bottom: var(--mega-menu__border-bottom);
  }

  @media all and (min-width: 1200px) {
    .mega-menu {
      display: block;
    }
  }

  .mega-menu__list {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    justify-content: var(--mega-menu__list-justify-content);
    padding: var(--mega-menu__list-padding);
    list-style: none;
    background-color: var(--mega-menu__list-background-color);
  }

  .mega-menu__link {
    display: block;
    margin: var(--mega-menu__link-margin);
    padding: var(--mega-menu__link-padding);
    font-size: var(--mega-menu__font-size--large);
    font-weight: var(--mega-menu__font-weight);
    color: var(--mega-menu__link-color);
    text-decoration: var(--mega-menu__link-text-decoration);
  }

  .mega-menu__link:focus,
  .mega-menu__link:hover {
    text-decoration: var(--mega-menu__link-text-decoration);
    color: var(--mega-menu__link-color--active);
  }
</style>
