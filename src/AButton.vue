<script lang="ts">
export const variants = [
  'primary',
  'secondary',
  'tertiary',
  'transparent',
] as const
</script>

<script setup lang="ts">
type ButtonType = 'button' | 'submit' | 'reset'

type ButtonProps = {
  variant: typeof variants[number]
  tag: 'button' | 'a'
  type?: ButtonType
  disabled?: boolean
}

withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  tag: 'button',
  type: 'button',
  disabled: undefined,
})
</script>

<template>
  <component
    :is="tag"
    :type="tag === 'button' ? type : undefined"
    :disabled="disabled"
    class="inline-flex h-12 items-center justify-center px-6 font-bold uppercase transition-colors duration-200 ease-in focus:outline-focus"
    :class="[
      variant === 'primary' &&
        'bg-coral-300 hover:bg-coral-400 hover:text-white',
      variant === 'secondary' &&
        'border border-dark hover:bg-dark hover:text-white',
      variant === 'tertiary' && 'border border-coral-300 hover:bg-coral-300',
      variant === 'transparent' && 'hover:bg-gray-100',
      disabled &&
        'cursor-not-allowed border-0 bg-gray-100 hover:bg-gray-100 hover:text-gray-500',
    ]"
  >
    <slot />
  </component>
</template>
