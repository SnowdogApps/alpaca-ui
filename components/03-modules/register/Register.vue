<template>
  <div class="register">
    <form>
      <alpaca-fieldset
        class="register__fieldset"
        :legend-text="personalInformationLegend"
        legend-class="register__legend"
      >
        <alpaca-input
          id="firstname"
          v-model="firstname"
          label="First name"
          type="text"
          name="firstname"
          placeholder="First name"
        />
        <alpaca-input
          id="lastname"
          v-model="lastname"
          label="Last name"
          type="text"
          name="lastname"
          placeholder="Last name"
        />
      </alpaca-fieldset>
      <alpaca-fieldset
        class="register__fieldset"
        :legend-text="signInLegend"
        legend-class="register__legend"
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
        <alpaca-input
          id="passwordConfirmation"
          v-model="passwordConfirmation"
          label="Confirm password"
          type="password"
          name="passwordConfirmation"
          placeholder="Confirm password"
        />
      </alpaca-fieldset>
      <div class="row row--no-margins center-xs">
        <alpaca-button
          type="submit"
          class="register__submit-button"
          @click.stop.prevent="register"
        >
          {{ submitButton }}
        </alpaca-button>
      </div>
    </form>
    <div class="register__login-wrapper row row--no-margins center-xs">
      <alpaca-button
        class="register__register-button"
        blank
        @click="goToLogin"
      >
        {{ goToLoginButton }}
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
      personalInformationLegend: {
        type: String,
        required: true
      },
      signInLegend: {
        type: String,
        required: true
      },
      submitButton: {
        type: String,
        required: true
      },
      goToLoginButton: {
        type: String,
        required: true
      },
    },
    data() {
      return {
        firstname: null,
        lastname: null,
        email: null,
        password: null,
        passwordConfirmation: null,
        newsletter: false
      }
    },
    methods: {
      register() {
        this.$emit('register', {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password,
          newsletter: this.newsletter
        })
      },
      goToLogin() {
        this.$emit('goToLogin')
      }
    }
  }
</script>

<style lang="scss">
  $register__fieldset-margin            : 0 0 $spacer--medium !default;
  $register__legend-font-size           : $font-size-large !default;
  $register__legend-color               : $gray-darker !default;
  $register__legend-padding             : 0 0 $spacer--medium 0 !default;
  $register__submit-button-width        : 100% !default;
  $register__submit-button-width\@medium: 240px !default;
  $register__login-wrapper-margin       : $spacer 0 0 0 !default;

  .register {
    &__fieldset {
      margin: $register__fieldset-margin;
    }

    &__legend {
      margin: $reset;
      padding: $register__legend-padding;
      font-size: $register__legend-font-size;
      color: $register__legend-color;
    }

    &__submit-button {
      width: $register__submit-button-width;

      @include mq($screen-m) {
        width: $register__submit-button-width\@medium;
      }
    }

    &__login-wrapper {
      margin: $register__login-wrapper-margin;
    }
  }
</style>
