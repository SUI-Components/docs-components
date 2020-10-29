import React from 'react'

import {Strong as StrongText, TEXT_ELEMENT} from './Text'

export default {
  title: 'Components/Text/Strong',
  component: StrongText,
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

export const Default = props => <StrongText {...props} />

Default.title = 'Components/Text/Strong'

Default.args = {
  children: 'Strong',
  elementType: TEXT_ELEMENT.strong.elementType
}
