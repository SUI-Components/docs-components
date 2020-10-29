/* eslint react/prop-types: 0 */
import React from 'react'

import {H3} from './Heading'

export default {
  title: 'Components/Heading/H3',
  component: H3,
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

const Template = props => <H3 {...props} />

export const Default = Template.bind({})

Default.args = {
  children: 'H3'
}
