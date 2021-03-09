import React from 'react'
import * as flatColorIcons from 'react-icons/fc'
import {Grid, Cell, Small} from '../../main'

import FlatColorIcon from './FlatColorIcon'

const flatColorIconOptions = Object.getOwnPropertyNames(flatColorIcons).filter(
  k => k !== '__esModule'
)

export default {
  title: 'Components/Icon/FlatColorIcon',
  component: FlatColorIcon,
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
        options: flatColorIconOptions
      }
    }
  }
}

const Template = props => <FlatColorIcon {...props} />

export const Default = Template.bind({})

Default.args = {
  icon: flatColorIconOptions[0]
}

export const IconList = props => {
  return (
    <Grid cols={5} gutter={10}>
      {flatColorIconOptions.map((icon, index) => (
        <Cell key={index}>
          <Grid cols={1} gutter={0}>
            <Cell>
              <FlatColorIcon {...props} icon={icon} />
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
          <FlatColorIcon {...props} size={`${index + 1}em`} />
        </Cell>
      ))}
    </Grid>
  )
}

Size.args = {
  icon: flatColorIconOptions[0]
}
