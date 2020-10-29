import React from 'react'

import {Bold as BoldText, TEXT_ELEMENT} from './Text'

export default {
  title: 'Components/Text/Bold',
  component: BoldText,
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

export const Default = props => <BoldText {...props} />

Default.title = 'Components/Text/Bold'

Default.args = {
  children: 'Bold',
  elementType: TEXT_ELEMENT.b.elementType
}
