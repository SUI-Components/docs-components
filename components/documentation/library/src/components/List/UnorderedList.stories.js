/* eslint react/prop-types: 0 */
import React from 'react'

import {UnorderedList as UnorderedListComponent, ListItem} from './List'

export default {
  title: 'Components/List/UnorderedList',
  component: UnorderedListComponent,
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

export const Default = ({children, ...props}) => (
  <UnorderedListComponent {...props}>
    <ListItem>{children}</ListItem>
    <ListItem>{children}</ListItem>
    <ListItem>{children}</ListItem>
  </UnorderedListComponent>
)

Default.args = {
  children: 'UnorderedList'
}
