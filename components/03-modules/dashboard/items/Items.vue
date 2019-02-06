<template>
  <div class="dashboard-items">
    <h3
      v-if="title"
      class="heading heading--fifth-level dashboard-items__title"
    >
      {{ title }}
    </h3>
    <div class="grid dashboard-items__content">
      <div
        v-for="element in elements"
        :key="element.id"
        class="dashboard-items__item grid__column grid__column--1-4"
      >
        <h5 class="heading heading--sixth-level">
          {{ element.title }}
        </h5>
        <div class="dashboard-items__address">
          {{ element.information }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      elements: {
        type: Array,
        required: true
      },
      title: {
        type: String,
        default: null
      }
    }
  }
</script>

<style lang="scss">
  $dashboard-items-padding: 15px !default;
  $dashboard-items-margin : 15px !default;

  .dashboard-items {
    &__title {
      margin-bottom: $dashboard-items-margin;
      padding-bottom: 10px;
      border-bottom: 1px solid $gray;
    }

    &__content {
      margin: 0;
    }

    &__address {
      margin-bottom: $dashboard-items-margin;
    }

    &__item {
      padding: $dashboard-items-padding 0;
      margin-bottom: $dashboard-items-margin;
    }
  }
</style>
