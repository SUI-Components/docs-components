/* eslint react/prop-types: 0 */
import React from 'react'

import {BackgroundColorConsumer} from './BackgroundColorConsumer'
import {Pantone as PantoneComponent} from './Pantone'

export default {
  title: 'Components/Color/BackgroundColor',
  component: BackgroundColorConsumer,
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
      <BackgroundColorConsumer {...props}>
        {({color}) => {
          return color.hex()
        }}
      </BackgroundColorConsumer>
    </div>
  )
}

export const Default = Template.bind({})

Default.args = {
  style: {backgroundColor: 'hsla(180,50%,70%,0.9)'}
}

export const Pantone = ({...props}) => {
  return (
    <div style={{fontSize: '6em'}}>
      <BackgroundColorConsumer {...props}>
        {({color}) => (
          <PantoneComponent
            color={PantoneComponent.displayMode('RGB')(color)}
          />
        )}
      </BackgroundColorConsumer>
    </div>
  )
}

Pantone.args = {
  style: {backgroundColor: 'hsla(180,50%,70%,0.9)'}
}
