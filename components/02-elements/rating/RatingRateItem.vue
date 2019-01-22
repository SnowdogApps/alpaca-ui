<template>
  <div
    :class="['rating__rate-item', { 'rating__rate-item--active': active }]"
    role="option"
    :aria-selected="selected"
  >
    <label
      :for="id"
      :aria-label="ariaLabel"
      class="rating__star rating__star--rate"
      @click="onClick"
    >
      <span class="rating__indicator" />
    </label>
  </div>
</template>

<script>
  export default {
    props: {
      id: {
        type: Number,
        required: true
      },
      ariaLabel: {
        type: String,
        required: true
      },
      active: {
        type: Boolean,
        required: true
      },
      selected: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      onClick() {
        this.$emit('select');
      }
    }
  }
</script>

<style lang="scss">
  $rating__size                   : 95px !default;
  $rating__item-size              : $rating__size / 5 !default;
  $rating__size--rate             : 250px !default;
  $rating__margin--rate           : $spacer--medium !default;
  $rating__item-size--rate        : $rating__size--rate / 5 !default;
  $icon__active-color             : '#fab216' !default;
  $icon__active-color--with-border: '#fab216' !default;
  $icon__inactive-color           : '#c2c1df' !default;
  $rating__error-margin-bottom    : $spacer !default;
  $rating__error-color            : $red !default;

.rating {
  &:hover,
  &:focus {
    .rating__rate-item span:before {
      display: block;
    }
  }

  .rating__rate-item {
    position: relative;
    flex: 1 0 $rating__item-size;
    overflow: hidden;

    &:hover,
    &:focus {
      ~ .rating__rate-item span:before {
        display: none;
      }
    }
  }

  &--rate {
    .rating__rate-item {
      flex: 1 0 $rating__item-size--rate;
    }

  }
}


</style>
