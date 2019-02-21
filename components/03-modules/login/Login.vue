<template>
  <div class="login">
    <alpaca-heading :level="1">
      {{ mainHeading }}
    </alpaca-heading>
    <form class="login__form">
      <alpaca-fieldset
        class="login__fieldset"
        :legend-text="legend"
        legend-class="login__legend"
      >
        <alpaca-input
          id="email"
          v-model="email"
          label="Email"
          type="email"
          name="email"
          placeholder="Email"
        />
        <alpaca-input
          id="password"
          v-model="password"
          label="Password"
          type="password"
          name="password"
          placeholder="Password"
        />
      </alpaca-fieldset>
      <div class="login__actions">
        <alpaca-button
          class="login__button"
          @click.stop.prevent="login"
        >
          Login
        </alpaca-button>
        <alpaca-link
          class="login__forgot-password"
          :href="forgetPasswordLink"
        >
          {{ forgetPasswordText }}
        </alpaca-link>
      </div>
    </form>
    <alpaca-button
      class="login__button"
      secondary
      @click="goToRegister"
    >
      {{ goToRegisterButton }}
    </alpaca-button>
  </div>
</template>

<script>
  import AlpacaHeading from '../../01-globals/heading/Heading.vue'
  import AlpacaLink from '../../01-globals/link/Link.vue'
  import AlpacaFieldset from '../../02-elements/form/fieldset/Fieldset.vue'
  import AlpacaButton from '../../02-elements/button/Button.vue'
  import AlpacaInput from '../../02-elements/form/input/Input.vue'

  export default {
    components: {
      AlpacaHeading,
      AlpacaLink,
      AlpacaFieldset,
      AlpacaButton,
      AlpacaInput
    },
    props: {
      mainHeading: {
        type: String,
        required: true
      },
      legend: {
        type: String,
        required: true
      },
      forgetPasswordText: {
        type: String,
        required: true
      },
      forgetPasswordLink: {
        type: String,
        required: true
      },
      linkHeading: {
        type: String,
        required: true
      },
      goToRegisterButton: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        email: null,
        password: null
      }
    },
    methods: {
      login() {
        this.$emit('login', { email: this.email, password: this.password })
      },
      goToRegister() {
        this.$emit('goToRegister')
      }
    }
  }
</script>

<style lang="scss">
  $login__margin-bottom                  : $spacer--extra-large !default;
  $login__padding-top                    : $spacer !default;
  $login__actions-margin                 : 0 0 $spacer--medium !default;

  $login__heading-margin                 : 0 0 $spacer--medium 0 !default;

  $login__company-column-padding         : $spacer--medium $spacer 0 $spacer !default;
  $login__company-column-margin          : $spacer--large 0 0 0 !default;
  $login__company-column-border-top      : 1px solid $gray-light !default;

  $login__horizontal-padding             : 38px !default;
  $login__button-margin                  : 0 $spacer--medium 0 0 !default;
  $login__button-margin\@large           : 0 $spacer--large 0 0 !default;
  $login__button-margin--crate-account   : 0 !default;
  $login__button-min-width               : 160px !default;

  $login__form-margin                    : 0 0 $spacer--medium 0 !default;
  $login__form-margin\@medium            : 0 !default;
  $login__form-padding                   : 0 0 $spacer--medium 0 !default;
  $login__form-padding\@medium           : 0 !default;
  $login__form-border                    : 1px solid $gray-light !default;
  $login__form-border\@medium            : none !default;

  $login__forgot-password-margin         : $spacer--medium 0 0 0 !default;
  $login__forgot-password-margin\@small  : 0 !default;
  $login__forgot-password-color          : $blue !default;
  $login__forgot-password-text-decoration: none !default;

  $login__input-margin                   : 0 0 $spacer--medium !default;

  $login__info-margin                    : $spacer--medium 0 24px 0 !default;

  $login__validation-tips-color          : $red !default;
  $login__validation-tips-margin         : 0 0 $spacer !default;

  .login {
    padding-top: $login__padding-top;
    margin-bottom: $login__margin-bottom;

    &__info {
      margin: $login__info-margin;
    }

    &__form {
      margin: $login__form-margin;
      padding: $login__form-padding;
      border-bottom: $login__form-border;

      @include mq($screen-m) {
        margin: $login__form-margin\@medium;
        padding: $login__form-padding\@medium;
        border-bottom: $login__form-border\@medium;
      }
    }

    &__heading {
      margin: $login__heading-margin;
    }

    &__actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      margin: $login__actions-margin;
    }

    &__button {
      width: 100%;
      flex: 0 0 100%;
      justify-content: center;
      margin: $login__button-margin;
      padding-right: $login__horizontal-padding;
      padding-left: $login__horizontal-padding;
      min-width: $login__button-min-width;

      @include mq($screen-s) {
        width: auto;
        flex: 0 0 auto;
      }

      @include mq($screen-l) {
        margin: $login__button-margin\@large;
      }
    }

    &__forgot-password {
      margin: $login__forgot-password-margin;
      color: $login__forgot-password-color;
      text-decoration: $login__forgot-password-text-decoration;

      @include mq($screen-s) {
        margin: $login__forgot-password-margin\@small;
      }
    }

    &__input {
      margin: $login__input-margin;
    }
  }
</style>
