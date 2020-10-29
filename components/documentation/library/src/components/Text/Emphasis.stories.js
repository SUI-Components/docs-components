import React from 'react'

import {Emphasis as EmphasisText, TEXT_ELEMENT} from './Text'

export default {
  title: 'Components/Text/Emphasis',
  component: EmphasisText,
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

export const Default = props => <EmphasisText {...props} />

Default.title = 'Components/Text/Emphasis'

Default.args = {
  children: 'Emphasis',
  elementType: TEXT_ELEMENT.em.elementType
}
