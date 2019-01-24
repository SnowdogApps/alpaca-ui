<template>
  <div class="page-wrapper">
    <alpaca-header
      :menu="menu"
      :src="logoSrc"
      :link="logoLink"
    />

    <div class="container">
      <div class="forgot-password">
        <alpaca-heading
          :level="headingLevel"
          page
        >
          {{ heading }}
        </alpaca-heading>
        <p>
          {{ info }}
        </p>
        <form>
          <alpaca-input
            id="email"
            v-model="email"
            label="Email"
            type="email"
            name="email"
            placeholder="Email"
          />

          <alpaca-input
            id="captcha"
            v-model="captcha"
            label="Captcha"
            type="captcha"
            name="captcha"
            placeholder="Captcha"
          />

          <div class="forgot-password__captcha-wrapper">
            <alpaca-image
              class="forgot-password__image"
              :src="captchaSrc"
              alt="Captcha image"
            />

            <alpaca-button
              secondary
              @click.stop.prevent="reload"
            >
              {{ reloadButton }}
            </alpaca-button>
          </div>
          <alpaca-button
            @click.stop.prevent="submit"
          >
            {{ submitButton }}
          </alpaca-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import AlpacaHeading from '../../01-globals/heading/Heading.vue'
  import AlpacaImage from '../../02-elements/image/Image.vue'
  import AlpacaButton from '../../02-elements/button/Button.vue'
  import AlpacaInput from '../../02-elements/form/input/Input.vue'
  import AlpacaHeader from '../../03-modules/header/Header.vue'

    export default {
      components: {
        AlpacaHeading,
        AlpacaImage,
        AlpacaButton,
        AlpacaInput,
        AlpacaHeader
      },
      props: {
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
        logoSrc: {
          type: String,
          required: true
        },
        logoLink: {
          type: String,
          required: true
        },
        submitButton: {
          type: String,
          required: true
        },
        reloadButton: {
          type: String,
          required: true
        },
        captchaSrc: {
          type: String,
          required: true
        }
      },
      data() {
        return {
          email: null,
          captcha: null
        }
      },
      methods: {
        submit() {
          this.$emit('submit', { email: this.email, captcha: this.captcha });
        },
        reload() {
          this.$emit('reload');
        }
      }
    }
</script>

<style lang="scss">
  $forgot-password__max-width                    : 500px !default;
  $forgot-password__margin-bottom                : $spacer--extra-large !default;
  $forgot-password__field-margin-bottom          : $spacer--medium !default;
  $forgot-password__captcha-field-width          : 50% !default;
  $forgot-password__captcha-wrapper-margin-bottom: $spacer--medium !default;
  $forgot-password__image-width                  : auto !default;
  $forgot-password__image-max-width              : 300px !default;
  $forgot-password__image-padding-right          : $spacer !default;
  $forgot-password__strength-meter-margin-bottom : $spacer--medium !default;

  .forgot-password {
    max-width: $forgot-password__max-width;
    margin-bottom: $forgot-password__margin-bottom;

    &__email,
    &__captcha-field {
      margin-bottom: $forgot-password__field-margin-bottom;
    }

    &__captcha-field {
      width: $forgot-password__captcha-field-width;
    }

    &__captcha-wrapper {
      display: flex;
      align-items: center;
      margin-bottom: $forgot-password__captcha-wrapper-margin-bottom;
    }

    &__image {
      padding-right: $forgot-password__image-padding-right;
      width: $forgot-password__image-width;
      max-width: $forgot-password__image-max-width;
    }

    &__strength-meter {
      margin-bottom: $forgot-password__strength-meter-margin-bottom;
    }
  }
</style>
