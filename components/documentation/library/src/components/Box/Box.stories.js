/* eslint react/prop-types: 0 */
import React from 'react'

import Box from './Box'
import {H1} from '../Heading/Heading'
import Text from '../Text/Text'
import Paragraph from '../Paragraph/Paragraph'
import Grid, {Cell} from '../Grid/Grid'

export default {
  title: 'Components/Box/Box',
  component: Box,
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
  <Box {...args}>
    <Paragraph>{children}</Paragraph>
  </Box>
)

export const Mode = Template.bind({})

Mode.args = {
  children: 'box',
  mode: 'dark',
  outline: false
}

export const Trial = () => (
  <>
    <Grid cols={2} gutter={[5, 10]}>
      <Cell>
        <Box>
          <H1>Heading one</H1>
        </Box>
      </Cell>
      <Cell>
        <Box mode="dark">
          <H1>Heading one</H1>
        </Box>
      </Cell>
      <Cell>
        <Box color="lightgrey">
          <Grid cols={2} gutter={[10, 10]}>
            <Cell>
              <Box>
                <Text>Text</Text>
              </Box>
            </Cell>
            <Cell>
              <Box mode="dark">
                <Text>Text</Text>
              </Box>
            </Cell>
            <Cell>
              <Box outline>
                <Text>Text</Text>
              </Box>
            </Cell>
            <Cell>
              <Box outline mode="dark">
                <Text>Text</Text>
              </Box>
            </Cell>
          </Grid>
        </Box>
      </Cell>
      <Cell>
        <Box mode="dark" color="lightgrey">
          <Grid cols={2} gutter={[10, 10]}>
            <Cell>
              <Box>
                <Text>Text</Text>
              </Box>
            </Cell>
            <Cell>
              <Box mode="light">
                <Text>Text</Text>
              </Box>
            </Cell>
            <Cell>
              <Box outline>
                <Text>Text</Text>
              </Box>
            </Cell>
            <Cell>
              <Box outline mode="light">
                <Text>Text</Text>
              </Box>
            </Cell>
          </Grid>
        </Box>
      </Cell>
    </Grid>
  </>
)
