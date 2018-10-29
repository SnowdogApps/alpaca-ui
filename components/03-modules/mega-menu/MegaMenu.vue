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

<style lang="scss">
$mega-menu__margin: 0 !default;
$mega-menu__border-bottom: 1px solid $gray-light !default;
$mega-menu__font-color: $gray-darker !default;
$mega-menu__font-weight: $font-weight-bold !default;
$mega-menu__font-size: $font-size-base !default;
$mega-menu__font-size--large: 16px !default;
$mega-menu__background-color: $white !default;
$mega-menu__list-padding: 0 !default;
$mega-menu__list-justify-content: flex-start !default;
$mega-menu__list-background-color: $white !default;
$mega-menu__link-padding: 12px $spacer--medium !default;
$mega-menu__link-margin: 0 $spacer--medium !default;
$mega-menu__link-color: $gray-darker !default;
$mega-menu__link-color--active: $color-primary !default;
$mega-menu__link-text-decoration: none !default;

.mega-menu {
  display: none;
  background: $mega-menu__background-color;
  color: $mega-menu__font-color;
  position: relative;
  margin: $mega-menu__margin;
  border-bottom: $mega-menu__border-bottom;
  @include mq($screen-xl) {
    display: block;
  }

  &__list {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    justify-content: $mega-menu__list-justify-content;
    padding: $mega-menu__list-padding;
    list-style: none;
    background-color: $mega-menu__list-background-color;
  }

  &__link {
    display: block;
    margin: $mega-menu__link-margin;
    padding: $mega-menu__link-padding;
    font-size: $mega-menu__font-size--large;
    font-weight: $mega-menu__font-weight;
    color: $mega-menu__link-color;
    text-decoration: $mega-menu__link-text-decoration;
    &:focus,
    &:hover {
      text-decoration: $mega-menu__link-text-decoration;
      color: $mega-menu__link-color--active;
    }
  }
}
</style>
