/* eslint react/prop-types: 0 */
import React from 'react'
import cx from 'classnames'

import Base from '../Base.core'

export const TEXT_ELEMENT = {
  b: {
    elementType: 'b',
    className: cn => cx('sui-studio-doc-text', 'sui-studio-doc-text-bold', cn)
  },
  strong: {
    elementType: 'strong',
    className: cn => cx('sui-studio-doc-text', 'sui-studio-doc-text-strong', cn)
  },
  i: {
    elementType: 'i',
    className: cn => cx('sui-studio-doc-text', 'sui-studio-doc-text-italic', cn)
  },
  em: {
    elementType: 'em',
    className: cn =>
      cx('sui-studio-doc-text', 'sui-studio-doc-text-emphasized', cn)
  },
  mark: {
    elementType: 'mark',
    className: cn => cx('sui-studio-doc-text', 'sui-studio-doc-text-marked', cn)
  },
  small: {
    elementType: 'small',
    className: cn => cx('sui-studio-doc-text', 'sui-studio-doc-text-small', cn)
  },
  del: {
    elementType: 'del',
    className: cn =>
      cx('sui-studio-doc-text', 'sui-studio-doc-text-deleted', cn)
  },
  ins: {
    elementType: 'ins',
    className: cn =>
      cx('sui-studio-doc-text', 'sui-studio-doc-text-inserted', cn)
  },
  sub: {
    elementType: 'sub',
    className: cn =>
      cx('sui-studio-doc-text', 'sui-studio-doc-text-subscript', cn)
  },
  sup: {
    elementType: 'sup',
    className: cn =>
      cx('sui-studio-doc-text', 'sui-studio-doc-text-superscript', cn)
  }
}

/**
 * Simple plain text styled
 */
const Text = ({elementType = 'span', children, ...props}) => (
  <Base {...props} elementType={elementType}>
    {children}
  </Base>
)

Text.displayName = 'Text'
Text.propTypes = {}
Text.defaultProps = {}

/**
 * The HTML Bring Attention To element (`b`) is used to draw the reader's attention to the element's contents, which are not otherwise granted special importance.
 */
const Bold = ({
  children,
  className,
  elementType = TEXT_ELEMENT.b.elementType,
  ...props
}) => (
  <Text
    {...props}
    className={TEXT_ELEMENT.b.className(className)}
    elementType={elementType}
  >
    {children}
  </Text>
)
Bold.displayName = 'Bold'
Bold.propTypes = {}
Bold.defaultProps = {}

/**
 * The HTML Strong Importance Element (`strong`) indicates that its contents have strong importance, seriousness, or urgency. Browsers typically render the contents in bold type.
 */
const Strong = ({
  children,
  className,
  elementType = TEXT_ELEMENT.strong.elementType,
  ...props
}) => (
  <Text
    {...props}
    className={TEXT_ELEMENT.strong.className(className)}
    elementType={elementType}
  >
    {children}
  </Text>
)
Strong.displayName = 'Strong'
Strong.propTypes = {}
Strong.defaultProps = {}

/**
 * The HTML Idiomatic Text element (`i`) represents a range of text that is set off from the normal text for some reason, such as idiomatic text, technical terms, taxonomical designations, among others.
 */
const Idiomatic = ({
  children,
  className,
  elementType = TEXT_ELEMENT.i.elementType,
  ...props
}) => (
  <Text
    {...props}
    elementType={elementType}
    className={TEXT_ELEMENT.i.className(className)}
  >
    {children}
  </Text>
)
Idiomatic.displayName = 'Idiomatic'
Idiomatic.propTypes = {}
Idiomatic.defaultProps = {}

/**
 * The HTML `em` element marks text that has stress emphasis. The <em> element can be nested, with each level of nesting indicating a greater degree of emphasis.
 */
const Emphasis = ({
  children,
  className,
  elementType = TEXT_ELEMENT.em.elementType,
  ...props
}) => (
  <Text
    {...props}
    elementType={elementType}
    className={TEXT_ELEMENT.em.className(className)}
  >
    {children}
  </Text>
)
Emphasis.displayName = 'Emphasis'
Emphasis.propTypes = {}
Emphasis.defaultProps = {}

/**
 * The HTML Mark Text element (`mark`) represents text which is marked or highlighted for reference or notation purposes, due to the marked passage's relevance or importance in the enclosing context.
 */
const Mark = ({
  children,
  className,
  elementType = TEXT_ELEMENT.mark.elementType,
  ...props
}) => (
  <Text
    {...props}
    elementType={elementType}
    className={TEXT_ELEMENT.mark.className(className)}
  >
    {children}
  </Text>
)
Mark.displayName = 'Mark'
Mark.propTypes = {}
Mark.defaultProps = {}

/**
 * The HTML `small element represents side-comments and small print, like copyright and legal text, independent of its styled presentation. By default, it renders text within it one font-size smaller, such as from small to x-small
 */
const Small = ({
  children,
  className,
  elementType = TEXT_ELEMENT.small.elementType,
  ...props
}) => (
  <Text
    {...props}
    elementType={elementType}
    className={TEXT_ELEMENT.small.className(className)}
  >
    {children}
  </Text>
)
Small.displayName = 'Small'
Small.propTypes = {}
Small.defaultProps = {}

/**
 * 	The HTML `del` element represents a range of text that has been deleted from a document.
 */
const Deleted = ({
  children,
  className,
  elementType = TEXT_ELEMENT.del.elementType,
  ...props
}) => (
  <Text
    {...props}
    elementType={elementType}
    className={TEXT_ELEMENT.del.className(className)}
  >
    {children}
  </Text>
)
Deleted.displayName = 'Deleted'
Deleted.propTypes = {}
Deleted.defaultProps = {}

/**
 * 	The HTML `ins` element represents a range of text that has been added to a document.
 */
const Inserted = ({
  children,
  className,
  elementType = TEXT_ELEMENT.ins.elementType,
  ...props
}) => (
  <Text
    {...props}
    elementType={elementType}
    className={TEXT_ELEMENT.ins.className(className)}
  >
    {children}
  </Text>
)
Inserted.displayName = 'Inserted'
Inserted.propTypes = {}
Inserted.defaultProps = {}

/**
 * The HTML Subscript element (`sub`) specifies inline text which should be displayed as subscript for solely typographical reasons.
 */
const Subscript = ({
  children,
  className,
  elementType = TEXT_ELEMENT.sub.elementType,
  ...props
}) => (
  <Text
    {...props}
    elementType={elementType}
    className={TEXT_ELEMENT.sub.className(className)}
  >
    {children}
  </Text>
)
Subscript.displayName = 'Subscript'
Subscript.propTypes = {}
Subscript.defaultProps = {}

/**
 * The HTML Superscript element (`sup`) specifies inline text which is to be displayed as superscript for solely typographical reasons.
 */
const Superscript = ({
  children,
  className,
  elementType = TEXT_ELEMENT.sup.elementType,
  ...props
}) => (
  <Text
    {...props}
    elementType={elementType}
    className={TEXT_ELEMENT.sup.className(className)}
  >
    {children}
  </Text>
)
Superscript.displayName = 'Superscript'
Superscript.propTypes = {}
Superscript.defaultProps = {}

export default Text

export {
  Text,
  Bold,
  Strong,
  Idiomatic,
  Emphasis,
  Mark,
  Small,
  Deleted,
  Inserted,
  Subscript,
  Superscript
}
