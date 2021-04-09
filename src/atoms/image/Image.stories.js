import AImage from './Image.vue'

export default {
  title: 'Atoms/Image',
  component: AImage,
  argTypes: {
    src: {
      control: {
        type: 'text'
      }
    },
    alt: {
      control: {
        type: 'text'
      }
    },
    variant: {
      controls: {
        type: 'text'
      }
    },
    ratioWidth: {
      controls: {
        type: 'text'
      }
    },
    ratioHeight: {
      controls: {
        type: 'text'
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { AImage },
  props: Object.keys(argTypes),
  template: `
    <a-image
      :src="src"
      :alt="alt"
      variant="variant"
      :ratioWidth="ratioWidth"
      :ratioHeight="ratioHeight"
    />
  `
})

export const Default = Template.bind({})

Default.args = {
  src: 'https://via.placeholder.com/600x800',
  alt: 'alt text goes here',
  ratioWidth: '6',
  ratioHeight: '8',
  variant: 'none'
}
