<template>
  <div class="icons">
    <div
      v-for="icon in icons"
      :key="icon.iconId"
      class="icons__item"
    >
      <icon
        :icon="icon.iconId"
        :title="icon.iconTitle"
      />
      <span class="icons__name">{{ icon.iconId }}</span>
    </div>
  </div>
</template>

<script>
import icons from './icons.json'
import Icon from '../../01-globals/icon/Icon.vue'

export default {
  components: {Icon},
  data() {
    return {
      icons
    }
  }
}
</script>

<style lang="scss">
.icons {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;

  &__item {
    margin: 20px;
    width: 100px;

    svg {
      margin: 0 auto;
    }
  }

  &__name {
    display: block;
    margin-top: 20px;
    text-align: center;
  }
}
</style>
