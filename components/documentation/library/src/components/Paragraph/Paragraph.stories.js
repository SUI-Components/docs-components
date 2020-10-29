import React from 'react'

import Paragraph from './Paragraph'

export default {
  title: 'Components/Paragraph/Paragraph',
  component: Paragraph,
  argTypes: {
    mode: {
      control: {
        type: 'select',
        options: {
          undefined: undefined,
          light: 'light',
          dark: 'dark'
        }
      }
    }
  }
}

const Template = props => <Paragraph {...props} />

export const Default = Template.bind({})

Default.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sem augue, blandit eget lobortis vel, porttitor eget sapien. Pellentesque lacinia sodales condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam id tempus erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed libero purus, ornare non eleifend sed, tempus vitae sem. Praesent iaculis magna augue, vitae auctor diam imperdiet non. Morbi eget fermentum purus. In et mauris vitae mi tempor hendrerit. Etiam ultricies mi in hendrerit consequat. Cras consequat non eros id varius.\n'
}
