import React from 'react'
import * as vsCodeIcons from 'react-icons/vsc'
import {Grid, Cell, Small} from '../../main'

import VSCodeIcon from './VSCodeIcon'

const vsCodeIconOptions = Object.getOwnPropertyNames(
  vsCodeIcons
).filter(k => k !== '__esModule')

export default {
  title: 'Components/Icon/VSCodeIcon',
  component: VSCodeIcon,
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
        options: vsCodeIconOptions
      }
    }
  }
}

const Template = props => <VSCodeIcon {...props} />

export const Default = Template.bind({})

Default.args = {
  icon: vsCodeIconOptions[0]
}

export const IconList = props => {
  return (
    <Grid cols={5} gutter={10}>
      {vsCodeIconOptions.map((icon, index) => (
        <Cell key={index}>
          <Grid cols={1} gutter={0}>
            <Cell>
              <VSCodeIcon {...props} icon={icon} />
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
          <VSCodeIcon {...props} size={`${index + 1}em`} />
        </Cell>
      ))}
    </Grid>
  )
}

Size.args = {
  icon: vsCodeIconOptions[0]
}
