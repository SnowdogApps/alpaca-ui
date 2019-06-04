import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { number, text, color } from '@storybook/addon-knobs'

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
        default: color('Active color', '#fab216')
      },
      uncheckedColor: {
        default: color('Unchecked color', '#c9c9c9')
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
        :unchecked-color="uncheckedColor"
        @select="select"
      />
    `
  }))
  .add('Read only', () => ({
    components: { ARating },
    props: {
      uncheckedColor: {
        default: color('Unchecked color', '#c9c9c9')
      },
      activeColor: {
        default: color('Active icon', '#d42343')
      },
      uncheckedIcon: {
        default: text('Unchecked icon', 'star-border')
      },
      average: {
        default: number('Average', 3.4)
      },
      numberOfRatingKnob: {
        default: number('Number of rating', 6)
      }
    },
    template: `
      <a-rating
        :items="numberOfRatingKnob"
        :unchecked-color="uncheckedColor"
        :active-color="activeColor"
        :unchecked-icon="uncheckedIcon"
        :average="average"
      />
    `
  }))
  .add('With slot', () => ({
    components: { ARating },
    methods: {
      click: action('Clicked')
    },
    template: `
      <a-rating :items="3">
        <template #item="data">
          <svg
            @click="click(data.item)"
            class="icon"
            role="img"
            :style="[(data.item.isActive || data.item.selected) && {fill: 'red'}, {width: '24px', height: '24px'}]"
          >
            <title>heart</title>
            <use xlink:href="/assets/icons/sprite.svg#heart" />
          </svg>
        </template>
      </a-rating>
    `
  }))
