import React from 'react'

import {Deleted as DeletedText, TEXT_ELEMENT} from './Text'

export default {
  title: 'Components/Text/Deleted',
  component: DeletedText,
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

export const Default = props => <DeletedText {...props} />

Default.title = 'Components/Text/Deleted'

Default.args = {
  children: 'Deleted',
  elementType: TEXT_ELEMENT.del.elementType
}
