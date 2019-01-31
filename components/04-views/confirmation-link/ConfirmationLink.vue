<template>
  <div class="page-wrapper">
    <alpaca-header
      :menu="menu"
      :src="logoSrc"
      :link="logoLink"
    />
    <div class="container">
      <alpaca-heading
        :level="headingLevel"
        page
      >
        {{ heading }}
      </alpaca-heading>
      <form class="confirmation-link">
        <p>
          {{ info }}
        </p>
        <alpaca-input
          id="email"
          v-model="value"
          :label="label"
          type="email"
          :name="name"
          :placeholder="placeholder"
        />
        <alpaca-button
          @click.stop.prevent="submit"
        >
          {{ button }}
        </alpaca-button>

        <alpaca-link
          class="confirmation-link__link"
          :href="href"
        >
          {{ link }}
        </alpaca-link>
      </form>
    </div>
  </div>
</template>

<script>
  import AlpacaHeading from '../../01-globals/heading/Heading'
  import AlpacaLink from '../../01-globals/link/Link'
  import AlpacaButton from '../../02-elements/button/Button'
  import AlpacaInput from '../../02-elements/form/input/Input'
  import AlpacaHeader from '../../03-modules/header/Header'

  export default {
    components: {
      AlpacaHeading,
      AlpacaLink,
      AlpacaButton,
      AlpacaInput,
      AlpacaHeader
    },
    props: {
      menu: {
        type: Array,
        required: true
      },
      headingLevel: {
        type: Number,
        required: true
      },
      heading: {
        type: String,
        required: true
      },
      info: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: true
      },
      href: {
        type: String,
        required: true
      },
      button: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      placeholder: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      },
      logoSrc: {
        type: String,
        required: true
      },
      logoLink: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        value: null
      }
    },
    methods: {
      submit() {
        this.$emit('submit', { email: this.value })
      }
    }
  }
</script>

<style lang="scss">
  $confirmation-link__max-width      : 600px !default;
  $confirmation-link__margin-bottom  : $spacer--extra-large !default;
  $confirmation-link__link-margin-top: $spacer--medium !default;

  .confirmation-link {
    max-width: $confirmation-link__max-width;
    margin-bottom: $confirmation-link__margin-bottom;

    &__link {
      display: block;
      margin-top: $confirmation-link__link-margin-top;
    }
  }
</style>
