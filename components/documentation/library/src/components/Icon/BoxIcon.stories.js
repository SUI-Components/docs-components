import React from 'react'
import * as boxIcons from 'react-icons/bi'
import {Grid, Cell, Small} from '../../main'

import BoxIcon from './BoxIcon'

const boxIconsOptions = Object.getOwnPropertyNames(boxIcons).filter(
  k => k !== '__esModule'
)

export default {
  title: 'Components/Icon/BoxIcon',
  component: BoxIcon,
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
        options: boxIconsOptions
      }
    }
  }
}

const Template = props => <BoxIcon {...props} />

export const Default = Template.bind({})

Default.args = {
  icon: boxIconsOptions[0]
}

export const IconList = props => {
  return (
    <Grid cols={5} gutter={10}>
      {boxIconsOptions.map((icon, index) => (
        <Cell key={index}>
          <Grid cols={1} gutter={0}>
            <Cell>
              <BoxIcon {...props} icon={icon} />
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
          <BoxIcon {...props} size={`${index + 1}em`} />
        </Cell>
      ))}
    </Grid>
  )
}

Size.args = {
  icon: boxIconsOptions[0]
}
