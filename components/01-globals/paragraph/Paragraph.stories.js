import { storiesOf } from '@storybook/vue'

import AlpacaParagraph from './Paragraph.vue'

storiesOf('Global/Paragraph', module)
  .add('Default', () => ({
    components: { AlpacaParagraph },
    template: `
        <alpaca-paragraph>
          Velit proident fugiat pariatur irure sint non ut non. Adipisicing aliqua consectetur nisi aliquip velit. Nisi pariatur est consectetur culpa occaecat enim nulla laborum ex. Consectetur incididunt minim cupidatat ad aliquip. Ea non ipsum ut consequat sit adipisicing eiusmod do. Officia incididunt cillum incididunt aliquip sit labore laboris do cillum commodo occaecat voluptate ea aliqua.
        </alpaca-paragraph>
    `
  }))
  .add('Custom tag', () => ({
    components: { AlpacaParagraph },
    template: `
        <alpaca-paragraph tag="div">
          Ullamco pariatur incididunt anim in aliqua aute magna occaecat elit sit id aliqua. Cupidatat aliqua cillum magna cupidatat laborum. Non eiusmod sint commodo labore non nisi tempor. Fugiat consectetur enim quis magna ea. Esse eiusmod in culpa occaecat minim eu. Tempor quis fugiat aliqua incididunt cillum in velit pariatur labore enim. Do ea magna quis velit et amet officia.
        </alpaca-paragraph>
    `
  }))
