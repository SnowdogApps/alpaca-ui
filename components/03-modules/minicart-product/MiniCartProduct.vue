<template>
  <div class="minicart-product">
    <div class="minicart-product__image">
      <alpaca-image
        :src="imageSrc"
        :alt="imageAlt"
      />
    </div>
    <div class="minicart-product__info">
      <h3 class="minicart-product__name">
        <alpaca-link
          class="link link--invert minicart-product__link"
          :href="productLink"
        >
          {{ productName }}
        </alpaca-link>
      </h3>

      <!--TODO dropdown-list is needed-->

      <div class="minicart-product__price">
        <!--TODO price is needed-->
        38$
      </div>

      <div class="minicart-product__bottom">
        <div class="minicart-product__qty">
          <alpaca-input
            v-if="input"
            :id="input.id"
            :label="input.label"
            :type="input.type"
            :name="input.name"
            :placeholder="input.placeholder"
            :aria-label="input.ariaLabel"
          />
          <alpaca-button>
            {{ updateButton }}
          </alpaca-button>
        </div>

        <div class="minicart-product__actions">
          <alpaca-button
            :icon="editIcon"
          />
          <alpaca-button
            :icon="removeIcon"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AlpacaImage from "../../02-elements/image/Image"
import AlpacaLink from "../../01-globals/link/Link"
import AlpacaInput from "../../02-elements/form/input/Input"
import AlpacaButton from "../../02-elements/button/Button"

export default {
  components: {
    AlpacaImage,
    AlpacaLink,
    AlpacaInput,
    AlpacaButton
  },
  props: {
    productName: {
      type: String,
      required: true
    },
    productLink: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      required: true
    },
    updateButton: {
      type: String,
      required: true
    },
    editIcon: {
      type: String,
      required: true
    },
    removeIcon: {
      type: String,
      required: true
    },
    input: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss">
$minicart-product__padding: $spacer--medium 0 $spacer !default;
$minicart-product__border: 1px solid $gray-lighter !default;
$minicart-product__spacer: $spacer !default;

$minicart-product__image-width: 72px !default;

$minicart-product__info-padding: 0 0 0 $spacer--medium !default;

$minicart-product__name-line-height: 1.15 !default;

$minicart-product__link-text-decoration: none !default;

$minicart-product__update-width: 90px !default;
$minicart-product__update-height: 32px !default;
$minicart-product__update-padding: 0 $spacer !default;
$minicart-product__update-margin: 0 0 $spacer 0 !default;

$minicart-product__input-padding: $spacer 0 !default;

$minicart-product__field-width: 56px !default;
$minicart-product__field-height: 32px !default;
$minicart-product__field-padding: $spacer !default;
$minicart-product__field-margin: 0 0 0 $spacer !default;

$minicart-product__attributes-button-margin: 0 !default;
$minicart-product__attributes-button-padding: 0 !default;
$minicart-product__attributes-button-color: $blue !default;
$minicart-product__attributes-button-bg-color: $white !default;
$minicart-product__attributes-button-font-family: $font-family-base !default;
$minicart-product__attributes-button-font-size: $font-size-small !default;
$minicart-product__attributes-list-padding: $spacer 0 0 0 !default;
$minicart-product__attributes-list-color: $gray-dark !default;
$minicart-product__attributes-list-icon-margin: 0 0 0 $spacer !default;

$minicart-product__price-color: $color-secondary !default;
$minicart-product__price-font-weight: $font-weight-bold !default;

$minicart-product__action-button-bg: transparent !default;
$minicart-product__action-icon-size: 24px !default;
$minicart-product__action-icon-padding: 2px !default;
$minicart-product__action-icon-color: $gray !default;
$minicart-product__action-icon-color--active: $color-primary !default;

.minicart-product {
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  padding: $minicart-product__padding;
  border-bottom: $minicart-product__border;

  &:last-child {
    border-bottom: none;
  }

  &__image {
    width: $minicart-product__image-width;

    img {
      width: $minicart-product__image-width;
      max-width: $minicart-product__image-width;
      height: auto;
    }
  }

  &__info {
    display: flex;
    flex-flow: row wrap;
    width: calc(100% - #{$minicart-product__image-width});
    padding: $minicart-product__info-padding;
  }

  &__name {
    margin-bottom: $minicart-product__spacer;
    font-weight: $font-weight-normal;
    line-height: $minicart-product__name-line-height;
  }

  &__link {
    text-decoration: $minicart-product__link-text-decoration;
  }

  &__attributes {
    margin-bottom: $minicart-product__spacer;
  }

  &__attributes-button {
    display: flex;
    align-items: center;
    margin: $minicart-product__attributes-button-margin;
    padding: $minicart-product__attributes-button-padding;
    font-family: $minicart-product__attributes-button-font-family;
    font-size: $minicart-product__attributes-button-font-size;

    .dropdown-list__icon {
      position: static;
      margin: $minicart-product__attributes-list-icon-margin;
      fill: $minicart-product__attributes-button-color;
    }

    &.dropdown-list__label {
      color: $minicart-product__attributes-button-color;
      background-color: $minicart-product__attributes-button-bg-color;
      &:focus,
      &:hover {
        background-color: $minicart-product__attributes-button-bg-color;
      }
    }
  }

  &__attributes-list {
    padding: $minicart-product__attributes-list-padding;
    color: $minicart-product__attributes-list-color;
  }

  &__price {
    width: 100%;
    font-weight: $minicart-product__price-font-weight;
    color: $minicart-product__price-color;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  &__qty {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__update {
    display: none;
    height: $minicart-product__update-height;
    width: $minicart-product__update-width;
    padding: $minicart-product__update-padding;
    margin: $minicart-product__update-margin;
  }

  &__label,
  &__input {
    margin: 0;
  }

  &__input {
    padding: $minicart-product__input-padding;
  }

  &__field {
    padding: $minicart-product__field-padding;
    width: $minicart-product__field-width;
    height: $minicart-product__field-height;
    margin: $minicart-product__field-margin;
  }

  &__actions {
    display: flex;
    justify-content: flex-end;
  }

  &__button {
    margin-left: $spacer;
    padding: 12px;
    border: 0;
    background-color: $minicart-product__action-button-bg;
    &:focus,
    &:hover {
      background-color: $minicart-product__action-button-bg;
    }
  }

  &__button-icon {
    height: $minicart-product__action-icon-size;
    width: $minicart-product__action-icon-size;
    padding: $minicart-product__action-icon-padding;
    fill: $minicart-product__action-icon-color;
    &:focus,
    &:hover {
      fill: $minicart-product__action-icon-color--active;
    }
  }
}
</style>
