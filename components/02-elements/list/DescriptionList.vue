<template>
  <dl
    :class="[
      'list',
      'list--description',
      listClass
    ]"
  >
    <template v-for="(item, idx) in elements">
      <dt 
        :key="`desc-list-label-${idx}`"
        :class="[
          'list__label',
          labelClass
        ]"
      >
        {{ item.label }}
      </dt>
      <dd
        :key="`desc-list-value-${idx}`"
        :class="[
          'list__value',
          valueClass
        ]"
      >
        {{ item.value }}
      </dd>
    </template>        
  </dl>
</template>

<script>
export default {
  props: {
    listClass: {
      type: String,
      default: ''
    },
    labelClass: {
      type: String,
      default: ''
    },
    valueClass: {
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
  .list--description {
    display: inline-block;
  }
</style>
