import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AFooter from './Footer.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import ACheckbox from '../../molecules/checkbox/Checkbox.vue'

import listElements from './mocks/listElements.json'
import menu from './mocks/menu.json'
import newsletter from './mocks/newsletter.json'

storiesOf('Organisms/Footer', module)
  .addParameters({ info: true })
  .add('Default', () => ({
    components: { AFooter },
    data: () => ({
      listElements,
      menu,
      newsletter
    }),
    methods: {
      submit: action('Submitted')
    },
    template: `
      <a-footer
        copyright-text="Copyright © 2019 A. All rights reserved."
        :input="newsletter.input"
        :checkboxes="newsletter.checkbox"
        social-list-subtitle="Find us on"
        heading="Sing up to our twisted newsletter"
        :social-menu="listElements"
        :menu="menu"
        cookie-text="<a href='#' class='cookie-message__link'>Example link</a> Find out more about their purpose and settings in your browser. By browsing the site you are agreeing to use cookies according to your browser settings."
        @submitNewsletter="submit"
      />
    `
  }))
  .add('With slots', () => ({
    components: { AFooter, ACheckbox, AIcon },
    data: () => ({
      listElements,
      menu,
      status: true
    }),
    methods: {
      submit: action('Submitted'),
      onChange: action('Option changed')
    },
    template: `
      <a-footer :menu="menu" :social-menu="listElements">
        <template #scrollButton="{ scrollToTop }">
          <button 
            type="button"
            @click="scrollToTop"
            style="position: absolute; width: 50px; height: 50px; z-index: 2; right: 0; top: 0;"
          >
            Top
          </button>
        </template>
        <template #newsletter>
          <a-checkbox
            id="checkbox-default"
            name="checkbox-default"
            v-model="status"
            value="some value"
            @input="onChange"
          >
            <span style="color: white">I agree to <a href='#' title='Terms and conditions'>Terms and conditions</a> and I am happy to receive your newsletter with all your promotions.</span>
          </a-checkbox>
          <button type="button" @click="submit">Submit</button>
        </template>
        <template #list="data">
          <a 
            v-for="link in data.item.items" 
            :href="link.link"
            style="display: block; margin: 10px 0; color: #31e37d;"
          >
            {{ data.item.title }}
          </a>
        </template>
        <template #socialTitle>
          <span>Find us on</span>
        </template>
        <template #social="data">
          <a-icon
            style="fill: white;"
            :icon="data.item.iconId"
          />
        </template>
        <template #copyright>
          <span>Copyright © 2019 A. All rights reserved.</span>
        </template>
        <template #cookie> 
          <span style="color: white">
            <a href='#' style="color: #31e37d">Example link</a> Find out more about their purpose and settings in your browser. By browsing the site you are agreeing to use cookies according to your browser settings.
          </span>
        </template>
      </a-footer>
    `
  }))
