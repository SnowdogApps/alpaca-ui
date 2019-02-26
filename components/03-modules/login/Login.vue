<template>
  <div class="login">
    <form>
      <alpaca-fieldset
        class="login__fieldset"
        :legend-text="legend"
        legend-class="login__legend"
      >
        <alpaca-input
          id="email"
          v-model="email"
          :label="emailLabel"
          :placeholder="emailPlaceholder"
          type="email"
          name="email"
        />
        <alpaca-input
          id="password"
          v-model="password"
          :label="passwordLabel"
          :placeholder="passwordPlaceholder"
          type="password"
          name="password"
        />
      </alpaca-fieldset>
      <div class="row row--no-margins end-xs">
        <router-link :to="forgetPasswordLink">
          {{ forgetPasswordText }}
        </router-link>
      </div>
      <div class="login__submit-wrapper row row--no-margins center-xs">
        <alpaca-button
          type="submit"
          class="login__submit-button"
          @click.stop.prevent="login"
        >
          {{ submitButton }}
        </alpaca-button>
      </div>
    </form>
    <div class="login__register-wrapper row row--no-margins center-xs">
      <alpaca-button
        class="login__register-button"
        blank
        @click="goToRegister"
      >
        {{ goToRegisterButton }}
      </alpaca-button>
    </div>
  </div>
</template>

<script>
  import AlpacaFieldset from '../../02-elements/form/fieldset/Fieldset.vue'
  import AlpacaButton from '../../02-elements/button/Button.vue'
  import AlpacaInput from '../../02-elements/form/input/Input.vue'

  export default {
    components: {
      AlpacaFieldset,
      AlpacaButton,
      AlpacaInput
    },
    props: {
      legend: {
        type: String,
        required: true
      },
      emailLabel: {
        type: String,
        default: 'Email'
      },
      emailPlaceholder: {
        type: String,
        default: 'Email'
      },
      passwordLabel: {
        type: String,
        default: 'Password'
      },
      passwordPlaceholder: {
        type: String,
        default: 'Password'
      },
      forgetPasswordText: {
        type: String,
        required: true
      },
      forgetPasswordLink: {
        type: String,
        required: true
      },
      goToRegisterButton: {
        type: String,
        required: true
      },
      submitButton: {
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
  $login__fieldset-margin            : 0 0 $spacer 0 !default;
  $login__submit-wrapper-margin      : $spacer--large 0 0 0 !default;
  $login__submit-button-width        : 100% !default;
  $login__submit-button-width\@medium: 240px !default;
  $login__register-wrapper-margin    : $spacer 0 0 0 !default;

  .login {
    &__fieldset {
      margin: $login__fieldset-margin;
    }

    &__legend {
      @include visually-hidden();
    }

    &__submit-wrapper {
      margin: $login__submit-wrapper-margin;
    }

    &__submit-button {
      width: $login__submit-button-width;

      @include mq($screen-m) {
        width: $login__submit-button-width\@medium;
      }
    }

    &__register-wrapper {
      margin: $login__register-wrapper-margin;
    }
  }
</style>
