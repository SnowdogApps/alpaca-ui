<template>
  <nav class="pager">
    <ul class="pager__list">
      <li class="pager__item">
        <alpaca-button
          icon="arrow-left"
          custom-class="pager__link pager__link--prev"
          aria-label="Go to previous page"
          :disabled="currentPage < 2"
          @click="setCurrentPage(currentPage - 1)"
        />
      </li>

      <template v-if="showFirst">
        <li class="pager__item">
          <alpaca-button
            custom-class="pager__link"
            @click="setCurrentPage(1)"
          >
            1
          </alpaca-button>
        </li>
        <li class="pager__item">
          ...
        </li>
      </template>

      <li
        v-for="number in limitedPageNumbers"
        :key="number"
        :class="[
          'pager__item',
          { 'pager__item--current': currentPage === number }
        ]"
      >
        <alpaca-button
          custom-class="pager__link"
          @click="setCurrentPage(number)"
        >
          {{ number }}
        </alpaca-button>
      </li>

      <template v-if="showLast">
        <li class="pager__item">
          ...
        </li>
        <li class="pager__item">
          <alpaca-button
            custom-class="pager__link"
            @click="setCurrentPage(numberOfPages)"
          >
            {{ numberOfPages }}
          </alpaca-button>
        </li>
      </template>

      <li class="pager__item">
        <alpaca-button
          icon="arrow-right"
          custom-class="pager__link pager__link--next"
          aria-label="Go to next page"
          :disabled="currentPage > numberOfPages - 1"
          @click="setCurrentPage(currentPage + 1)"
        />
      </li>
    </ul>
  </nav>
</template>

<script>
  import AlpacaButton from '../../02-elements/button/Button'

  export default {
    components: {
      AlpacaButton
    },
    props: {
      page: {
        type: Number,
        required: true
      },
      totalSize: {
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
        showFirst: false,
        showLast: false,
        limitPerPage: this.limit || 5
      }
    },
    computed: {
      currentPage: {
        get () {
          return this.page
        },
        set (value) {
          this.$emit('update:page', value)
        }
      },
      numberOfPages () {
        return Math.ceil(this.totalSize / this.limitPerPage)
      },
      listOfPageNumbers () {
        return Array.from(Array(this.numberOfPages), (_, i) => i + 1)
      },
      limitedPageNumbers () {
        return this.setLimitedPageNumber()
      }
    },
    methods: {
      setLimitedPageNumber () {
        if (this.numberOfPages <= this.limitPerPage) {
          this.showFirst = false
          this.showLast = false

          return this.listOfPageNumbers
        }

        if (this.page < this.limitPerPage - Math.floor(this.limitPerPage / 2) + 1) {
          this.showFirst = false
          this.showLast = true

          return this.listOfPageNumbers.slice(
            0,
            this.limitPerPage
          )
        }

        if (this.numberOfPages - this.page < this.limitPerPage - Math.floor(this.limitPerPage / 2) + 1) {
          this.showFirst = true
          this.showLast = false

          return this.listOfPageNumbers.slice(
            this.numberOfPages - this.limitPerPage
          )
        }

        this.showFirst = true
        this.showLast = true

        return this.listOfPageNumbers.slice(
          this.currentPage - Math.floor(this.limitPerPage / 2) - 1,
          this.currentPage + Math.floor(this.limitPerPage / 2)
        )
      },
      setCurrentPage (value) {
        this.currentPage = value
      }
    }
  }
</script>

<style lang="scss">
  $pager__list-padding                        : $spacer !default;
  $pager__item-margin                         : 0 $spacer !default;
  $pager__item-after-height--current          : $spacer !default;
  $pager__item-after-background-color--current: $color-primary !default;
  $pager__item-after-transition--current      : $transition-base  !default;
  $pager__item-size                           : 48px !default;
  $pager__icon-width                          : 24px !default;
  $pager__icon-height                         : 24px !default;
  $pager__link-fill-disabled                  : $gray !default;
  $pager__link-fill                           : $green !default;

  .pager {
    width: 100%;
    text-align: center;

    &__list {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style-type: none;
      padding: $pager__list-padding;
      margin: $reset;
    }

    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-basis: $pager__item-size;
      height: $pager__item-size;
      margin: $pager__item-margin;
      padding: $reset;

      &:first-child {
        margin-left: $reset;
      }

      &:last-child {
        margin-right: $reset;
      }

      &--current {
        position: relative;
        &:after {
          content: '';
          position: absolute;
          bottom: 14px;
          left: 0;
          width: 100%;
          height: $pager__item-after-height--current;
          background-color: $pager__item-after-background-color--current;
          z-index: -1;
          transition: $pager__item-after-transition--current;
          transform-origin: left;
        }
      }
    }

    &__link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: $pager__item-size;
      border-radius: 0;
      border: none;
      background-color: transparent;
      text-decoration: none;

      &[disabled] {
        pointer-events: none;
        cursor: default;

        .icon {
          fill: $pager__link-fill-disabled;
        }
      }

      &:focus,
      &:hover{
        background-color: transparent;
        color: $color-primary;
      }

      &--prev,
      &--next {
        .icon {
          fill: $pager__link-fill;
          width: $pager__icon-width;
          height: $pager__icon-height;
        }

        &:focus:not([disabled]),
        &:hover:not([disabled]) {
          background-color: $color-secondary;
        }
      }
    }
  }
</style>
