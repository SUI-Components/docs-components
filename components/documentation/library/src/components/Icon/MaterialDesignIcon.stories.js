import React from 'react'
import * as materialDesignIcons from 'react-icons/md'
import {Grid, Cell, Small} from '../../main'

import MaterialDesignIcon from './MaterialDesignIcon'

const materialDesignIconOptions = Object.getOwnPropertyNames(
  materialDesignIcons
).filter(k => k !== '__esModule')

export default {
  title: 'Components/Icon/FlatColorIcon',
  component: MaterialDesignIcon,
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
        options: materialDesignIconOptions
      }
    }
  }
}

const Template = props => <MaterialDesignIcon {...props} />

export const Default = Template.bind({})

Default.args = {
  icon: materialDesignIconOptions[0]
}

export const IconList = props => {
  return (
    <Grid cols={5} gutter={10}>
      {materialDesignIconOptions.map((icon, index) => (
        <Cell key={index}>
          <Grid cols={1} gutter={0}>
            <Cell>
              <MaterialDesignIcon {...props} icon={icon} />
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
          <MaterialDesignIcon {...props} size={`${index + 1}em`} />
        </Cell>
      ))}
    </Grid>
  )
}

Size.args = {
  icon: materialDesignIconOptions[0]
}
