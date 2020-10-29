/* eslint react/prop-types: 0 */
import React from 'react'

import {H1} from './Heading'

export default {
  title: 'Components/Heading/H1',
  component: H1,
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

const Template = props => <H1 {...props} />

export const Default = Template.bind({})

Default.args = {
  children: 'H1'
}
