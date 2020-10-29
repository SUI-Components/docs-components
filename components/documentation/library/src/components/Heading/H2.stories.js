/* eslint react/prop-types: 0 */
import React from 'react'

import {H2} from './Heading'

export default {
  title: 'Components/Heading/H2',
  component: H2,
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

const Template = props => <H2 {...props} />

export const Default = Template.bind({})

Default.args = {
  children: 'H2'
}
