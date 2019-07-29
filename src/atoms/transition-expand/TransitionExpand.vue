<script>
export default {
  name: 'TransitionExpand',
  functional: true,
  render (createElement, context) {
    const data = {
      props: {
        name: 'expand'
      },
      on: {
        afterEnter (element) {
          element.style.height = 'auto'
        },
        enter (element) {
          element.style.width = `${element.offsetWidth}px`
          element.style.position = 'absolute'
          element.style.visibility = 'hidden'
          element.style.height = 'auto'

          const { height } = getComputedStyle(element)
          element.style.width = null
          element.style.position = null
          element.style.visibility = null
          element.style.height = 0

          // eslint-disable-next-line no-unused-expressions
          getComputedStyle(element).height
          setTimeout(() => {
            element.style.height = height
          })
        },
        leave (element) {
          element.style.height = `${element.scrollHeight}px`
          // eslint-disable-next-line no-unused-expressions
          getComputedStyle(element).height
          setTimeout(() => {
            element.style.height = 0
          })
        }
      }
    }
    return createElement('transition', data, context.children)
  }
}
</script>

<style scoped>
* {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 600px;
  will-change: height;
}
</style>

<style>
.expand-enter-active,
.expand-leave-active {
  overflow: hidden;
  transition: height 400ms ease-in-out;
}

.expand-enter,
.expand-leave-to {
  height: 0;
}
</style>
