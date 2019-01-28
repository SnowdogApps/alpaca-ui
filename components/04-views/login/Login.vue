<template>
  <div class="page-wrapper">
    <alpaca-header
      :menu="menu"
      :src="logoSrc"
      :link="logoLink"
    />

    <div class="container">
      <alpaca-heading
        :level="1"
        page
      >
        {{ mainHeading }}
      </alpaca-heading>
      <div class="row login">
        <div class="col-xs-12 col-md-6">
          <alpaca-heading
            :level="3"
          >
            {{ formHeading }}
          </alpaca-heading>

          <alpaca-divider />

          <p class="login__info">
            {{ signInInfo }}
          </p>
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
                @click="login"
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
            <div class="login__validation-tips">
              {{ validationTips }}
            </div>
          </form>
        </div>
        <div class="col-xs-12 col-md-6">
          <alpaca-heading
            :level="3"
          >
            {{ linkHeading }}
          </alpaca-heading>
          <alpaca-divider />
          <p class="login__info">
            {{ createAccountInfo }}
          </p>
          <alpaca-button
            class="login__button login__button--create-account"
            @click="createAccount"
          >
            Create an Account
          </alpaca-button>
        </div>
        <div class="col-xs-12">
          <div class="login__company-wrapper" />
          <alpaca-heading
            :level="3"
          >
            {{ linkCompanyHeading }}
          </alpaca-heading>
          <alpaca-divider />
          <p class="login__info">
            {{ createCompanyAccountInfo }}
          </p>
          <alpaca-button
            class="login__button"
            @click="createCompanyAccount"
          >
            Create a Company Account
          </alpaca-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AlpacaHeading from '../../01-globals/heading/Heading.vue'
  import AlpacaLink from '../../01-globals/link/Link.vue'
  import AlpacaFieldset from '../../02-elements/form/fieldset/Fieldset.vue'
  import AlpacaDivider from '../../02-elements/divider/Divider.vue'
  import AlpacaButton from '../../02-elements/button/Button.vue'
  import AlpacaInput from '../../02-elements/form/input/Input.vue'
  import AlpacaHeader from '../../03-modules/header/Header.vue'

  export default {
    components: {
      AlpacaHeading,
      AlpacaLink,
      AlpacaFieldset,
      AlpacaDivider,
      AlpacaButton,
      AlpacaInput,
      AlpacaHeader
    },
    props: {
      menu: {
        type: Array,
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
      mainHeading: {
        type: String,
        required: true
      },
      formHeading: {
        type: String,
        required: true
      },
      signInInfo: {
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
      validationTips: {
        type: String,
        required: true
      },
      linkHeading: {
        type: String,
        required: true
      },
      linkCompanyHeading: {
        type: String,
        required: true
      },
      createCompanyAccountInfo: {
        type: String,
        required: true
      },
      createAccountInfo: {
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
        this.$emit('login', { email: this.email, password: this.password });
      },
      createAccount() {
        this.$emit('createAccount');
      },
      createCompanyAccount() {
        this.$emit('createCompanyAccount');
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

  $login__fieldset-max-width\@medium     : 488px !default;

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

    &__company-wrapper {
      margin: $login__company-column-margin;
      padding: $login__company-column-padding;
      border-top: $login__company-column-border-top;

      @include mq($screen-m) {
        border-top: none;
      }
    }

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

    &__fieldset {
      @include mq($screen-m) {
        max-width: $login__fieldset-max-width\@medium;
      }
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

      &--create-account {
        margin: $login__button-margin--crate-account;
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

    &__validation-tips {
      color: $login__validation-tips-color;
      margin: $login__validation-tips-margin;
    }
  }
</style>
