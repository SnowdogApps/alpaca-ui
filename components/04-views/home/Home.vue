<template>
  <div class="page-wrapper">
    <alpaca-header
      :menu="menu"
      :src="logoSrc"
      :link="logoLink"
    />

    <main class="home">
      <alpaca-banner
        :link="mainBanner.link"
        :image="mainBanner.image"
        class="home__banner-content"
        aria-label="Banner"
      />
      <div class="container">
        <section class="home__banners-handler">
          <!--3-->

          <alpaca-banner
            v-for="banner in smallBanners"
            :key="banner.id"
            class="home__banner-content"
            :link="banner.link"
            :image="banner"
            aria-label="Banner"
          />
        </section>
        <section class="home__banners-handler">
          <!--2-->
          <alpaca-banner
            v-for="banner in mediumBanners"
            :key="banner.id"
            class="home__banner-content"
            :link="banner.link"
            :image="banner"
            aria-label="Banner"
          />
        </section>
        <section class="home__brands">
          <alpaca-heading
            :level="headingLevel"
            class="home__cms-block-title"
          >
            {{ heading }}
          </alpaca-heading>

          <alpaca-image-list
            list-class="home__brands-list"
            :elements="imageListElements"
          />
        </section>
        <section class="home__static-block">
          <article class="home__static-text">
            {{ text }}
          </article>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
  import AlpacaHeading from '../../01-globals/heading/Heading.vue'
  import AlpacaBanner from '../../02-elements/banner/Banner.vue'
  import AlpacaImageList from '../../02-elements/list/ImageList.vue'
  import AlpacaHeader from '../../03-modules/header/Header.vue'

  export default {
    components: {
      AlpacaHeading,
      AlpacaBanner,
      AlpacaImageList,
      AlpacaHeader
    },
    props: {
      menu: {
        type: Array,
        required: true
      },
      logoSrc: {
        type: String,
        required: true
      },
      logoLink: {
        type: String,
        required: true
      },
      mainBanner: {
        type: Object,
        required: true
      },
      smallBanners: {
        type: Array,
        required: true
      },
      mediumBanners: {
        type: Array,
        required: true
      },
      text: {
        type: String,
        required: true
      },
      headingLevel: {
        type: Number,
        required: true
      },
      heading: {
        type: String,
        required: true
      },
      imageListElements: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  $home__banner-spacer            : $spacer--medium !default;
  $home__banner-spacer-medium     : $spacer--medium !default;
  $home__banner-spacer-large      : $spacer--large !default;
  $home__banner-spacer-extra-large: $spacer--extra-large !default;
  $home__text-column-gap          : $spacer--extra-large !default;
  $home__block-border             : 1px solid $gray-light !default;
  $home__brand-width--small       : 33.33% !default;

  .home {
    &__banners-handler {
      @include mq($screen-m) {
        display: flex;
        flex-flow: row nowrap;
      }

      &:first-child {
        margin-top: $home__banner-spacer-medium;
      }
    }

    &__banner-content {
      margin-bottom: $home__banner-spacer-medium;
      @include mq($screen-m) {
        margin-right: $home__banner-spacer;

        &:last-child {
          margin-right: 0;
        }
      }
    }

    &__brands {
      margin-top: $home__banner-spacer-extra-large;
      border-bottom: $home__block-border;
    }

    &__brands-list {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      align-items: center;
      margin: $home__banner-spacer-large 0 $home__banner-spacer-extra-large 0;

      @include mq($screen-m) {
        flex-wrap: nowrap;
      }

      .list__item {
        margin-bottom: $home__banner-spacer;
        width: $home__brand-width--small;
        padding: $home__banner-spacer;
        border-right: $home__block-border;
        text-align: center;

        &:nth-child(3n) {
          border-right: 0;
        }
        @include mq($screen-m) {
          width: 20%;

          &:nth-child(3n) {
            border-right: $home__block-border;
          }

          &:last-child {
            border-right: 0;
          }
        }

        @include mq($screen-l) {
          padding: $home__banner-spacer-large;
        }
      }

      .link {
        display: block;
      }
    }

    &__static-block {
      padding: $home__banner-spacer-extra-large $home__banner-spacer-medium;
    }

    &__cms-block-title {
      margin: 0;
      text-align: center;
      text-transform: uppercase;
    }

    &__static-text {
      @include mq($screen-m) {
        column-count: 2;
        column-gap: $home__text-column-gap;
        text-align: justify;
      }
    }
  }
</style>
