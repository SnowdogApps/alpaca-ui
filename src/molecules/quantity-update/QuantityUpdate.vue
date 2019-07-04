<template>
  <div class="a-quantity-update">
    <!-- @slot Label (Named slot) -->
    <slot name="label">
      <a-label
        v-if="label"
        :for="inputId"
        class="a-quantity-update__label"
      >
        {{ label }}
      </a-label>
    </slot>
    <div class="a-quantity-update__qty">
      <!-- @slot Decrement qty button (Scoped slot) -->
      <slot
        :update-qty="updateQty"
        name="minus"
      >
        <a-button
          :disabled="currentValue === minQty"
          :aria-label="decrementAriaLabel"
          @click.native="updateQty(-1)"
          class="a-quantity-update__button a-quantity-update__button--minus"
        >
          <a-icon
            :title="decrementIconTitle"
            icon="minus"
            class="button__icon a-quantity-update__icon"
          />
        </a-button>
      </slot>
      <!-- @slot Qty input (Scoped slot) -->
      <slot
        :current-value="currentValue"
        :input-event="inputEvent"
        name="input"
      >
        <a-input-wrapper
          :input-id="inputId"
          class="a-quantity-update__input-wrapper"
        >
          <input
            :id="inputId"
            :min="minQty"
            :max="maxQty"
            :value="currentValue"
            @input="inputEvent"
            class="a-quantity-update__input"
            type="number"
            autocomplete="off"
          >
        </a-input-wrapper>
      </slot>
      <!-- @slot Increment qty button (Scoped slot) -->
      <slot
        :update-qty="updateQty"
        name="plus"
      >
        <a-button
          :disabled="currentValue === maxQty"
          :aria-label="incrementAriaLabel"
          @click.native="updateQty(1)"
          class="a-quantity-update__button a-quantity-update__button--plus"
        >
          <a-icon
            :title="incrementIconTitle"
            icon="plus"
            class="a-quantity-update__icon"
          />
        </a-button>
      </slot>
    </div>
  </div>
</template>

<script>
import AInputWrapper from '../../molecules/input-wrapper/InputWrapper.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import AButton from '../../atoms/button/Button.vue'
import ALabel from '../../atoms/label/Label.vue'

export default {
  components: {
    AInputWrapper,
    AIcon,
    AButton,
    ALabel
  },
  model: {
    event: 'update'
  },
  props: {
    /**
     * Quantity value (used with v-model)
     */
    value: {
      type: [Number, String],
      required: true
    },
    /**
     * Label text (Default label)
     */
    label: {
      type: String,
      default: null
    },
    /**
     * Input id (Default input)
     */
    inputId: {
      type: String,
      default: null
    },
    /**
     * Min qty (Default input)
     */
    minQty: {
      type: Number,
      default: 0
    },
    /**
     * Max qty (Default input)
     */
    maxQty: {
      type: Number,
      default: null
    },
    /**
     * Decrement button aria-label (Default button)
     */
    decrementAriaLabel: {
      type: String,
      default: null
    },
    /**
     * Decrement button icon title (Default button)
     */
    decrementIconTitle: {
      type: String,
      default: null
    },
    /**
     * Increment button aria-label (Default button)
     */
    incrementAriaLabel: {
      type: String,
      default: null
    },
    /**
     * Increment button icon title (Default button)
     */
    incrementIconTitle: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  methods: {
    updateEmit (value) {
      /**
       * Triggered when value is changed
       * @type {Event}
       */
      this.$emit('update', value)
    },
    updateQty (value) {
      const newValue = this.currentValue + value
      if (this.minQty <= newValue && (this.maxQty ? (newValue <= this.maxQty) : true)) {
        this.currentValue = newValue
      }
      this.updateEmit(this.currentValue)
    },
    inputEvent (event) {
      const newValue = parseInt(event.target.value, 10)
      if (this.minQty <= newValue && (this.maxQty ? (newValue <= this.maxQty) : true)) {
        this.currentValue = newValue
      } else if (newValue > this.maxQty) {
        this.currentValue = this.maxQty
        event.target.value = this.maxQty
      } else {
        this.currentValue = this.minQty
        event.target.value = this.minQty
      }
      this.updateEmit(this.currentValue)
    }
  }
}
</script>

<style scoped lang="scss" src="./QuantityUpdate.scss" />
