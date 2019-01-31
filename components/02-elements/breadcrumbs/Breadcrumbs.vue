<template>
  <div class="breadcrumbs">
    <template v-for="(breadcrumb, i) in breadcrumbs">
      <span
        v-if="breadcrumbs.length === i + 1"
        :key="breadcrumb.name"
        class="breadcrumbs__item"
        :aria-label="breadcrumb.ariaLabel"
        tabindex="0"
      >
        {{ breadcrumb.name }}
      </span>
      <span
        v-else
        :key="breadcrumb.name"
        class="breadcrumbs__item"
      >
        <a
          :href="breadcrumb.href"
          :aria-label="breadcrumb.ariaLabel"
          class="breadcrumbs__link link--invert"
        >
          {{ breadcrumb.name }}
        </a>
      </span>
    </template>
  </div>
</template>

<script>
  export default {
    props: {
      breadcrumbs: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  $breadcrumbs__margin: $spacer !default;
  $breadcrumbs__padding: $spacer--medium $spacer !default;
  $breadcrumbs__color: $gray-dark !default;
  $breadcrumbs__font-family: $font-family-base !default;
  $breadcrumbs__color--active: $blue !default;
  $breadcrumbs__font-family--active: $font-family-base !default;
  $breadcrumbs__font-size: $font-size-small !default;

  .breadcrumbs {
    display: none;

    @include mq($screen-m) {
      display: flex;
      flex-wrap: wrap;
    }

    &__item {
      display: flex;
      align-items: stretch;
      color: $breadcrumbs__color;
      font-size: $breadcrumbs__font-size;

      &:after {
        content: '/';
        display: flex;
        align-items: center;
        margin: 0 $breadcrumbs__margin;
        color: $breadcrumbs__color;
      }

      &:first-of-type {
        .breadcrumbs__link {
          padding-left: 0;
        }
      }

      &:last-child {
        &:not(:first-child) {
          align-items: center;
          padding: $breadcrumbs__padding;
          font-family: $breadcrumbs__font-family--active;
          color: $breadcrumbs__color--active;
        }

        &:after {
          display: none;
        }
      }
    }

    &__link {
      display: flex;
      align-items: center;
      padding: $breadcrumbs__padding;
      font-family: $breadcrumbs__font-family;
      text-decoration: none;
    }

    // TODO: Missing variables.
    .link--invert {
      color: #393243;

      &:hover {
        color: #2962ff;
      }
    }

    // TODO: Looks like page specific stuff, so should be moved to this page styles.
    & + .page-main {
      .heading--page {
        margin-top: $reset;
      }
    }
  }
</style>
