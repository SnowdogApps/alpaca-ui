<template>
  <div class="divider">
    <span class="divider__left"/>
    <span class="divider__right"/>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
:root {
  --divider__color--left: var(--color-primary);
  --divider__color--right: var(--gray-lighter);
  --divider__size: 8px;
}

.divider {
  display: none;
}

@media all and (min-width: 768px) {
  .divider {
    display: flex;
  }
}

.divider__left,
.divider__right {
  border-top: var(--divider__size) solid;
  flex: 1;
}

.divider__left {
  border-color: var(--divider__color--left);
  flex-grow: 1;
}

.divider__right {
  border-color: var(--divider__color--right);
  flex-grow: 2;
}
</style>
