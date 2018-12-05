<template>
  <div class="additional-content">
    <alpaca-picture
      class="additional-content__image"
      :images="images"
      :alt="alt"
    />
    <div class="additional-content__info">
      <div class="additional-content__section">
        <alpaca-paragraph>
          {{ firstSection }}
        </alpaca-paragraph>
      </div>
      <div class="additional-content__section">
        <alpaca-paragraph>
          {{ secondSection }}
        </alpaca-paragraph>
      </div>
    </div>
  </div>
</template>

<script>
  import AlpacaParagraph from '../../01-globals/paragraph/Paragraph.vue'
  import AlpacaPicture from '../../03-modules/picture/Picture.vue'

  export default {
    components: {
      AlpacaPicture,
      AlpacaParagraph
    },
    props: {
      images: {
        type: Array,
        required: true
      },
      alt: {
        type: String,
        required: true
      },
      firstSection: {
        type: String,
        default: null
      },
      secondSection: {
        type: String,
        default: null
      }
    }
  }
</script>

<style lang="scss">
  $additional-content__image-margin          : 0 0 41px !default;
  $additional-content__image-margin\@large   : 0 0 32px !default;
  $additional-section-width                  : 48% !default;

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
