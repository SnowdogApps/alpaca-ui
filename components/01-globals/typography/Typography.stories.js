import { storiesOf } from '@storybook/vue'

import App from '../app/App.vue'
import AlpacaHeading from './Heading.vue'
import AlpacaLabel from './Label.vue'
import AlpacaLink from './Link.vue'
import AlpacaParagraph from './Paragraph.vue'

storiesOf('Global/Typography', module)
  .add('Heading', () => ({
    components: { App, AlpacaHeading },
    template: `
      <app>
        <alpaca-heading level="1">H1</alpaca-heading>
        <alpaca-heading level="4" tag="span">Span level 4</alpaca-heading>
        <alpaca-heading level="6" :page="true">Page level 6</alpaca-heading>
      </app>
    `,
  }))
  .add('Label', () => ({
    components: { App, AlpacaLabel },
    template: `
      <app>
        <alpaca-label>Test</alpaca-label>
        <alpaca-label :inline="true">Test</alpaca-label>
        <alpaca-label :hidden="true">Test</alpaca-label>
        <alpaca-label tag="span">Test</alpaca-label>
      </app>
    `,
  }))
  .add('Link', () => ({
    components: { App, AlpacaLink },
    template: `
      <app>
        <alpaca-link href="http://google.com/">Test</alpaca-link>
        <alpaca-link href="http://google.com/" :invert="true">Test</alpaca-link>
        <alpaca-link href="http://google.com/" :secondary="true">Test</alpaca-link>
        <alpaca-link tag="span">Test</alpaca-link>
      </app>
    `,
  }))
  .add('Paragraph', () => ({
    components: { App, AlpacaParagraph },
    template: `
      <app>
        <alpaca-paragraph>Test</alpaca-paragraph>
        <alpaca-paragraph tag="div">Test</alpaca-paragraph>
      </app>
    `,
  }))
