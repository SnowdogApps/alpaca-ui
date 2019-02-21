<template>
  <div class="information">
    <alpaca-heading
      :level="5"
      class="information__title"
    >
      {{ title }}
    </alpaca-heading>
    <alpaca-paragraph class="information__text">
      {{ text }}
    </alpaca-paragraph>
  </div>
</template>

<script>
  import AlpacaHeading from '../../01-globals/heading/Heading'
  import AlpacaParagraph from '../../01-globals/paragraph/Paragraph'

  export default {
    components: {
      AlpacaHeading,
      AlpacaParagraph
    },
    props: {
      title: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .information {
    margin-bottom: $spacer--medium * 2;

    &__title {
      margin-bottom: $spacer--medium;
    }

    &__text {
      margin-bottom: 0;
    }
  }
</style>
