/* eslint react/prop-types: 0 */
import React from 'react'

import Label from './Label'

export default {
  title: 'Components/Label/Label',
  component: Label,
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

const Template = props => <Label {...props} />

export const Default = Template.bind({})

Default.args = {
  children: 'Label'
}
