import React from 'react'

import DocumentationLibrary from '../../../../components/documentation/library/src/index'
import Demo from '../../../../components/documentation/library/src/Demo.core'

import './index.scss'

const {Article, Cell, Grid} = DocumentationLibrary

export default () => (
  <Grid className="demo-doc-lib" cols={1} gutter={10}>
    <Cell>
      <Grid cols={2} gutter={[5, 10]}>
        <Cell mode="light">
          <Article>
            <Demo />
          </Article>
        </Cell>
        <Cell mode="dark">
          <Article>
            <Demo />
          </Article>
        </Cell>
      </Grid>
    </Cell>
  </Grid>
)
