/* eslint react/prop-types: 0 */
import React from 'react'

import Quote from './Quote'

import {MODES, FONT_WEIGHT, TEXT_TRANSFORM, TEXT_DECORATION} from '../Base.core'

export default {
  title: 'Components/Quote/Quote',
  component: Quote
}

const Template = ({children, ...args}) => <Quote {...args}>{children}</Quote>

export const Base = Template.bind({})

Base.args = {children: 'aSdFgHjKl'}
Base.argTypes = {
  mode: {
    control: {
      type: 'select',
      options: {
        undefined: undefined,
        ...MODES
      }
    }
  },
  deprecated: {
    control: {
      type: 'boolean'
    }
  },
  fullWidth: {
    control: {
      type: 'boolean'
    }
  },
  fontWeight: {
    control: {
      type: 'select',
      options: {
        undefined: undefined,
        ...FONT_WEIGHT
      }
    }
  },
  textTransform: {
    control: {
      type: 'select',
      options: {
        undefined: undefined,
        ...TEXT_TRANSFORM
      }
    }
  },
  textDecoration: {
    control: {
      type: 'select',
      options: {
        undefined: undefined,
        ...TEXT_DECORATION
      }
    }
  }
}
