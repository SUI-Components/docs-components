import React from 'react'
import * as devIcons from 'react-icons/di'
import {Grid, Cell, Small} from '../../main'

import DevIcon from './DevIcon'

const devIconsOptions = Object.getOwnPropertyNames(devIcons).filter(
  k => k !== '__esModule'
)

export default {
  title: 'Components/Icon/DevIcon',
  component: DevIcon,
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
        options: devIconsOptions
      }
    }
  }
}

const Template = props => <DevIcon {...props} />

export const Default = Template.bind({})

Default.args = {
  icon: devIconsOptions[0]
}

export const IconList = props => {
  return (
    <Grid cols={5} gutter={10}>
      {devIconsOptions.map((icon, index) => (
        <Cell key={index}>
          <Grid cols={1} gutter={0}>
            <Cell>
              <DevIcon {...props} icon={icon} />
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
          <DevIcon {...props} size={`${index + 1}em`} />
        </Cell>
      ))}
    </Grid>
  )
}

Size.args = {
  icon: devIconsOptions[0]
}
