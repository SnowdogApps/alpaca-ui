import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { number, text } from '@storybook/addon-knobs'

import ARating from './Rating.vue'

storiesOf('Molecules/Rating', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { ARating },
    methods: {
      select: action('Selected')
    },
    props: {
      activeColor: {
        default: text('Active color', 'orange')
      },
      uncheckedColor: {
        default: text('Unchecked color', 'lightgray')
      },
      activeIcon: {
        default: text('Active icon', 'star')
      },
      uncheckedIcon: {
        default: text('Unchecked icon', 'star-border')
      },
      numberOfRatingKnob: {
        default: number('Number of rating', 5)
      }
    },
    template: `
      <a-rating
        :items="numberOfRatingKnob"
        :active-icon="activeIcon"
        :unchecked-icon="uncheckedIcon"
        :active-color="activeColor"
        :uncheckedColor="uncheckedColor"
        @select="select"
      />
    `
  }))
  .add('Read only', () => ({
    components: { ARating },
    template: `
      <a-rating
        :items="6"
        active-color="green"
        unchecked-icon="star-border"
        :average="3.6"
      />
    `
  }))
  .add('With slot', () => ({
    components: { ARating },
    methods: {
      click: action('Clicked')
    },
    template: `
      <a-rating
        :items="3"
      >
        <template #item="data">
          <button
            style="background: none;"
            @click="click(data.item)"
          >
            {{ data.item.val }}
          </button>
        </template>
      </a-rating>
    `
  }))
