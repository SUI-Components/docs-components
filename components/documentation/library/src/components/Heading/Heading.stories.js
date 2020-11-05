/* eslint react/prop-types: 0 */
import React from 'react'

import Heading from './Heading'

export default {
  title: 'Components/Heading/Heading',
  component: Heading,
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

const Template = props => <Heading {...props} />

export const Default = Template.bind({})

Default.args = {
  children: 'Heading',
  elementType: 'h1'
}
