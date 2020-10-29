import React from 'react'
import * as boostrapIcons from 'react-icons/bs'
import {Grid, Cell, Small} from '../../main'

import BootstrapIcon from './BootstrapIcon'

const boostrapIconsOptions = Object.getOwnPropertyNames(boostrapIcons).filter(
  k => k !== '__esModule'
)

export default {
  title: 'Components/Icon/BootstrapIcon',
  component: BootstrapIcon,
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
    },
    icon: {
      control: {
        type: 'select',
        options: boostrapIconsOptions
      }
    }
  }
}

const Template = props => <BootstrapIcon {...props} />

export const Default = Template.bind({})

Default.args = {
  icon: boostrapIconsOptions[0]
}

export const IconList = props => {
  return (
    <Grid cols={5} gutter={10}>
      {boostrapIconsOptions.map((icon, index) => (
        <Cell key={index}>
          <Grid cols={1} gutter={0}>
            <Cell>
              <BootstrapIcon {...props} icon={icon} />
            </Cell>
            <Cell style={{textAlign: 'center'}}>
              <Small>{icon}</Small>
            </Cell>
          </Grid>
        </Cell>
      ))}
    </Grid>
  )
}

IconList.args = {
  size: '3em'
}

export const Size = props => {
  return (
    <Grid cols={5} gutter={10}>
      {[...Array(5).keys()].map(index => (
        <Cell key={index}>
          <BootstrapIcon {...props} size={`${index + 1}em`} />
        </Cell>
      ))}
    </Grid>
  )
}

Size.args = {
  icon: boostrapIconsOptions[0]
}
