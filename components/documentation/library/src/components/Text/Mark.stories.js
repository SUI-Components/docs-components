import React from 'react'

import {Mark as MarkText, TEXT_ELEMENT} from './Text'

export default {
  title: 'Components/Text/Mark',
  component: MarkText,
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

export const Default = props => <MarkText {...props} />

Default.title = 'Components/Text/Mark'

Default.args = {
  children: 'Mark',
  elementType: TEXT_ELEMENT.mark.elementType
}
