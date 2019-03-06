<template>
  <img
    :data-src="lazySrc"
    :data-srcset="lazySrcset"
    :style="style"
    class="image"
  >
</template>

<script>
import lozad from 'lozad'

export default {
  name: 'AppImage',
  props: {
    backgroundColor: {
      type: String,
      default: '#f7f7f9',
    },
    height: {
      type: Number,
      default: null,
    },
    lazySrc: {
      type: String,
      default: null,
    },
    lazySrcset: {
      type: String,
      default: null,
    },
    width: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      loading: true,
    }
  },
  computed: {
    aspectRatio () {
      if (!this.width || !this.height) {
        return null
      }

      return (this.height / this.width) * 100
    },
    style () {
      const style = { backgroundColor: this.backgroundColor }

      if (this.width) {
        style.width = `${this.width}px`
      }

      if (this.loading && this.aspectRatio) {
        style.height = 0
        style.paddingTop = `${this.aspectRatio}%`
      }

      return style
    },
  },
  mounted () {
    const setLoadingState = () => {
      this.loading = false
    }
    this.$el.addEventListener('load', setLoadingState)
    this.$once('hook:destroyed', () => {
      this.$el.removeEventListener('load', setLoadingState)
    })

    const observer = lozad(this.$el)
    observer.observe()
  },
}
</script>

<style lang="scss">
  $image__width     : 100% !default;
  $image__height    : 100% !default;
  $image__max-width : 100% !default;
  $image__max-height: 100% !default;

  .image {
    display: block;
    max-width: $image__max-width;
    max-height: $image__max-height;
    width: $image__width;
    height: $image__height;
  }

  img,
  picture {
    @extend .image;
  }
</style>
