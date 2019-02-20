<template>
  <div class="page-wrapper">
    <div class="container">
      <alpaca-heading
        page
        :level="1"
      >
        {{ mainHeading }}
      </alpaca-heading>
      <div class="row registration">
        <form class="col-xs-12 col-md-6 registration__content">
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
            <!--TODO Update checkbox after merge #48744-->
            <alpaca-checkbox
              id="newsletter"
              v-model="newsletter"
              name="newsletter"
              :label="checkboxLabel"
              class="registration__newsletter-checkbox"
              icon-class="registration__newsletter-checkbox-icon"
              label-class="registration__newsletter-checkbox-label"
              :value="true"
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
            <div class="registration__password-wrapper">
              <alpaca-input
                id="password"
                v-model="password"
                label="Password"
                type="password"
                name="password"
                placeholder="Password"
              />
              <alpaca-password-strength
                :value="passwordStrength"
              />
            </div>
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
            class="login__button"
            @click.stop.prevent="register"
          >
            {{ buttonText }}
          </alpaca-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import AlpacaHeading from '../../01-globals/heading/Heading'
  import AlpacaPasswordStrength from '../../02-elements/password-strength/PasswordStrength'
  import AlpacaFieldset from '../../02-elements/form/fieldset/Fieldset'
  import AlpacaDivider from '../../02-elements/divider/Divider'
  import AlpacaButton from '../../02-elements/button/Button'
  import AlpacaInput from '../../02-elements/form/input/Input'
  import AlpacaCheckbox from '../../02-elements/form/checkbox/Checkbox'

  export default {
    components: {
      AlpacaHeading,
      AlpacaPasswordStrength,
      AlpacaFieldset,
      AlpacaDivider,
      AlpacaButton,
      AlpacaInput,
      AlpacaCheckbox
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
      passwordStrength: {
        type: Number,
        required: true
      },
      signInSectionText: {
        type: String,
        required: true
      },
      checkboxLabel: {
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
  $registration__padding-top                                  : $spacer--medium !default;
  $registration__content-margin                               : 0 0 $spacer--extra-large !default;
  $registration__input-margin                                 : 0 0 $spacer--medium !default;
  $registration__pasword-wrapper-margin                       : 0 0 $spacer--medium !default;
  $registration__fieldset-margin                              : 0 0 $spacer--medium !default;
  $registration__legend-font-size                             : $font-size-base;
  $registration__legend-font-weight                           : $font-weight-bold;
  $registration__legend-padding                               : 0 0 $spacer--medium 0 !default;
  $registration__legend-width                                 : 100% !default;
  $registration__newsletter-checkbox-margin                   : 0 0 $spacer !default;
  $registration__newsletter-checkbox-icon-offset              : 15px !default;
  $registration__newsletter-checkbox-label-padding-left       : 48px !default;
  $registration__newsletter-checkbox-label-line-height        : 48px !default;
  $registration__newsletter-checkbox-icon-clickable-area      : 48px !default;
  $registration__newsletter-checkbox-checked-label-font-weight: $font-weight-bold !default;

  .container {
    .registration {
      padding-top: $registration__padding-top;

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

      &__newsletter-checkbox {
        margin: $registration__newsletter-checkbox-margin;
      }

      &__newsletter-checkbox-label {
        padding-left: $registration__newsletter-checkbox-label-padding-left;
        line-height: $registration__newsletter-checkbox-label-line-height;

        &::before {
          top: $registration__newsletter-checkbox-icon-offset;
          left: $registration__newsletter-checkbox-icon-offset;
        }

        &::after {
          width: $registration__newsletter-checkbox-icon-clickable-area;
          height: $registration__newsletter-checkbox-icon-clickable-area;
          content: ' ';
          position: absolute;
          top: 0;
          left: 0;
        }
      }

      &__newsletter-checkbox-field {
        &:checked ~ .checkbox__label {
          font-weight: $registration__newsletter-checkbox-checked-label-font-weight;
        }
      }

      &__newsletter-checkbox-icon {
        top: $registration__newsletter-checkbox-icon-offset;
        left: $registration__newsletter-checkbox-icon-offset;
      }

      &__password-wrapper {
        margin: $registration__pasword-wrapper-margin;
      }

      &__password {
        margin: $reset;
      }
    }
  }
</style>
