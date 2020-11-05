/* eslint react/prop-types: 0 */
import React from 'react'

import Article from './Article'
import {H1} from '../Heading/Heading'
import Text from '../Text/Text'
import Paragraph from '../Paragraph/Paragraph'
import Grid, {Cell} from '../Grid/Grid'

export default {
  title: 'Components/Article/Article',
  component: Article,
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

const Template = ({children, ...args}) => (
  <Article {...args}>
    <Paragraph>{children}</Paragraph>
  </Article>
)

export const Mode = Template.bind({})

Mode.args = {
  children: 'article',
  mode: 'dark',
  outline: false
}

export const Trial = args => (
  <>
    <Grid cols={2} gutter={[5, 10]}>
      <Cell>
        <Article>
          <H1>Heading one</H1>
        </Article>
      </Cell>
      <Cell>
        <Article mode="dark">
          <H1>Heading one</H1>
        </Article>
      </Cell>
      <Cell>
        <Article color="lightgrey">
          <Grid cols={2} gutter={[10, 10]}>
            <Cell>
              <Article>
                <Text>Text</Text>
              </Article>
            </Cell>
            <Cell>
              <Article mode="dark">
                <Text>Text</Text>
              </Article>
            </Cell>
            <Cell>
              <Article outline>
                <Text>Text</Text>
              </Article>
            </Cell>
            <Cell>
              <Article outline mode="dark">
                <Text>Text</Text>
              </Article>
            </Cell>
          </Grid>
        </Article>
      </Cell>
      <Cell>
        <Article mode="dark" color="lightgrey">
          <Grid cols={2} gutter={[10, 10]}>
            <Cell>
              <Article>
                <Text>Text</Text>
              </Article>
            </Cell>
            <Cell>
              <Article mode="light">
                <Text>Text</Text>
              </Article>
            </Cell>
            <Cell>
              <Article outline>
                <Text>Text</Text>
              </Article>
            </Cell>
            <Cell>
              <Article outline mode="light">
                <Text>Text</Text>
              </Article>
            </Cell>
          </Grid>
        </Article>
      </Cell>
    </Grid>
  </>
)
