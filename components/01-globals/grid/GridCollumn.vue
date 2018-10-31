<template>
  <div :class="['grid__column', width ? `grid__column--${width}` : '']">
    <div class="grid__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number | Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.grid__column {
  --width: 1;
  --count: 1;

  flex: 1 0 100%;

  padding-left: calc(var(--grid__gutter) / 2);
  padding-right: calc(var(--grid__gutter) / 2);

  flex-basis: calc(
    (100% / var(--count) * var(--width)) - (var(--count) - var(--width)) *
      var(--grid__gutter) / var(--count)
  );
  max-width: calc(
    (100% / var(--count) * var(--width)) - (var(--count) - var(--width)) *
      var(--grid__gutter) / var(--count)
  );
}

/* 2 cols */
@media all and (min-width: 480px) {
  .grid__column--1-2 {
    --width: 1;
    --count: 2;
  }
}

/* 3 cols */
@media all and (min-width: 480px) {
  .grid__column--1-3 {
    --width: 1;
    --count: 2;
  }
}

@media all and (min-width: 768px) {
  .grid__column--1-3 {
    --width: 1;
    --count: 3;
  }
}

@media all and (min-width: 768px) {
  .grid__column--2-3 {
    --width: 2;
    --count: 3;
  }
}

/* 4 cols */
@media all and (min-width: 768px) {
  .grid__column--1-4 {
    --width: 1;
    --count: 4;
  }
}

@media all and (min-width: 768px) {
  .grid__column--2-4 {
    --width: 2;
    --count: 4;
  }
}

@media all and (min-width: 768px) {
  .grid__column--3-4 {
    --width: 3;
    --count: 4;
  }
}

/* 5 cols */
@media all and (min-width: 768px) {
  .grid__column--1-5 {
    --width: 1;
    --count: 5;
  }
}

@media all and (min-width: 768px) {
  .grid__column--2-5 {
    --width: 2;
    --count: 5;
  }
}

@media all and (min-width: 768px) {
  .grid__column--3-5 {
    --width: 3;
    --count: 5;
  }
}

@media all and (min-width: 768px) {
  .grid__column--4-5 {
    --width: 4;
    --count: 5;
  }
}

/* 6 cols */
@media all and (min-width: 480px) {
  .grid__column--1-6 {
    --width: 2;
    --count: 6;
  }
}

@media all and (min-width: 768px) {
  .grid__column--1-6 {
    --width: 1;
    --count: 6;
  }
}

@media all and (min-width: 480px) {
  .grid__column--2-6 {
    --width: 2;
    --count: 6;
  }
}

@media all and (min-width: 480px) {
  .grid__column--3-6 {
    --width: 3;
    --count: 6;
  }
}

@media all and (min-width: 480px) {
  .grid__column--4-6 {
    --width: 4;
    --count: 6;
  }
}

@media all and (min-width: 768px) {
  .grid__column--5-6 {
    --width: 5;
    --count: 6;
  }
}
</style>
