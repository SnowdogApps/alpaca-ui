<template>
  <div class="a-pagination">
    <button
      @click="prev"
      class="a-pagination__prev-button"
    >
      <a-icon icon="arrow-left" />
    </button>
    <ul class="a-pagination__list">
      <li
        :key="page"
        v-for="page in pages"
        class="a-pagination__item"
      >
        <button
          @click="setPage"
          :class="['a-pagination__page-button', currentLocal === page && 'a-pagination__page-button--current']"
        >
          {{ page }}
        </button>
      </li>
    </ul>
    <button
      @click="next"
      class="a-pagination__next-button"
    >
      <a-icon icon="arrow-right" />
    </button>
  </div>
</template>

<script>
import AIcon from '../../atoms/icon/Icon.vue'

export default {
  components: {
    AIcon
  },
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    pages: {
      type: Number,
      required: true
    },
    limit: {
      type: Number,
      default: 5
    }
  },
  data () {
    return {
      currentLocal: this.currentPage
    }
  },
  methods: {
    prev () {
      this.currentLocal = this.currentLocal - 1
      console.log('<')
    },
    next () {
      this.currentLocal = this.currentLocal + 1
      console.log('>')
    },
    setPage (page) {
      console.log(page)
    }
  }
}
</script>

<style lang="scss">
  @import "../../../assets/styles/globals";

  .a-pagination {
    width: 100%;
    font-weight: normal;
    font-size: 14px;
    font-family: $font-family-base;
    font-style: normal;
    font-stretch: normal;
    line-height: 3.43;
    letter-spacing: normal;
    text-align: center;

    &__list {
      display: inline-flex;
      padding: 0;
      list-style: none;
    }

    &__item {
      align-items: center;
      justify-content: center;
    }

    &__page-button,
    &__prev-button,
    &__next-button {
      border: none;
      cursor: pointer;
    }

    &__page-button {
      &--current {
        position: relative;
        z-index: 1;

        &::after {
          position: absolute;
          bottom: 0;
          left: 0;
          z-index: -1;
          width: 100%;
          height: $spacer;
          background-color: $color-primary;
          transform-origin: left;
          transition: $transition-base;
          content: '';
        }
      }

      &:hover {
        color: $color-primary;
      }
    }
  }
</style>
