<template>
  <div class="additional-content">
    <alpaca-picture
      v-if="picture.length"
      class="additional-content__image"
      :images="picture"
      :alt="pictureAlt"
    />
    <div class="additional-content__info">
      <div class="additional-content__section">
        <p>
          {{ firstColumnText }}
        </p>
      </div>
      <div class="additional-content__section">
        <p>
          {{ secondColumnText }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import AlpacaPicture from '@alpaca-storybook/components/03-modules/picture/Picture.vue'
export default {
  components: {
    AlpacaPicture
  },
  props: {
    picture: {
      type: Array,
      default: () => []
    },
    pictureAlt: {
      type: String,
      default: ''
    },
    firstColumnText: {
      type: String,
      default: ''
    },
    secondColumnText: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
$additional-content__image-margin       : 0 0 41px !default;
$additional-content__image-margin\@large: 0 0 $spacer--large !default;
$additional-section-width               : 48% !default;

.additional-content {
  &__image {
    margin: $additional-content__image-margin;

    @include mq($screen-l) {
      margin: $additional-content__image-margin\@large;
    }
  }

  &__info {
    @include mq($screen-l) {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
    }
  }

  &__section {
    @include mq($screen-l) {
      flex: 0 0 $additional-section-width;
    }
  }
}
</style>
