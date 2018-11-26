import { storiesOf } from '@storybook/vue'
import App from '../../01-globals/app/App.vue'
import AlpacaList from './List.vue'
import AlpacaImageList from './ImageList.vue'
import AlpacaDescriptionList from './DescriptionList.vue'

storiesOf('Elements/List', module)
  .add('Default', () => ({
    components: { App, AlpacaList },
    template: `
      <app>
        <alpaca-list
          :elements="[
            {
              text: 'Lorem Ipsum'
            },
            {
              text: 'Lorem Ipsum'
            },
            {
              text: 'Lorem Ipsum'
            }
          ]"
        />
      </app>
    `
  }))
  .add('Native', () => ({
    components: { App, AlpacaList },
    template: `
      <app>
        <alpaca-list
          :listClass="'list--native'"
          :elements="[
            {
              text: 'Lorem Ipsum'
            },
            {
              text: 'Lorem Ipsum'
            },
            {
              text: 'Lorem Ipsum'
            }
          ]"
        />
      </app>
    `
  }))
  .add('Horizontal', () => ({
    components: { App, AlpacaList },
    template: `
      <app>
        <alpaca-list
          :listClass="'list--horizontal'"
          :elements="[
            {
              text: 'Lorem Ipsum'
            },
            {
              text: 'Lorem Ipsum'
            },
            {
              text: 'Lorem Ipsum'
            }
          ]"
        />
      </app>
    `
  }))
  .add('Horizontal Medium', () => ({
    components: { App, AlpacaList },
    template: `
      <app>
        <alpaca-list
          :listClass="'list--horizontal@medium'"
          :elements="[
            {
              text: 'Lorem Ipsum'
            },
            {
              text: 'Lorem Ipsum'
            },
            {
              text: 'Lorem Ipsum'
            }
          ]"
        />
      </app>
    `
  }))
  .add('Icon', () => ({
    components: { App, AlpacaList },
    template: `
      <app>
        <alpaca-list
          :listClass="'list--with-icon'"
          :elements="[
            {
              icon: {
                iconId: 'facebook'
              },
              linkHref: '#',
              wrapperClass: 'list__icon-link'
            },
            {
              icon: {
                iconId: 'twitter'
              },
              linkHref: '#',
              wrapperClass: 'list__icon-link'
            },
            {
              icon: {
                iconId: 'linkedin'
              },
              linkHref: '#',
              wrapperClass: 'list__icon-link'
            }
          ]"
        />
      </app>
    `
  }))
  .add('Image', () => ({
    components: { App, AlpacaImageList },
    template: `
      <app>
        <alpaca-image-list
          :listClass="'list--with-image'"
          :elements="[
            {
              image: {
                src: 'https://via.placeholder.com/16',
                alt: 'Sample image'
              },
              text: 'Lorem Ipsum'
            },
            {
              image: {
                src: 'https://via.placeholder.com/16',
                alt: 'Sample image'
              },
              text: 'Lorem Ipsum'
            },
            {
              image: {
                src: 'https://via.placeholder.com/16',
                alt: 'Sample image'
              },
              text: 'Lorem Ipsum'
            }
          ]"
        />
      </app>
    `
  }))
  .add('Divided', () => ({
    components: { App, AlpacaList },
    template: `
      <app>
        <alpaca-list
          :listClass="'list--divided'"
          :elements="[
            {
              text: 'Lorem Ipsum'
            },
            {
              text: 'Lorem Ipsum'
            },
            {
              text: 'Lorem Ipsum'
            }
          ]"
        />
      </app>
    `
  }))
  .add('Center', () => ({
    components: { App, AlpacaList },
    template: `
      <app>
        <alpaca-list
          :listClass="'list--center'"
          :elements="[
            {
              text: 'Lorem Ipsum'
            },
            {
              text: 'Lorem Ipsum'
            },
            {
              text: 'Lorem Ipsum'
            }
          ]"
        />
      </app>
    `
  }))
  .add('Center Horizontal', () => ({
    components: { App, AlpacaList },
    template: `
      <app>
        <alpaca-list
          :listClass="'list--center list--horizontal'"
          :elements="[
            {
              text: 'Lorem Ipsum'
            },
            {
              text: 'Lorem Ipsum'
            },
            {
              text: 'Lorem Ipsum'
            }
          ]"
        />
      </app>
    `
  }))
  .add('Divided Horizontal', () => ({
    components: { App, AlpacaList },
    template: `
      <app>
        <alpaca-list
          :listClass="'list--divided list--horizontal'"
          :elements="[
            {
              text: 'Lorem Ipsum'
            },
            {
              text: 'Lorem Ipsum'
            },
            {
              text: 'Lorem Ipsum'
            }
          ]"
        />
      </app>
    `
  }))
  .add('Divided Horizontal Medium', () => ({
    components: { App, AlpacaList },
    template: `
      <app>
        <alpaca-list
          :listClass="'list--divided list--horizontal@medium'"
          :elements="[
            {
              text: 'Lorem Ipsum'
            },
            {
              text: 'Lorem Ipsum'
            },
            {
              text: 'Lorem Ipsum'
            }
          ]"
        />
      </app>
    `
  }))
  .add('Description', () => ({
    components: { App, AlpacaDescriptionList },
    template: `
      <app>
        <alpaca-description-list
          :listClass="'list--divided'"
          :title="'Alpaca description List'"
          :elements="[
            {
              label: 'Lorem',
              value: 'ipsum'
            },
            {
              label: 'Lorem',
              value: 'ipsum'
            },
            {
              label: 'Lorem',
              value: 'ipsum'
            }
          ]"
        />
      </app>
    `
  }))
  .add('Link', () => ({
    components: { App, AlpacaList },
    template: `
      <app>
        <alpaca-list 
          :elementType="'link'"
          :elements="[
            {
              text: 'Lorem Ipsum',
              linkHref: '#'
            },
            {
              text: 'Lorem Ipsum',
              linkHref: '#'
            },
            {
              text: 'Lorem Ipsum',
              linkHref: '#'
            }
          ]"
        />
      </app>
    `
  }))
