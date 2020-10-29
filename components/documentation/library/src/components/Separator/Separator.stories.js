import React from 'react'

import Separator from './Separator'

export default {
  title: 'Components/Separator/Separator',
  component: Separator,
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

const Template = props => <Separator {...props} />

export const Default = Template.bind({})

Default.args = {}

export const Content = Template.bind({})

Content.args = {
  children: 'Separator'
}
