import React from 'react'
import * as antDesignIcons from 'react-icons/ai'
import {Grid, Cell, Small} from '../../main'

import AntDesignIcon from './AntDesignIcon'

const antDesignIconOptions = Object.getOwnPropertyNames(antDesignIcons).filter(
  k => k !== '__esModule'
)

export default {
  title: 'Components/Icon/AntDesignIcon',
  component: AntDesignIcon,
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
        options: antDesignIconOptions
      }
    }
  }
}

const Template = props => <AntDesignIcon {...props} />

export const Default = Template.bind({})

Default.args = {
  icon: antDesignIconOptions[0]
}

export const IconList = props => {
  return (
    <Grid cols={5} gutter={10}>
      {antDesignIconOptions.map((icon, index) => (
        <Cell key={index}>
          <Grid cols={1} gutter={0}>
            <Cell>
              <AntDesignIcon {...props} icon={icon} />
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
          <AntDesignIcon {...props} size={`${index + 1}em`} />
        </Cell>
      ))}
    </Grid>
  )
}

Size.args = {
  icon: antDesignIconOptions[0]
}
