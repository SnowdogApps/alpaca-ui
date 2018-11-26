<template>
  <component
    :is="listTag"
    :class="[
      'list',
      listClass
    ]"
  >
    <component
      :is="elementTag"
      v-for="(item, idx) in elements"
      :key="`image-list-item-${idx}`"
      :class="[
        'list__item',
        elementClass
      ]"
    >
      <div 
        v-if="item.image"
        class="list__image"
      >
        <div
          :class="[
            'lazyload-wrapper',
            item.image.wrapperClass
          ]"
        >
          <img
            :class="[
              'image',
              'lazyloaded',
              item.image.class
            ]"
            :src="item.image.src"
            :data-src="item.image.src"
            :alt="item.image.alt"
          >
        </div>
      </div>
      <div class="list__content">
        {{ item.text }}
      </div>
    </component>
  </component>
</template>

<script>
export default {
  props: {
    listTag: {
      type: String,
      default: 'ul'
    },
    elementTag: {
      type: String,
      default: 'li'
    },
    listClass: {
      type: String,
      default: ''
    },
    elementClass: {
      type: String,
      default: ''
    },
    elements: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
$list__width--image: 16px !default;

.list {
  &--with-image {
    .list__item {
      display: flex;
    }
    .list__image {
      width: $list__width--image;
      height: auto;
    }
  }
}
</style>
