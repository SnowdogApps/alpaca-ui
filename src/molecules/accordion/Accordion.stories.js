import AAccordion from './Accordion.vue'

export default {
  title: 'Molecules/Accordion',
  component: AAccordion,
  args: {
    title: 'Accordion title text',
    contentText: 'Accordion content text'
  },
  argTypes: {
  }
}

const Template = (args, { argTypes }) => ({
  components: { AAccordion },
  props: Object.keys(argTypes),
  template: `
      <a-accordion :title="title">
      <div>
        {{ contentText }}
      </div>
    </a-accordion>
  `
})

export const Default = Template.bind({})

// import { storiesOf } from '@storybook/vue'
// import { text } from '@storybook/addon-knobs'

// import AAccordion from './Accordion.vue'

// storiesOf('Molecules/Accordion', module)
//   .addParameters({ info: true })
//   .add(
//     'Default',
//     () => ({
//       components: {
//         AAccordion
//       },
//       props: {
//         titleTextKnobs: {
//           default: text('Title', 'Accordion title text')
//         },
//         contentTextKnobs: {
//           default: text('Content', 'Accordion content text')
//         }
//       },
//       template: `
//         <a-accordion
//           :title="titleTextKnobs"
//           icon-title="Angle down icon"
//         >
//           <div style="padding: 16px 0;">
//             {{ contentTextKnobs }}
//           </div>
//         </a-accordion>
//       `
//     })
//   )
//   .add(
//     'With slots',
//     () => ({
//       components: {
//         AAccordion
//       },
//       template: `
//         <a-accordion>
//           <template #button="button">
//             <button
//               :aria-expanded="!button.AccordionLocal"
//               :aria-controls="button.ariaControls"
//               style="
//                 width: 100%;
//                 height: 40px;
//                 z-index: 1;
//                 position: relative;
//                 background-color: #31e37d;
//                 cursor: pointer;
//                 border-radius: 4px;
//               "
//               @click="button.toggle"
//             >
//               Text
//             </button>
//           </template>
//           <div>Content</div>
//         </a-accordion>
//       `
//     })
//   )
