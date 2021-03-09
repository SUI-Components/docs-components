/* eslint react/prop-types: 0 */
import React, {forwardRef} from 'react'
import cx from 'classnames'

import Box from '../Box/Box'

import './Article.scss'
import {withDocumentationProvider} from '../Base.core'

/**
 * HTML `article` element DOC styled
 */
let Article = forwardRef(
  (
    {
      children,
      className,
      elementType = 'article',
      fullScreen,
      outline,
      mode,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <Box
        {...props}
        mode={mode}
        elementType={elementType}
        className={cx(
          'sui-studio-doc-article',
          {
            [`sui-studio-doc-article-mode-${mode}`]: mode,
            'sui-studio-doc-article-full-screen': fullScreen,
            'sui-studio-doc-article-outline': outline
          },
          className
        )}
        ref={forwardedRef}
      >
        {children}
      </Box>
    )
  }
)

Article = withDocumentationProvider(Article)

Article.displayName = 'Article'
Article.propTypes = {}
Article.defaultProps = {}

export default Article

export {Article}
