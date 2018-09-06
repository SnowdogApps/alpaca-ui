import { storiesOf } from '@storybook/vue';
import { linkTo } from '@storybook/addon-links';

import MyWelcome from '../components/MyWelcome';

storiesOf('MyWelcome', module).add('to Storybook', () => ({
  components: { MyWelcome },
  template: '<my-welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));
