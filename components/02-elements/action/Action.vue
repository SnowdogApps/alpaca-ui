<template>
  <div class="action ">
    <div
      v-if="button"
      class="action__handler"
    >
      <button
        class="button action__button "
        type="button">
        Example button
      </button>
    </div>
    <div
      v-if="link"
      class="action__handler"
    >
      <a
        href="#"
        class="link action__link "
        title="Link this title">
        Link this title
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    button: {
      type: Boolean,
      default: false
    },
    link: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
$action-margin: 15px !default;
$action-padding: 15px !default;

.action {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  &__handler {
    flex-basis: 100%;
    margin-bottom: $action-margin;

    @include mq($screen-m) {
      flex-basis: auto;
      margin-bottom: 0;
    }
  }

  &__button {
    margin-right: $action-margin;
    height: 30px;
    padding: 0 20px;
    font-size: 14px;
    width: 100%;
    margin-bottom: $action-margin;

    @include mq($screen-m) {
      width: auto;
      margin-bottom: auto;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  &__link {
    padding: $action-padding 0;
    margin-right: 15px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
