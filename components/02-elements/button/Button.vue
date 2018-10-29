<script>
import Icon from '../../01-globals/icon/Icon.vue'

export default {
  props: {
    tag: {
      type: String,
      default: null
    },
    customClass: {
      type: String | Boolean,
      default: false
    },
    icon: {
      type: String | Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
    link: {
      type: Boolean,
      default: false
    },
    fluid: {
      type: Boolean,
      default: false
    }
  },
  render: function(h) {
    return h(
      this.tag ? this.tag : 'button',
      {
        class: [
          'button',
          this.customClass ? this.customClass : '',
          this.icon ? 'button--icon' : '',
          this.secondary ? 'button--secondary' : '',
          this.link ? 'button--link' : '',
          this.fluid ? 'button--fluid' : ''
        ]
      },
      [
        this.$slots.default,
        this.icon
          ? h(Icon, {
              props: {
                icon: this.icon,
                customClass: 'button__icon'
              }
            })
          : ''
      ]
    )
  }
}
</script>

<style lang="scss">
:root {
  --button__height: 48px;
  --button__width: 48px;
  --button__padding: 0 var(--spacer--medium);
  --button__border: none;
  --button__border-radius: 100px;
  --button__border-hover: none;
  --button__background: var(--color-primary);
  --button__background-hover: var(--gray-dark);
  --button__outline: none;
  --button__font-family: var(--font-family-base);
  --button__font-weight: var(--font-weight-bold);
  --button__font-size: var(--font-size-base);
  --button__font-color: var(--black);
  --button__font-color-hover: var(--color-primary);
  --button__transition: var(--transition-base);
  --button__border--secondary: 2px solid var(--color-primary);
  --button__border-hover--secondary: var(--color-primary);
  --button__background--secondary: var(--white);
  --button__background-hover--secondary: var(--color-primary);
  --button__font-color--secondary: var(--gray-darker);
  --button__font-color-hover--secondary: var(--gray-dark);
  --button__padding--icon: 0;
  --button__size--icon: 20px;
  --button__border-width--icon: 3px;
  --button__border--icon: var(--button__border-width--icon) solid
    var(--color-primary);
  --button__border-hover--icon: var(--gray-dark);
  --button__fill--icon: var(--white);
  --button__fill-hover--icon: var(--color-primary);
  --button__background--icon: var(--color-primary);
  --button__background-hover--icon: var(--gray-dark);
  --button__width--fluid: 100%;
}

.button {
  display: inline-flex;
  justify-content: center;
  cursor: pointer;
  height: var(--button__height);
  min-width: var(--button__width);
  padding: var(--button__padding);
  border: var(--button__border);
  border-radius: var(--button__border-radius);
  outline: var(--button__outline);
  background: var(--button__background);
  font-family: var(--button__font-family);
  font-size: var(--button__font-size);
  color: var(--button__font-color);
  transition: var(--button__transition);
  font-weight: var(--button__font-weight);
}
.button:hover,
.button:focus {
  background: var(--button__background-hover);
  border-color: var(--button__border-hover);
  color: var(--button__font-color-hover);
}
.button--link {
  align-items: center;
  text-decoration: none;
}
.button--link:hover,
.button--link:focus {
  text-decoration: none;
  color: var(--button__font-color-hover);
}
.button--secondary {
  border: var(--button__border--secondary);
  color: var(--button__font-color--secondary);
  background: var(--button__background--secondary);
}
.button--secondary:hover,
.button--secondary:focus {
  border-color: var(--button__border-hover--secondary);
  color: var(--button__font-color-hover--secondary);
  background: var(--button__background-hover--secondary);
}
.button--icon {
  align-items: center;
  padding: var(--button__padding--icon);
  border: var(--button__border--icon);
  background: var(--button__background--icon);
}
.button--icon:hover,
.button--icon:focus {
  border-color: var(--button__border-hover--icon);
  background: var(--button__background-hover--icon);
}
.button--icon:hover .button__icon,
.button--icon:hover .icon,
.button--icon:focus .button__icon,
.button--icon:focus .icon {
  fill: var(--button__fill-hover--icon);
}
.button--fluid {
  width: var(--button__width--fluid);
}
.button__icon {
  width: var(--button__size--icon);
  height: var(--button__size--icon);
  fill: var(--button__fill--icon);
  transition: var(--button__transition);
}
</style>
