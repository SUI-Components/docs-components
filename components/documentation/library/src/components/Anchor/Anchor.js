/* global location */
/* eslint react/prop-types: 0 */

import React, {forwardRef} from 'react'
import cx from 'classnames'

import Base from '../Base.core'

import './Anchor.scss'

export const isExternalURL = url => {
  const match = url.match(
    /^([^:/?#]+:)?(?:\/\/([^/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/
  )
  if (
    typeof match[1] === 'string' &&
    match[1].length > 0 &&
    match[1].toLowerCase() !== location.protocol
  )
    return true
  if (
    typeof match[2] === 'string' &&
    match[2].length > 0 &&
    match[2].replace(
      new RegExp(
        ':(' + {'http:': 80, 'https:': 443}[location.protocol] + ')?$'
      ),
      ''
    ) !== location.host
  )
    return true
  return false
}

/**
 * HTML `a` element DOC styled
 */
const Anchor = forwardRef(
  ({children, className, href = '#', target, ...props}, forwardedRef) => {
    const isExternalLink = isExternalURL(href)
    return (
      <Base
        ref={forwardedRef}
        elementType="a"
        className={cx('sui-studio-doc-anchor', className)}
        {...props}
        target={target || (isExternalLink ? '_blank' : undefined)}
        href={href}
      >
        {children}
      </Base>
    )
  }
)
Anchor.displayName = 'Anchor'
Anchor.propTypes = {}
Anchor.defaultProps = {}

export default Anchor

export {Anchor}
