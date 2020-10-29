/* eslint react/prop-types: 0 */
import React from 'react'

import {OrderedList as OrderedListComponent, ListItem} from './List'

export default {
  title: 'Components/List/OrderedList',
  component: OrderedListComponent,
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
  <OrderedListComponent {...props}>
    <ListItem>{children}</ListItem>
    <ListItem>{children}</ListItem>
    <ListItem>{children}</ListItem>
  </OrderedListComponent>
)

Default.args = {
  children: 'OrderedList'
}
