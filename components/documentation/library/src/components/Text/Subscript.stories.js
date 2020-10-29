import React from 'react'

import {Subscript as SubscriptText, TEXT_ELEMENT} from './Text'

export default {
  title: 'Components/Text/Subscript',
  component: SubscriptText,
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

export const Default = props => <SubscriptText {...props} />

Default.title = 'Components/Text/Subscript'

Default.args = {
  children: 'Subscript',
  elementType: TEXT_ELEMENT.sub.elementType
}
