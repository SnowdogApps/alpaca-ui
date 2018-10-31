<template>
  <li class="catalog-grid-item">
    <a
      href="#"
      class="catalog-grid-item__link"
    >
      <img
        :src="image"
        class="catalog-grid-item__image"
      >
    </a>

    <section class="catalog-grid-item__details">
      <h2 class="catalog-grid-item__name">
        <a
          href="#"
          class="catalog-grid-item__link catalog-grid-item__link--name"
          v-html="name"
        />
      </h2>

      <div class="catalog-grid-item__price">
        $ {{ price }}
      </div>

      <div class="catalog-grid-item__actions">
        <form
          action="#"
          class="catalog-grid-item__primary-form"
        >
          <alpaca-button
            :secondary="true"
            custom-class="catalog-grid-item__primary-action"
          >
            Add to cart
          </alpaca-button>
        </form>

        <div class="catalog-grid-item__secondary-action">
          <alpaca-button icon="heart" />
          <alpaca-button icon="compare" />
        </div>
      </div>
    </section>
  </li>
</template>

<script>
import AlpacaButton from '../../02-elements/button/Button.vue'

export default {
  components: {
    AlpacaButton
  },
  props: ['image', 'price', 'name', 'specialPrice']
}
</script>

<style lang="scss">
:root {
  --catalog-grid-item__base-spacing: var(--spacer);
  --catalog-grid-item__padding: 0;
  --catalog-grid-item__border: 1px solid var(--gray-lightest);
  --catalog-grid-item__font-size: var(--font-size-base);
  --catalog-grid-item__font-size--mq-large: 16px;
  --catalog-grid-item__line-height: 1.5;
  --catalog-grid-item__font-weight: var(--font-weight-bold);
  --catalog-grid-item__badge-top-position: var(--spacer--medium);
  --catalog-grid-item__badge-left-position: 0;
  --catalog-grid-item__badge-z-index: 1;
  --catalog-grid-item__badge-padding: 5px 12px;
  --catalog-grid-item__badge-bg-color: var(--color-primary);
  --catalog-grid-item__badge-font-size: var(--font-size-small);
  --catalog-grid-item__badge-border-radius: 0;
  --catalog-grid-item__image-margin: 0 auto;
  --catalog-grid-item__image-width: auto;
  --catalog-grid-item__image-width--lazyload: 100%;
  --catalog-grid-item__image-height: auto;
  --catalog-grid-item__loader-margin-top: 30%;
  --catalog-grid-item__link-overflow: hidden;
  --catalog-grid-item__link-overflow--visible: visible;
  --catalog-grid-item__link-white-space: nowrap;
  --catalog-grid-item__link-white-space--visible: normal;
  --catalog-grid-item__link-text-overflow: ellipsis;
  --catalog-grid-item__content-bg-color: var(--white);
  --catalog-grid-item__content-padding: var(--spacer);
  --catalog-grid-item__content-width: 100%;
  --catalog-grid-item__content-height: 67px;
  --catalog-grid-item__content-height--mq-large: 73px;
  --catalog-grid-item__content-translateY: translateY(
    calc(-1 * var(--catalog-grid-item__content-height))
  );
  --catalog-grid-item__content-translateY--mq-large: translateY(
    calc(-1 * var(--catalog-grid-item__content-height--mq-large))
  );
  --catalog-grid-item__content-translateY--active: translateY(-100%);
  --catalog-grid-item__name-color: var(--font-color-base);
  --catalog-grid-item__name-font-weight: var(--font-weight-normal);
  --catalog-grid-item__name-margin-botttom: var(--spacer);
  --catalog-grid-item__name-padding--bigger: var(--spacer--medium 0);
  --catalog-grid-item__rating-margin-bottom: var(--spacer);
  --catalog-grid-item__price-margin-bottom: var(--spacer);
  --catalog-grid-item__primary-padding: 0 var(--spacer);
  --catalog-gird-item__primary-form-margin: 0;
  --catalog-grid-item__action-size: 48px;
  --catalog-grid-item__action-padding: 0;
  --catalog-grid-item__action-background: transparent;
  --catalog-grid-item__action-border: none;
  --catalog-grid-item__action-cursor: pointer;
  --catalog-grid-item__action-icon-size: 18px;
  --catalog-grid-item__action-icon-transition: var(--transition-base);
  --catalog-grid-item__action-icon-fill: var(--gray-darker);
  --catalog-grid-item__action-icon-fill-hover: var(--green);
}

.catalog-grid-item {
  position: relative;
  display: block;
  border: var(--catalog-grid-item__border);
  padding: var(--catalog-grid-item__padding);
  overflow: hidden;
}

@media all and (min-width: 768px) {
  .catalog-grid-item:focus-within .catalog-grid-item__details,
  .catalog-grid-item:hover .catalog-grid-item__details {
    transform: var(--catalog-grid-item__content-translateY--active);
  }

  .catalog-grid-item:focus-within .catalog-grid-item__link--name,
  .catalog-grid-item:hover .catalog-grid-item__link--name {
    overflow: var(--catalog-grid-item__link-overflow--visible);
    white-space: var(--catalog-grid-item__link-white-space--visible);
  }
}

