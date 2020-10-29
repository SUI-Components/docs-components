import React from 'react'

import {Small as SmallText, TEXT_ELEMENT} from './Text'

export default {
  title: 'Components/Text/Small',
  component: SmallText,
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

export const Default = props => <SmallText {...props} />

Default.title = 'Components/Text/Small'

Default.args = {
  children: 'Small',
  elementType: TEXT_ELEMENT.small.elementType
}
