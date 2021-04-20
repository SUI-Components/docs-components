/* eslint react/prop-types: 0 */
import React from 'react'

import {ColorContextProvider, ColorContextConsumer} from './ColorContext.core'

export default {
  title: 'Components/Color/Context',
  component: ColorContextProvider,
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

const ColorViewer = ({children, color, ...props}) => {
  const data = {
    alpha: color.alpha(),
    hex: color.hex(),
    hsl: color.hsl().string(),
    rgb: color.rgb().string(),
    luminosity: color.luminosity(),
    isLight: color.isLight().toString(),
    isDark: color.isDark().toString(),
    cmyk: color
      .cmyk()
      .round()
      .array()
      .toString()
  }
  return (
    <>
      <div
        style={{
          height: 100,
          backgroundColor: color.rgb().string(),
          opacity: color.alpha()
        }}
      >
        {Object.entries(data).map(([key, value], index) => (
          <div key={index}>
            {key}: {value}
          </div>
        ))}
      </div>
    </>
  )
}

const Template = ({children, ...props}) => {
  return (
    <ColorContextProvider {...props}>
      <ColorContextConsumer>
        <ColorViewer>{children}</ColorViewer>
      </ColorContextConsumer>
    </ColorContextProvider>
  )
}

export const Default = Template.bind({})

Default.args = {
  children: 'Code',
  color: 'hsla(180,50%,70%,0.9)'
}
