/* eslint react/prop-types: 0 */
import React from 'react'

import {Pantone} from './Pantone'
import Paragraph from '../Paragraph/Paragraph'
import {Grid, Cell} from '../Grid/Grid'

export default {
  title: 'Components/Color/Pantone',
  component: Pantone,
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

const Template = ({...props}) => {
  return (
    <div style={{fontSize: '6em'}}>
      <Pantone {...props} />
    </div>
  )
}

export const Default = Template.bind({})

Default.args = {
  color: 'hsla(180,50%,70%,0.9)'
}

export const Alignement = ({...props}) => {
  return (
    <div style={{fontSize: '6em'}}>
      <Paragraph elementType="span">lorem ipsum dolor sit emmet</Paragraph>
      <Pantone {...props} />
      <Paragraph elementType="span">lorem ipsum dolor sit emmet</Paragraph>
    </div>
  )
}

Alignement.args = {
  color: 'hsla(180,50%,70%,0.9)'
}

export const Modes = ({...props}) => {
  return (
    <Grid style={{height: 300, fontSize: '6em'}} cols={2}>
      <Cell>
        <Pantone
          {...props}
          color="hsla(180,50%,70%,0.9)"
          fullWidth
          fullHeight
        />
      </Cell>
      <Cell>
        <Pantone {...props} color="hsla(0,50%,70%,0.9)" fullWidth fullHeight />
      </Cell>
      <Cell>
        <Pantone
          {...props}
          color="hsla(180,50%,30%,0.9)"
          fullWidth
          fullHeight
        />
      </Cell>
      <Cell>
        <Pantone {...props} color="hsla(0,50%,30%,0.9)" fullWidth fullHeight />
      </Cell>
    </Grid>
  )
}

Modes.args = {}

export const Named = Template.bind({})

Named.args = {
  color: 'hsla(180,50%,70%,0.9)',
  name: 'name'
}

export const NullNamed = Template.bind({})

NullNamed.args = {
  color: 'hsla(180,50%,70%,0.9)',
  name: null
}

export const Tokenized = Template.bind({})

Tokenized.args = {
  color: 'hsla(180,50%,70%,0.9)',
  tokenName: '$token large large token wtf again and again token large'
}
