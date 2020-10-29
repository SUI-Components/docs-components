/* eslint react/prop-types: 0 */
import React from 'react'

import Anchor from './Anchor'

export default {
  title: 'Components/Anchor/Anchor',
  component: Anchor,
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

const Template = props => <Anchor {...props} />

export const Default = Template.bind({})

Default.args = {
  children: 'anchor',
  href: 'http://www.google.com'
}
