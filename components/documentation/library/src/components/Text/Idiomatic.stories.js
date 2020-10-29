import React from 'react'

import {Idiomatic as IdiomaticText, TEXT_ELEMENT} from './Text'

export default {
  title: 'Components/Text/Idiomatic',
  component: IdiomaticText,
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

export const Default = props => <IdiomaticText {...props} />

Default.title = 'Components/Text/Idiomatic'

Default.args = {
  children: 'Idiomatic',
  elementType: TEXT_ELEMENT.i.elementType
}
