<template>
  <div class="registration">
    <h1 class="registration__heading">
      {{ mainHeading }}
    </h1>
    <form class="registration__content">
      <alpaca-fieldset
        class="registration__fieldset"
        :legend-text="personalSectionText"
        legend-class="registration__legend"
      >
        <alpaca-divider class="registration__divider" />
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
        class="registration__fieldset"
        :legend-text="signInSectionText"
        legend-class="registration__legend"
      >
        <alpaca-divider class="registration__divider" />
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
      <alpaca-button
        fluid
        @click.stop.prevent="register"
      >
        {{ buttonText }}
      </alpaca-button>
    </form>
  </div>
</template>

<script>
  import AlpacaFieldset from '../../02-elements/form/fieldset/Fieldset.vue'
  import AlpacaDivider from '../../02-elements/divider/Divider.vue'
  import AlpacaButton from '../../02-elements/button/Button.vue'
  import AlpacaInput from '../../02-elements/form/input/Input.vue'

  export default {
    components: {
      AlpacaFieldset,
      AlpacaDivider,
      AlpacaButton,
      AlpacaInput
    },
    props: {
      mainHeading: {
        type: String,
        required: true
      },
      personalSectionText: {
        type: String,
        required: true
      },
      signInSectionText: {
        type: String,
        required: true
      },
      buttonText: {
        type: String,
        required: true
      }
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
      }
    }
  }
</script>

<style lang="scss">
  $registration__heading-margin    : 11px 0 $spacer--medium 0 !default;
  $registration__content-margin    : 0 0 $spacer--medium !default;
  $registration__input-margin      : 0 0 $spacer--medium !default;
  $registration__fieldset-margin   : 0 0 $spacer--medium !default;
  $registration__legend-font-size  : $font-size-base;
  $registration__legend-font-weight: $font-weight-bold;
  $registration__legend-padding    : 0 0 $spacer--medium 0 !default;
  $registration__legend-width      : 100% !default;

  .registration {
    &__heading {
      margin: $registration__heading-margin;
    }

    &__divider {
      margin-bottom: $spacer--large;
    }

    &__content {
      margin: $registration__content-margin;
    }

    &__input {
      margin: $registration__input-margin;
    }

    &__legend {
      position: relative;
      margin: $reset;
      padding: $registration__legend-padding;
      width: $registration__legend-width;
      font-size: $registration__legend-font-size;
      font-weight: $registration__legend-font-weight;
    }

    &__fieldset {
      margin: $registration__fieldset-margin;
    }
  }
</style>
