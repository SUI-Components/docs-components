import React from 'react'

import Button, {ButtonGroup} from './Button'

export default {
  title: 'Components/Button/ButtonGroup',
  component: ButtonGroup,
  argTypes: {}
}

const Template = args => (
  <ButtonGroup {...args} fullWidth>
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
  </ButtonGroup>
)

export const Default = Template.bind({})
Default.args = {}

export const Outline = Template.bind({})
Outline.args = {
  outline: true
}
