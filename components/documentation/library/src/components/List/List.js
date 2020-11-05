/* eslint react/prop-types: 0 */
import React from 'react'
import cx from 'classnames'

import Base from '../Base.core'

import './List.scss'

/**
 * The HTML `ol` element represents an ordered list of items — typically rendered as a numbered list.
 */
const UnorderedList = ({children, className, elementType = 'ul', ...props}) => (
  <Base
    {...props}
    elementType={elementType}
    className={cx('sui-studio-doc-unordered-list', className)}
  >
    {children}
  </Base>
)
UnorderedList.displayName = 'UnorderedList'

/**
 * The HTML `ul` element represents an unordered list of items, typically rendered as a bulleted list.
 */
const OrderedList = ({children, className, elementType = 'ol', ...props}) => (
  <Base
    {...props}
    elementType={elementType}
    className={cx('sui-studio-doc-ordered-list', className)}
  >
    {children}
  </Base>
)
OrderedList.displayName = 'OrderedList'

/**
 * The HTML `li` element is used to represent an item in a list.
 */
const ListItem = ({children, className, elementType = 'li', ...props}) => (
  <Base
    {...props}
    elementType={elementType}
    className={cx('sui-studio-doc-list-item', className)}
  >
    {children}
  </Base>
)
ListItem.displayName = 'ListItem'

export {UnorderedList, OrderedList, ListItem}
