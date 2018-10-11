<template>
  <form class="search-form">
    <alpaca-input
      id="header-search"
      type="search"
      :hidden-label="true"
      label="Search entire store here..."
      placeholder="Search entire store here..."
      inputClass="search-form__input"
    />
    <alpaca-button icon="search" custom-class="search-form__button" />
  </form>
</template>

<script>
import AlpacaButton from '../../02-elements/button/Button.vue'
import AlpacaInput from '../../02-elements/form/input/Input.vue'

export default {
    components: {
        AlpacaButton,
        AlpacaInput
    }
}
</script>

<style lang="scss">
:root {
    --search-form__height: 34px;
    --search-form__width: 100%;
    --search-form__width--extra-large: 70%;
    --search-form__alignment: flex-end;
    --search-form__margin: 0;
    --search-form__border-color: var(--gray-light);
    --search-form__font-size: var(--font-size-small);
    --search-form__input-height: 32px;
    --search-form__button-size: 18px;
    --search-form__button-margin: 0;
    --search-form__button-border: none;
    --search-form__button-background: transparent;
    --search-form__button-icon-color: var(--gray-dark);
    --search-form__placeholder-color: var(--gray);
}

.search-form {
    width: var(--search-form__width);
    height: var(--search-form__height);
    align-self: var(--search-form__alignment);
    margin: var(--search-form__margin);
    border: 1px solid var(--search-form__border-color);
    border-radius: var(--search-form__height);
    z-index: 1;
}

@media all and (min-width: 768px) {
    .search-form {
        position: relative;
    }
}

@media all and (min-width: 1200px) {
    .search-form {
        width: var(--search-form__width--extra-large);
    }
}

.search-form__input-wrapper {
    position: relative;
}

.search-form__input {
    width: 100%;
    height: var(--search-form__input-height);
    border: none;
    border-radius: var(--search-form__height);
    font-size: var(--search-form__font-size);
}

.search-form__input::placeholder {
    color: var(--search-form__placeholder-color);
    font-size: var(--search-form__font-size);
}

.search-form__button {
    position: absolute;
    top: 0;
    right: 0;
    height: var(--search-form__input-height);
    margin: var(--search-form__button-margin);
    border: var(--search-form__button-border);
    border-radius: var(--search-form__height);
    background-color: var(--search-form__button-background);
}

.search-form__button:focus,
.search-form__button:hover {
    background-color: var(--search-form__button-background);
}

.search-form .button__icon {
    width: var(--search-form__button-size);
    height: var(--search-form__button-size);
    fill: var(--search-form__button-icon-color);
    padding: 0;
}
</style>
