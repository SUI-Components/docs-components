import React from 'react'
import * as featherIcons from 'react-icons/fi'
import {Grid, Cell, Small} from '../../main'

import FeatherIcon from './FeatherIcon'

const featherIconOptions = Object.getOwnPropertyNames(featherIcons).filter(
  k => k !== '__esModule'
)

export default {
  title: 'Components/Icon/FeatherIcon',
  component: FeatherIcon,
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
        options: featherIconOptions
      }
    }
  }
}

const Template = props => <FeatherIcon {...props} />

export const Default = Template.bind({})

Default.args = {
  icon: featherIconOptions[0]
}

export const IconList = props => {
  return (
    <Grid cols={5} gutter={10}>
      {featherIconOptions.map((icon, index) => (
        <Cell key={index}>
          <Grid cols={1} gutter={0}>
            <Cell>
              <FeatherIcon {...props} icon={icon} />
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
          <FeatherIcon {...props} size={`${index + 1}em`} />
        </Cell>
      ))}
    </Grid>
  )
}

Size.args = {
  icon: featherIconOptions[0]
}
