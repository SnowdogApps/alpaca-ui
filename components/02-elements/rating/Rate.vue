<template>
  <fieldset class="rating__wrapper">
    <div
      v-if="!disabled"
      class="rating rating--rate"
      role="listbox"
      aria-required="true"
      aria-labelledby="rating-field-label"
    >
      <div
        v-for="item in ratingItems"
        :id="item"
        :key="item"
        :class="['rating__rate-item', active >= item ? 'rating__rate-item--active' : '']"
        role="option"
        :aria-selected="rating === item"
      >
        <label
          class="rating__star rating__star--rate"
          :for="item"
          :aria-label="`Rate option, ${item} of ${ratingItems}. Click to vote`"
          @click="selectValue(item)"
        >
          <span class="rating__indicator" />
        </label>
      </div>
    </div>
    <div
      v-if="disabled"
      class="rating"
      :aria-label="`Average rating: ${rating}`"
      :title="`Average rating: ${rating}`"
      tabindex="0"
    >
      <div
        class="rating__star"
        :style="{'width': `${setScores}%`}"
      >
        <span class="rating__indicator" />
      </div>
    </div>
  </fieldset>
</template>

<script>
  export default {
    model: {
      prop: 'rating',
      event: 'change'
    },
    props: {
      rating: {
        type: Number,
        default: 0
      },
      ratingItems: {
        type: Number,
        required: true
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        active: this.rating
      }
    },
    computed: {
      setScores() {
        return this.rating / this.ratingItems * 100
      }
    },
    methods: {
      selectValue(selectedIndex) {
        this.active = selectedIndex
        this.$emit('change', selectedIndex)
      }
    }
  }
</script>

<style lang="scss">
  $rating__size                   : 120px !default;
  $rating__item-size              : $rating__size / 5 !default;
  $rating__size--rate             : 250px !default;
  $rating__margin--rate           : $spacer--medium !default;
  $rating__item-size--rate        : $rating__size--rate / 5 !default;
  $icon__active-color             : $orange !default;
  $icon__active-color--with-border: $orange !default;
  $icon__inactive-color           : $gray-light !default;
  $rating__error-margin-bottom    : $spacer !default;
  $rating__error-color            : $red !default;

  .rating__wrapper {
    border: none;
  }

  .rating {
    width: $rating__size;

    &:hover,
    &:focus {
      .rating__rate-item span::before {
        display: block;
      }
    }

    &__rate-item {
      position: relative;
      flex: 1 0 $rating__item-size;
      overflow: hidden;

      &:hover,
      &:focus {
        ~ .rating__rate-item span::before {
          display: none;
        }
      }
    }

    &__star {
      position: relative;
      height: $rating__item-size;
      width: $rating__size;

      &::before { // inactive
        content: '';
        position: absolute;
        display: block;
        bottom: 0;
        left: 0;
        top: 0;
        right: 0;
        width: $rating__size;
        height: $rating__item-size;
        background-image: url(../../../assets/images/rate/star.svg);
        background-repeat: repeat-x;
        background-position: left center;
        background-size: $rating__item-size;
        text-indent: 10000px;

        @include isIE() {
          height: 100%;
          background-size: $rating__item-size 100%;
        }
      }

      &--single {
        width: $rating__item-size;
      }
    }

    &__indicator {
      left: 0;
      top: 0;
      display: block;
      height: $rating__item-size;
      width: $rating__size;
      overflow: hidden;
      text-indent: -10000px;

      &::before { // active
        content: '';
        position: absolute;
        display: block;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: auto;
        height: $rating__item-size;
        background-image: url(../../../assets/images/rate/active-star.svg);
        background-repeat: repeat-x;
        background-position: left center;
        background-size: $rating__item-size;
        text-indent: 10000px;

        @include isIE() {
          width: 100%;
          height: 100%;
          background-size: $rating__item-size 100%;
        }

        .rating__star--rate & {
          display: none;
        }

        .rating__star--rate:hover &,
        .rating__star--rate:focus &,
        .rating__rate-item--active & {
          display: block;
        }
      }

      &::after { //active star with border
        content: '';
        position: absolute;
        display: block;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        height: $rating__item-size;
        background-image: url(../../../assets/images/rate/active-star.svg);
        background-repeat: repeat-x;
        background-size: $rating__item-size;
        background-position: left center;

        @include isIE() {
          width: 100%;
          height: 100%;
          background-size: $rating__item-size 100%;
        }

        .rating__star--rate & {
          display: none;
          text-indent: 10000px;
        }
      }
    }

    &__error {
      display: none;
      color: $rating__error-color;
      margin-bottom: $rating__error-margin-bottom;

      &--visible {
        display: block;
      }
    }

    .mage-error {
      display: none !important; // sass-lint:disable-line no-important
    }

    &--rate {
      display: flex;
      justify-content: center;
      align-items: center;
      width: $rating__size--rate;
      margin-bottom: $rating__margin--rate;

      .rating__rate-item {
        flex: 1 0 $rating__item-size--rate;
      }

      .rating__star {
        height: $rating__item-size--rate;
        width: $rating__item-size--rate;
        border: 0;
        background-color: transparent;
        cursor: pointer;

        &::before {
          width: $rating__item-size--rate;
          height: $rating__item-size--rate;
          background-size: $rating__item-size--rate;

          @include isIE() {
            background-size: $rating__item-size--rate 100%;
          }
        }

        &--single {
          width: $rating__item-size--rate;
        }
      }

      .radio__field {
        width: 1px;
        height: 1px;
        bottom: 0;

        &:focus {
          opacity: 1;
          height: 0;
          outline: none;
          appearance: none;

          &::before {
            content: '';
            display: block;
            position: absolute;
            top: -48px;
            width: 42px;
            height: 45px;
            border: 2px dashed $blue;
          }
        }
      }

      .rating__indicator {
        height: $rating__item-size--rate;
        width: $rating__item-size--rate;

        &::before {
          height: $rating__item-size--rate;
          background-size: $rating__item-size--rate;
        }

        &::after {
          height: $rating__item-size--rate;
          background-size: $rating__item-size--rate;
        }
      }
    }
  }
</style>
