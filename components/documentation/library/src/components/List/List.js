/* eslint react/prop-types: 0 */
import React, {forwardRef} from 'react'
import cx from 'classnames'

import Base from '../Base.core'

import './List.scss'
import Label from '../Label/Label'

/**
 * The HTML `ol` element represents an ordered list of items — typically rendered as a numbered list.
 */
const UnorderedList = forwardRef(
  ({children, className, elementType = 'ul', ...props}, forwardedRef) => (
    <Base
      {...props}
      elementType={elementType}
      className={cx('sui-studio-doc-unordered-list', className)}
      ref={forwardedRef}
    >
      {children}
    </Base>
  )
)
UnorderedList.displayName = 'UnorderedList'
UnorderedList.propTypes = {}
UnorderedList.defaultProps = {}

/**
 * The HTML `ul` element represents an unordered list of items, typically rendered as a bulleted list.
 */
const OrderedList = forwardRef(
  ({children, className, elementType = 'ol', ...props}, forwardedRef) => (
    <Base
      {...props}
      elementType={elementType}
      className={cx('sui-studio-doc-ordered-list', className)}
      ref={forwardedRef}
    >
      {children}
    </Base>
  )
)
OrderedList.displayName = 'OrderedList'
OrderedList.propTypes = {}
OrderedList.defaultProps = {}

/**
 * The HTML `li` element is used to represent an item in a list.
 */
const ListItem = forwardRef(
  ({children, className, elementType = 'li', ...props}, forwardedRef) => (
    <Base
      {...props}
      elementType={elementType}
      className={cx('sui-studio-doc-list-item', className)}
      ref={forwardedRef}
    >
      {children}
    </Base>
  )
)
ListItem.displayName = 'ListItem'
ListItem.propTypes = {}
ListItem.defaultProps = {}

export {UnorderedList, OrderedList, ListItem}
