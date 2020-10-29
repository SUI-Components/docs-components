import React from 'react'

import Text from './Text'

export default {
  title: 'Components/Text/Text',
  component: Text,
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

const Template = props => <Text {...props} />

export const Default = Template.bind({})

Default.args = {
  children: 'Text'
}
