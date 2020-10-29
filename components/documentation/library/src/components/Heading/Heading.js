/* eslint react/prop-types: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Base from '../Base.core'

export const HEADING_ELEMENT = {
  h1: {
    elementType: 'h1',
    className: (cn, mode) =>
      cx(
        'sui-studio-doc-heading',
        'sui-studio-doc-heading-h1',
        {
          [`sui-studio-doc-heading-mode-${mode}`]: mode
        },
        cn
      )
  },
  h2: {
    elementType: 'h2',
    className: (cn, mode) =>
      cx(
        'sui-studio-doc-heading',
        'sui-studio-doc-heading-h2',
        {
          [`sui-studio-doc-heading-mode-${mode}`]: mode
        },
        cn
      )
  },
  h3: {
    elementType: 'h3',
    className: (cn, mode) =>
      cx(
        'sui-studio-doc-heading',
        'sui-studio-doc-heading-h3',
        {
          [`sui-studio-doc-heading-mode-${mode}`]: mode
        },
        cn
      )
  },
  h4: {
    elementType: 'h4',
    className: (cn, mode) =>
      cx(
        'sui-studio-doc-heading',
        'sui-studio-doc-heading-h4',
        {
          [`sui-studio-doc-heading-mode-${mode}`]: mode
        },
        cn
      )
  }
}

/**
 * Create HTML tag titles.
 */
const Heading = ({elementType, children, ...props}) => (
  <Base {...props} elementType={elementType}>
    {children}
  </Base>
)

Heading.displayName = 'Heading'
Heading.propTypes = {}
Heading.defaultProps = {}

Heading.propTypes = {
  /**
   * HTML tag of the title
   **/
  elementType: PropTypes.oneOf(Object.keys(HEADING_ELEMENT)).isRequired
}

/**
 * HTML `h1` element DOC styled
 */
const H1 = ({
  children,
  className,
  elementType = HEADING_ELEMENT.h1.elementType,
  mode,
  ...props
}) => (
  <Heading
    {...props}
    className={HEADING_ELEMENT.h1.className(className, mode)}
    elementType={elementType}
    mode={mode}
  >
    {children}
  </Heading>
)
H1.displayName = 'H1'
H1.propTypes = {}
H1.defaultProps = {}

/**
 * HTML `h1` element DOC styled
 */
const H2 = ({
  children,
  className,
  elementType = HEADING_ELEMENT.h2.elementType,
  mode,
  ...props
}) => (
  <Heading
    {...props}
    className={HEADING_ELEMENT.h2.className(className, mode)}
    elementType={elementType}
    mode={mode}
  >
    {children}
  </Heading>
)
H2.displayName = 'H2'
H2.propTypes = {}
H2.defaultProps = {}

/**
 * HTML `h3` element DOC styled
 */
const H3 = ({
  children,
  className,
  elementType = HEADING_ELEMENT.h3.elementType,
  mode,
  ...props
}) => (
  <Heading
    {...props}
    className={HEADING_ELEMENT.h3.className(className, mode)}
    elementType={elementType}
    mode={mode}
  >
    {children}
  </Heading>
)

H3.displayName = 'H3'
H3.propTypes = {}
H3.defaultProps = {}

/**
 * HTML `h4` element DOC styled
 */
const H4 = ({
  children,
  className,
  elementType = HEADING_ELEMENT.h4.elementType,
  mode,
  ...props
}) => (
  <Heading
    {...props}
    className={HEADING_ELEMENT.h4.className(className, mode)}
    elementType={elementType}
    mode={mode}
  >
    {children}
  </Heading>
)

H4.displayName = 'H4'
H4.propTypes = {}
H4.defaultProps = {}

export default Heading

export {Heading, H1, H2, H3, H4}
