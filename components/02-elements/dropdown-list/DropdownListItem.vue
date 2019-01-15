<template>
  <li
    :class="[
      'dropdown-list__item',
      {
        'dropdown-list__item--parent': hasContent,
        'dropdown-list__item--open': opened
      }
    ]"
  >
    <component
      :is="tag"
      :class="['dropdown-list__label link--invert', labelClass]"
      @click="toggle"
    >
      {{ title }}
      <alpaca-icon
        v-if="hasContent"
        icon="angle-down"
        custom-class="dropdown-list__icon"
      />
    </component>

    <div
      v-if="hasContent"
      :id="id"
      :class="['dropdown-list__content link--invert', customClass]"
      aria-hidden="true"
    >
      <slot />
    </div>
  </li>
</template>

<script>
import AlpacaIcon from "../../01-globals/icon/Icon.vue";

export default {
  components: {
    AlpacaIcon
  },
  props: {
    id: {
      type: String,
      default: null
    },
    customClass: {
      type: String,
      default: null
    },
    title: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      default: "button"
    },
    labelClass: {
      type: String,
      default: null
    },
    nest: {
      type: Boolean,
      default: false
    },
    level: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      opened: false
    };
  },
  computed: {
    hasContent () {
      const defaultSlot = this.$slots.default;
      if (defaultSlot) {
        return !!this.$slots.default[0].text ||  !!this.$slots.default[0].tag;
      }
      return false;
    },
  },
  methods: {
    toggle() {
      this.opened = !this.opened;
    }
  }
};
</script>
