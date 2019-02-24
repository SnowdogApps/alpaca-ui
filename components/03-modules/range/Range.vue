<template>
  <div class="range-filter">
    <vue-slider
      ref="slider"
      class="range-filter__slider"
      :value="currentValue"
      :height="slider.height"
      :min="min"
      :max="max"
      :dot-size="slider.dotSize"
      :tooltip="slider.tooltip"
      :bg-style="slider.bgStyle"
      :slider-style="slider.sliderStyle"
      :process-style="slider.processStyle"
      @input="syncValue"
    />
    <div class="range-filter__inputs-wrapper">
      <label
        class="
            label
            range-filter__label
        "
        :for="lowerInput.field.id"
      >
        {{ lowerInput.label }}
      </label>
      <input
        :id="lowerInput.field.id"
        v-model.number.lazy="minInput"
        class="input__field range-filter__input range-filter__input--lower"
        :label="lowerInput.label"
        type="text"
        :name="lowerInput.field.name"
        :placeholder="lowerInput.field.placeholder"
      >
      <span
        v-if="lowerInput.suffix"
        class="range-filter__suffix"
      >
        {{ lowerInput.suffix }}
      </span>
      <span class="range-filter__dash">
        -
      </span>
      <label
        class="
            label
            range-filter__label
        "
        :for="upperInput.field.id"
      >
        {{ upperInput.field.label }}
      </label>
      <input
        :id="upperInput.field.id"
        v-model.number.lazy="maxInput"
        class="input__field range-filter__input range-filter__input--upper"
        :label="upperInput.label"
        type="text"
        :name="upperInput.field.name"
        :placeholder="upperInput.field.placeholder"
      >
      <span
        v-if="upperInput.suffix"
        class="range-filter__suffix"
      >
        {{ upperInput.suffix }}
      </span>
    </div>
    <alpaca-button
      v-if="applyLabel"
      type="button"
      class="button--secondary button--fluid range-filter__button"
      :aria-label="applyLabel"
      @click="apply"
    >
      {{ applyLabel }}
    </alpaca-button>
  </div>
</template>

<script>
  import vueSlider from 'vue-slider-component'
  import AlpacaButton from '../../02-elements/button/Button'

  export default {
    components: {
      vueSlider,
      AlpacaButton
    },
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      value: {
        type: Array,
        required: true
      },
      min: {
        type: Number,
        required: true
      },
      max: {
        type: Number,
        required: true
      },
      slider: {
        type: Object,
        default: () => {
          return {
            dotSize: 24,
            height: 8,
            tooltip: null,
            bgStyle: {
              "backgroundColor": "#73739c"
            },
            processStyle: {
              "backgroundColor": "#31e37d",
              "box-shadow": "inset 0 0 3px rgba(51, 51, 51, 0.45)"
            },
            sliderStyle: {
              "boxShadow": "0 2px 4px 0 rgba(51, 51, 51, 0.5)"
            }
          }
        }
      },
      lowerInput: {
        type: Object,
        default: () => {
          return {
            label: 'Minimum value',
            field: {
              id: 'range-filter-min',
              name: 'range-filter-min',
              placeholder: '',
            },
            suffix: '$'
          }
        }
      },
      upperInput: {
        type: Object,
        default: () => {
          return {
            label: 'Maximum value',
            field: {
              id: 'range-filter-max',
              name: 'range-filter-max',
              placeholder: '',
            },
            suffix: '$'
          }
        }
      },
      applyLabel: {
        type: String,
        default: 'Apply'
      }
    },
    data() {
      return {
        currentValue: this.value
      }
    },
    computed: {
      minInput: {
        get: function() {
          return this.currentValue[0]
        },
        set: function(minValue) {
          minValue = this.limitValue(minValue) || this.min
          if (minValue > this.currentValue[1]) {
            this.currentValue = [minValue, minValue]
          } else {
            this.$set(this.currentValue, 0, minValue)
          }
          this.syncValue()
        }
      },
      maxInput: {
        get: function() {
          return this.currentValue[1]
        },
        set: function(maxValue) {
          maxValue = this.limitValue(maxValue) || this.max
          if (maxValue < this.currentValue[0]) {
            this.currentValue = [maxValue, maxValue]
          } else {
            this.$set(this.currentValue, 1, maxValue)
          }
          this.syncValue()
        }
      }
    },
    methods: {
      limitValue(value) {
        if (value > this.max) {
          value = this.max
        }
        if (value < this.min) {
          value = this.min
        }
        return value
      },
      syncValue(value) {
        if (value) {
          this.currentValue = value
        }
        this.$emit('input', this.currentValue)
      },
      apply() {
        this.$emit('apply', this.currentValue)
      }
    }
  }
</script>

<style lang="scss">
  $range__padding       : $spacer 0 0 0 !default;
  $range__input-margin  : 0 !default;
  $range__dash-padding  : 0 $spacer--medium 0 $spacer !default;
  $range__suffix-padding: 0 $spacer !default;
  $range__button-padding: 0 $spacer--extra-large !default;
  $range__button-margin : 0 0 $spacer--medium 0 !default;

  .range-filter {
    padding: $range__padding;
    overflow: hidden;

    &__inputs-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__dash {
      text-align: center;
      padding: $range__dash-padding;
    }

    &__suffix {
      padding: $range__suffix-padding;
    }

    &__label {
      @include visually-hidden();
    }

    &__input {
      width: auto;
      flex-grow: 1;
      margin: $range__input-margin;
    }

    &__button {
      margin: $range__button-margin;
      padding: $range__button-padding;
    }
  }
</style>