.catalog-grid-item__badge {
  position: absolute;
  top: var(--catalog-grid-item__badge-top-position);
  left: var(--catalog-grid-item__badge-left-position);
  z-index: var(--catalog-grid-item__badge-z-index);
  border-radius: var(--catalog-grid-item__badge-border-radius);
  padding: var(--catalog-grid-item__badge-padding);
  font-size: var(--catalog-grid-item__badge-font-size);
  background-color: var(--catalog-grid-item__badge-bg-color);
}

.catalog-grid-item__link {
  display: block;
}

.catalog-grid-item__image {
  display: block;
  width: 100%;
  max-width: 100%;
}

@media all and (min-width: 768px) {
  .catalog-grid-item__image {
    padding-bottom: var(--catalog-grid-item__content-height);
  }
}

@media all and (min-width: 768px) and (min-width: 1600px) {
  .catalog-grid-item__image {
    padding-bottom: var(--catalog-grid-item__content-height--mq-large);
  }
}

.catalog-grid-item__link--name {
  color: var(--catalog-grid-item__name-color);
  overflow: var(--catalog-grid-item__link-overflow);
  white-space: var(--catalog-grid-item__link-white-space);
  text-overflow: var(--catalog-grid-item__link-text-overflow);
}

.catalog-grid-item__image-wrapper .image {
  margin: var(--catalog-grid-item__image-margin);
  width: var(--catalog-grid-item__image-width);
  height: var(--catalog-grid-item__image-height);
}

.catalog-grid-item__image-wrapper .lazyload,
.catalog-grid-item__image-wrapper .lazyloading {
  width: var(--catalog-grid-item__image-width--lazyload);
}

.catalog-grid-item__image-wrapper .loader__circle {
  margin-top: var(--catalog-grid-item__loader-margin-top);
}

.catalog-grid-item__name {
  font-weight: var(--catalog-grid-item__name-font-weight);
  font-size: var(--catalog-grid-item__font-size);
  line-height: var(--catalog-grid-item__line-height);
  margin-bottom: var(--catalog-grid-item__name-margin-botttom);
}

@media all and (min-width: 1600px) {
  .catalog-grid-item__name {
    font-size: var(--catalog-grid-item__font-size--mq-large);
  }
}

.catalog-grid-item__name--bigger {
  padding: var(--catalog-grid-item__name-padding--bigger);
}

.catalog-grid-item__rating {
  margin-bottom: var(--catalog-grid-item__rating-margin-bottom);
}

.catalog-grid-item__price {
  margin-bottom: var(--catalog-grid-item__price-margin-bottom);
  padding: var(--catalog-grid-item__padding);
  font-size: var(--catalog-grid-item__font-size);
  line-height: var(--catalog-grid-item__line-height);
  font-weight: var(--catalog-grid-item__font-weight);
  white-space: nowrap;
}

@media all and (min-width: 1600px) {
  .catalog-grid-item__price {
    font-size: var(--catalog-grid-item__font-size--mq-large);
  }
}

.catalog-grid-item__details {
  padding: var(--catalog-grid-item__content-padding);
  background: var(--catalog-grid-item__content-bg-color);
  transition: var(--transition-base);
}

@media all and (min-width: 768px) {
  .catalog-grid-item__details {
    position: absolute;
    transform: var(--catalog-grid-item__content-translateY);
    width: var(--catalog-grid-item__content-width);
    border-top: var(--catalog-grid-item__border);
  }
}

@media all and (min-width: 1600px) {
  .catalog-grid-item__details {
    transform: var(--catalog-grid-item__content-translateY--mq-large);
  }
}

.catalog-grid-item__options .swatch {
  margin: var(--catalog-grid-item__base-spacing) 0;
}

.catalog-grid-item__actions {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
}

.catalog-grid-item__primary-form {
  margin: var(--catalog-gird-item__primary-form-margin);
}

@media all and (min-width: 768px) {
  .catalog-grid-item__primary-form {
    flex: 1;
  }
}

.catalog-grid-item__primary-action {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: var(--catalog-grid-item__primary-padding);
}

@media all and (min-width: 768px) {
  .catalog-grid-item__cart-icon {
    display: none;
  }
}

.catalog-grid-item__cart-text {
  display: none;
}

@media all and (min-width: 768px) {
  .catalog-grid-item__cart-text {
    display: block;
  }
}

.catalog-grid-item__secondary-action {
  display: flex;
  align-items: center;
  justify-content: center;
}

.catalog-grid-item__secondary-action .button {
  height: var(--catalog-grid-item__action-size);
  width: var(--catalog-grid-item__action-size);
  padding: var(--catalog-grid-item__action-padding);
  background: var(--catalog-grid-item__action-background);
  border: var(--catalog-grid-item__action-border);
  cursor: var(--catalog-grid-item__action-cursor);
}

.catalog-grid-item__secondary-action .button:hover .button__icon,
.catalog-grid-item__secondary-action .button:focus .button__icon {
  fill: var(--catalog-grid-item__action-icon-fill-hover);
}

.catalog-grid-item__secondary-action .button .button__icon {
  width: var(--catalog-grid-item__action-icon-size);
  height: var(--catalog-grid-item__action-icon-size);
  transition: var(--catalog-grid-item__action-icon-transition);
  fill: var(--catalog-grid-item__action-icon-fill);
}
</style>
