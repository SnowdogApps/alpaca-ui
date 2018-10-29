<script>
export default {
  props: {
    level: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      default: null
    },
    page: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    levelClassName() {
      switch (this.level) {
        case '1':
          return 'first'
        case '2':
          return 'second'
        case '3':
          return 'third'
        case '4':
          return 'fourth'
        case '5':
          return 'fifth'
        case '6':
          return 'sixth'
      }
    }
  },
  render: function(createElement) {
    return createElement(
      this.tag ? this.tag : 'h' + this.level,
      {
        class: [
          this.tag ? `heading heading--${this.levelClassName}-level` : '',
          this.page ? 'heading--page' : ''
        ]
      },
      this.$slots.default
    )
  }
}
</script>

<style lang="scss">
:root {
  --headings-margin: 0 0 0.5em 0;
  --headings-margin--page: var(--spacer--medium) 0;

  --headings-font-family: var(--font-family-base);
  --headings-font-weight: 700;
  --headings-line-height: var(--font-line-height);
  --headings-color: var(--color-secondary);

  --headings-text-transform: none;
  --headings-text-transform--page: uppercase;

  --heading-font-size--page: 24px;
  --heading-font-size--first-level: 18px;
  --heading-font-size--second-level: 18px;
  --heading-font-size--third-level: 14px;
  --heading-font-size--fourth-level: 14px;
  --heading-font-size--fifth-level: 12px;
  --heading-font-size--sixth-level: 12px;
}

h1,
h2,
h3,
h4,
h5,
h6,
.heading {
  margin: var(--headings-margin);
  font-family: var(--headings-font-family);
  font-weight: var(--headings-font-weight);
  line-height: var(--headings-line-height);
  color: var(--headings-color);
  text-transform: var(--headings-text-transform);
}

h1,
.heading--first-level {
  font-size: var(--heading-font-size--first-level);
}

h2,
.heading--second-level {
  font-size: var(--heading-font-size--second-level);
}

h3,
.heading--third-level {
  font-size: var(--heading-font-size--third-level);
}

h4,
.heading--fourth-level {
  font-size: var(--heading-font-size--fourth-level);
}

h5,
.heading--fifth-level {
  font-size: var(--heading-font-size--fifth-level);
}

h6,
.heading--sixth-level {
  font-size: var(--heading-font-size--sixth-level);
}

.heading--page {
  margin: var(--headings-margin--page);
  font-size: var(--heading-font-size--page);
  text-transform: var(--headings-text-transform--page);
}
</style>
