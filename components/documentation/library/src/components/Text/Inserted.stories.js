import React from 'react'

import {Inserted as InsertedText, TEXT_ELEMENT} from './Text'

export default {
  title: 'Components/Text/Inserted',
  component: InsertedText,
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

export const Default = props => <InsertedText {...props} />

Default.title = 'Components/Text/Inserted'

Default.args = {
  children: 'Inserted',
  elementType: TEXT_ELEMENT.ins.elementType
}
