<template>
  <div class="action">
    <div
      class="action__handler"
    >
      <alpaca-button
        v-if="button"
        :class="[customClass, 'action__button']"
        @click="click"
      >
        <slot />
      </alpaca-button>
      <alpaca-link
        v-else
        :class="[customClass, 'action__link']"
        :href="link"
        :title="title"
      >
        <slot />
      </alpaca-link>
    </div>
  </div>
</template>

<script>
import AlpacaButton from '../button/Button.vue'
import AlpacaLink from '../../01-globals/link/Link.vue'

export default {
  components: {
    AlpacaButton,
    AlpacaLink
  },
  props: {
    button: {
      type: Boolean,
      default: false
    },
    link: {
      type: String,
      default: null
    },
    click: {
      type: Function,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    customClass: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
.action {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  &__handler {
    flex-basis: 100%;
    margin-bottom: $spacer--medium;

    @include mq($screen-m) {
      flex-basis: auto;
      margin-bottom: 0;
    }
  }

  &__button {
    margin-right: $spacer--medium;
    height: 30px;
    padding: 0 20px;
    font-size: 14px;
    width: 100%;
    margin-bottom: $spacer--medium;

    @include mq($screen-m) {
      width: auto;
      margin-bottom: auto;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  &__link {
    padding: $spacer--medium 0;
    margin-right: 15px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
