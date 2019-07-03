import { storiesOf } from '@storybook/vue'
import { text, select } from '@storybook/addon-knobs'

import AHeading from '../../atoms/heading/Heading.vue'
import AButton from '../../atoms/button/Button.vue'
import AIcon from '../../atoms/icon/Icon.vue'
import ADivider from '../../templates/divider/Divider.vue'
import AInput from '../../atoms/input/Input.vue'
import AInputWrapper from '../../molecules/input-wrapper/InputWrapper.vue'
import AModal from './Modal.vue'

const availableTransitions = [
  'fade',
  'slide-down',
  'slide-right',
  'slide'
]

storiesOf('Molecules/Modal', module)
  .add('Default', () => ({
    components: {
      AButton,
      AModal,
      AInput,
      AInputWrapper
    },
    props: {
      contentKnob: {
        default: text('Content', 'Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')
      },
      mainTransitionKnob: {
        default: select('Main transition', availableTransitions)
      },
      contentTransitionKnob: {
        default: select('Content transition', availableTransitions)
      }
    },
    data: () => ({ value: null }),
    methods: {
      showModal () {
        this.$refs.modalDefault.show('default')
      }
    },
    template: `
      <div>
        <a-button @click.native="showModal">
          Modal button
        </a-button>
        <a-modal
          name="default"
          ref="modalDefault"
          :modalMainTransition="mainTransitionKnob"
          :modalContentTransition="contentTransitionKnob"
        >
          <p style="margin-bottom: 8px;">{{ contentKnob }}</p>
          <a-input-wrapper
            input-id="field_id"
            class="a-input-wrapper--inline"
            label="Inline text"
          >
            <a-input
              id="field_id"
              type="text"
              v-model="value"
              placeholder="Test focus trap"
            />
          </a-input-wrapper>
         </a-modal>
      </div>
    `
  }))
  .add('With heading', () => ({
    components: {
      AButton,
      AModal,
      AInput,
      AInputWrapper
    },
    props: {
      headingKnob: {
        default: text('Modal heading', 'Modal heading')
      },
      contentKnob: {
        default: text('Content', 'Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')
      },
      mainTransitionKnob: {
        default: select('Main transition', availableTransitions)
      },
      contentTransitionKnob: {
        default: select('Content transition', availableTransitions)
      }
    },
    data: () => ({ value: null }),
    methods: {
      showModal () {
        this.$refs.modalDefault.show('default')
      }
    },
    template: `
      <div>
        <a-button @click.native="showModal">
          Modal button
        </a-button>
        <a-modal
          name="default"
          :heading="headingKnob"
          ref="modalDefault"
          :modalMainTransition="mainTransitionKnob"
          :modalContentTransition="contentTransitionKnob"
        >
          <p style="margin-bottom: 8px;">{{ contentKnob }}</p>
          <a-input-wrapper
            input-id="field_id"
            class="a-input-wrapper--inline"
            label="Inline text"
          >
            <a-input
              id="field_id"
              type="text"
              v-model="value"
              placeholder="Test focus trap"
            />
          </a-input-wrapper>
         </a-modal>
      </div>
    `
  }))
  .add('Without close icon', () => ({
    components: {
      AButton,
      AModal,
      AInput,
      AInputWrapper
    },
    props: {
      headingKnob: {
        default: text('Modal heading', 'Modal heading')
      },
      contentKnob: {
        default: text('Content', 'Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')
      },
      mainTransitionKnob: {
        default: select('Main transition', availableTransitions)
      },
      contentTransitionKnob: {
        default: select('Content transition', availableTransitions)
      }
    },
    data: () => ({ value: null }),
    methods: {
      showModal () {
        this.$refs.modalDefault.show('default')
      }
    },
    template: `
      <div>
        <a-button @click.native="showModal">
          Modal button
        </a-button>
        <a-modal
          name="default"
          :heading="headingKnob"
          :closeButton="false"
          ref="modalDefault"
          :modalMainTransition="mainTransitionKnob"
          :modalContentTransition="contentTransitionKnob"
        >
          <p style="margin-bottom: 8px;">{{ contentKnob }}</p>
          <a-input-wrapper
            input-id="field_id"
            class="a-input-wrapper--inline"
            label="Inline text"
          >
            <a-input
              id="field_id"
              type="text"
              v-model="value"
              placeholder="Test focus trap"
            />
          </a-input-wrapper>
         </a-modal>
      </div>
    `
  }))
  .add('Without header', () => ({
    components: {
      AButton,
      AModal,
      AInput,
      AInputWrapper
    },
    props: {
      contentKnob: {
        default: text('Content', 'Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')
      },
      mainTransitionKnob: {
        default: select('Main transition', availableTransitions)
      },
      contentTransitionKnob: {
        default: select('Content transition', availableTransitions)
      }
    },
    data: () => ({ value: null }),
    methods: {
      showModal () {
        this.$refs.modalDefault.show('default')
      }
    },
    template: `
      <div>
        <a-button @click.native="showModal">
          Modal button
        </a-button>
        <a-modal
          name="default"
          :closeButton="false"
          ref="modalDefault"
          :modalMainTransition="mainTransitionKnob"
          :modalContentTransition="contentTransitionKnob"
        >
          <p style="margin-bottom: 8px;">{{ contentKnob }}</p>
          <a-input-wrapper
            input-id="field_id"
            class="a-input-wrapper--inline"
            label="Inline text"
          >
            <a-input
              id="field_id"
              type="text"
              v-model="value"
              placeholder="Test focus trap"
            />
          </a-input-wrapper>
         </a-modal>
      </div>
    `
  }))
  .add('With slots', () => ({
    components: {
      AButton,
      ADivider,
      AIcon,
      AModal,
      AHeading
    },
    props: {
      headingKnob: {
        default: text('Modal heading', 'Modal heading')
      },
      contentKnob: {
        default: text('Content', 'Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')
      },
      mainTransitionKnob: {
        default: select('Main transition', availableTransitions)
      },
      contentTransitionKnob: {
        default: select('Content transition', availableTransitions)
      }
    },
    methods: {
      showModal () {
        this.$refs.modalDefault.show('default')
      }
    },
    template: `
      <div>
        <a-button @click.native="showModal">
          Modal button
        </a-button>
        <a-modal
          name="default"
          :heading="headingKnob"
          ref="modalDefault"
          :modalMainTransition="mainTransitionKnob"
          :modalContentTransition="contentTransitionKnob"
        >
          <template #heading="{ modalHeading }">
            <a-heading
              :level="1"
              class="a-modal__heading"
            >
              {{ modalHeading.toUpperCase() }}
            </a-heading>
            <a-divider
              class="a-modal__divider"
              style="background-color: #393243;"
            />
          </template>
          <template #close>
            <a-icon
              icon="minus"
              class="button__icon a-modal__close-button-icon"
              title="Close"
            />
          </template>
          <p>{{ contentKnob }}</p>
         </a-modal>
      </div>
    `
  }))
