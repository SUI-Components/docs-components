/* eslint react/prop-types: 0 */
import React, {
  createElement,
  Fragment,
  useContext,
  forwardRef,
  Children,
  cloneElement
} from 'react'
import cx from 'classnames'

import Context from '../context/Mode'

export const MODES = {
  LIGHT: 'light',
  DARK: 'dark'
}

export const TEXT_TRANSFORM = {
  CAPITALIZE: 'capitalize',
  UPPERCASE: 'uppercase',
  LOWERCASE: 'lowercase'
}

export const FONT_WEIGHT = {
  THIN: 'thin',
  LIGHTER: 'lighter',
  LIGHT: 'light',
  REGULAR: 'regular',
  MEDIUM: 'medium',
  SEMIBOLD: 'semi-bold',
  BOLD: 'bold',
  BLACK: 'black'
}

export const TEXT_DECORATION = {
  UNDERSCORE: 'underscore',
  OVERSCORE: 'overscore',
  UNDERLINE: 'underline',
  OVERLINE: 'overline',
  LINETHROUGH: 'line-through'
}

export const DocumentationProvider = ({
  children,
  mode = MODES.LIGHT,
  ...otherProps
}) => {
  return (
    <Context.Provider value={{mode, ...otherProps}}>
      {Children.map(children, child => {
        cloneElement(child, {mode})
        return child
      })}
    </Context.Provider>
  )
}

export const withDocumentationProvider = Component => {
  const Base = forwardRef(({mode, ...otherProps} = {}, forwardedRef) => {
    const contextProps = useContext(Context) || {}
    return (
      <DocumentationProvider mode={mode || contextProps.mode}>
        <Component
          ref={forwardedRef}
          mode={mode || contextProps.mode || MODES.LIGHT}
          {...otherProps}
        />
      </DocumentationProvider>
    )
  })
  return Base
}

export const transformProps = (
  {
    deprecated,
    elementType,
    children,
    fontWeight,
    fullScreen,
    fullWidth,
    fullHeight,
    mode,
    textDecoration,
    textTransform,
    className,
    ...props
  } = {},
  displayName
) => {
  const prefix = displayName ? `-${displayName}` : ''
  return {
    ...props,
    className: cx(
      `sui-studio-doc${prefix}`,
      {
        [`sui-studio-doc${prefix}-tt-${textTransform}`]: Object.entries(
          TEXT_TRANSFORM
        )
          .flat()
          .includes(textTransform),
        [`sui-studio-doc${prefix}-fw-${fontWeight}`]: Object.entries(
          FONT_WEIGHT
        )
          .flat()
          .includes(fontWeight),
        [`sui-studio-doc${prefix}-td-${textDecoration}`]: Object.entries(
          TEXT_DECORATION
        )
          .flat()
          .includes(textDecoration),
        [`sui-studio-doc${prefix}-deprecated`]: deprecated,
        [`sui-studio-doc${prefix}-full-screen`]: fullScreen,
        [`sui-studio-doc${prefix}-full-width`]: fullWidth,
        [`sui-studio-doc${prefix}-full-height`]: fullHeight,
        [`sui-studio-doc${prefix}-mode-${mode}`]: Object.entries(MODES)
          .flat()
          .includes(mode)
      },
      className
    )
  }
}

const BaseCore = forwardRef(
  ({children, elementType, ...otherProps}, forwardedRef) => {
    const contextProps = useContext(Context) || {}
    const ownProps = Object.assign(
      {},
      transformProps({...contextProps, ...otherProps})
    )
    let ownElementType = elementType
    if (
      (elementType === null ||
        elementType === undefined ||
        elementType === Fragment) &&
      ownProps.className === transformProps().className
    ) {
      delete ownProps.className
      return <Fragment {...ownProps}>children</Fragment>
    } else if (
      ownProps.className !== transformProps().className &&
      (elementType === undefined ||
        elementType === null ||
        elementType === Fragment)
    ) {
      ownElementType = 'span'
    }
    return createElement(
      ownElementType,
      {...ownProps, ref: forwardedRef},
      children
    )
  }
)

const BaseConditionalProvided = withDocumentationProvider(BaseCore)
BaseConditionalProvided.displayName = 'Base'
BaseConditionalProvided.propTypes = {}
BaseConditionalProvided.defaultProps = {}

export default BaseConditionalProvided
