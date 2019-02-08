<template>
  <div>
    <div
      v-for="item in ratingItems"
      :id="item"
      :key="item"
      :aria-label="`Rate option, ${item} of ${ratingItems}. Click to vote`"
      :active="rating >= item"
      :selected="rating === item"
      :class="['rating__rate-item', { 'rating__rate-item--active': active }]"
      role="option"
      :aria-selected="selected"
      @click="selectValue(item)"
    >
      x
    </div>
    <span
      v-if="showText || showScore"
      :style="{ color: textColor }"
    >
      {{ text }}
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 5
      },
      rating: {
        type: Number,
        default: 0
      },
      ratingItems: {
        type: Number,
        required: true
      },
      showText: {
        type: Boolean,
        default: false
      },
      showScore: {
        type: Boolean,
        default: false
      },
      textColor: {
        type: String,
        default: '#1f2d3d'
      },
      text: {
        type: String,
        default: null
      }
    },
    data(){
      return {
        active: false,
        selected: false
      }
    },
    methods: {
      selectValue(selectedIndex) {
        this.$emit('change', selectedIndex);
      }
    }
  }
</script>

<style lang="scss">
  $rating__size                   : 95px !default;
  $rating__item-size              : $rating__size / 5 !default;
  $rating__size--rate             : 250px !default;
  $rating__item-size--rate        : $rating__size--rate / 5 !default;

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
