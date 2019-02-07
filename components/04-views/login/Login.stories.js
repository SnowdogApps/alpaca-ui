import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import App from '../../01-globals/app/App.vue'
import AlpacaLogin from './Login.vue'

storiesOf('Views/Login', module).add('Default', () => ({
  components: { App, AlpacaLogin },
  template: `
    <app>
      <alpaca-login
        mainHeading="Customer login"
        formHeading="Registered Customer"
        linkHeading="New Customer"
        linkCompanyHeading="New Company Account"
        signInInfo="If you have an account, sign in with your email address."
        legend=""
        validationTips="* Required Fields"
        forgetPasswordText="Forgot your password?"
        forgetPasswordLink="#"
        createAccountInfo="Creating an account has many benefits: check out faster, keep more than one address, track orders and more."
        createCompanyAccountInfo="If you represent a company, you will want to use our company account area. Creating a company account provides all company members with access to B2B features like quoting, company users management, quick order, and more."
        @login="exampleMethod"
        @createAccount="exampleMethod"
        @createCompanyAccount="exampleMethod"
      />
    </app>
  `,
  methods: {
    exampleMethod: action('Clicked button')
  }
}))
