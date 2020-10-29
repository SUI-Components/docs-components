/* eslint react/prop-types: 0 */
import React from 'react'
import cx from 'classnames'

import Box from '../Box/Box'

/**
 * HTML `article` element DOC styled
 */
const Article = ({
  children,
  className,
  elementType = 'article',
  fullScreen,
  outline,
  mode,
  ...props
}) => {
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
    >
      {children}
    </Box>
  )
}

Article.displayName = 'Article'
Article.propTypes = {}
Article.defaultProps = {}

export default Article

export {Article}
