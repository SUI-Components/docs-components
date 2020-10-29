import React from 'react'

import {Superscript as SuperscriptText, TEXT_ELEMENT} from './Text'

export default {
  title: 'Components/Text/Superscript',
  component: SuperscriptText,
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

export const Default = props => <SuperscriptText {...props} />

Default.title = 'Components/Text/Superscript'

Default.args = {
  children: 'Superscript',
  elementType: TEXT_ELEMENT.b.elementType
}
