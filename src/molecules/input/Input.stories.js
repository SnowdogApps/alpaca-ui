import AInput from './Input.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import AIconPerson from '../../atoms/icon/templates/IconPerson.vue'

export default {
  title: 'Molecules/Input',
  component: AInput,
  argTypes: {
    type: {
      control: {
        type: 'text'
      }
    },
    placeholder: {
      control: {
        type: 'text'
      }
    },
    label: {
      control: {
        type: 'text'
      }
    }
  }
}

const args = {
  type: 'text',
  placeholder: 'Placeholder text...',
  label: 'Label text'
}

const Template = (args, { argTypes }) => ({
  components: { AInput },
  props: Object.keys(argTypes),
  data: () => {
    return {
      inputValue: ''
    }
  },
  template: `
    <div>
      <a-input
        v-model="inputValue"
        id="input-id"
        :type="type"
        :placeholder="placeholder"
        :label="label"
        :variant="variant"
      />
    </div>
  `
})

export const Default = Template.bind({})

export const Inline = Template.bind({})

export const WithSlots = (args, { argTypes }) => ({
  components: { AInput, AIcon, AIconPerson },
  props: Object.keys(argTypes),
  data: () => {
    return {
      inputValue: '',
      iconStyles: {
        top: '29px',
        right: '8px',
        cursor: 'pointer'
      }
    }
  },
  template: `
    <div>
      <a-input
        v-model="inputValue"
        :label="label"
        :type="type"
        :placeholder="placeholder"
        id="input-id-slit"
      >
        <template #icon>
          <div
            style="top: 25px;"
            class="h-12 w-12 absolute flex items-center justify-center top-0 right-0"
          >
            <a-icon
              title="Person icon"
              @click.native="click"
            >
              <a-icon-person />
            </a-icon>
          </div>
        </template>
      </a-input>
    </div>
  `
})

Default.args = args
Inline.args = {
  ...args,
  variant: ['primary', 'inline']
}
WithSlots.args = args
