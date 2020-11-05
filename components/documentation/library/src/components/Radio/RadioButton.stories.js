/* eslint react/prop-types: 0 */
import React from 'react'

import {RadioButton} from '../Radio/RadioButton'

export default {
  title: 'Components/Radio/RadioButton',
  component: RadioButton
}

const Template = ({...args}) => <RadioButton {...args} />

export const Base = Template.bind({})

Base.args = {label: 'label', value: 'value'}
Base.argTypes = {}
