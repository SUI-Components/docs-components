/* eslint react/prop-types: 0 */
import React from 'react'

import Avatar from './Avatar'
import Grid, {Cell} from '../Grid/Grid'

export default {
  title: 'Components/Avatar/Avatar',
  component: Avatar,
  argTypes: {}
}

const Template = args => <Avatar {...args} />
const imgUrl =
  'https://www.indiepasion.com/wp-content/uploads/2019/01/John-Doe.jpg'

export const Default = Template.bind({})
Default.args = {
  src: imgUrl
}

export const Filters = args => (
  <Grid cols={3} gutter={[5, 10]}>
    <Cell>
      <Avatar {...args} size={Avatar.SIZES.XL} grayScale={100} />
    </Cell>
    <Cell>
      <Avatar {...args} size={Avatar.SIZES.XL} sepia={100} />
    </Cell>
    <Cell>
      <Avatar {...args} size={Avatar.SIZES.XL} saturate={10} />
    </Cell>
    <Cell>
      <Avatar {...args} size={Avatar.SIZES.XL} hueRotate={120} />
    </Cell>
    <Cell>
      <Avatar {...args} size={Avatar.SIZES.XL} invert={1} />
    </Cell>
    <Cell>
      <Avatar {...args} size={Avatar.SIZES.XL} opacity={0.5} />
    </Cell>
    <Cell>
      <Avatar {...args} size={Avatar.SIZES.XL} brightness={0.5} />
    </Cell>
    <Cell>
      <Avatar {...args} size={Avatar.SIZES.XL} contrast={0.5} />
    </Cell>
    <Cell>
      <Avatar {...args} size={Avatar.SIZES.XL} blur={5} />
    </Cell>
  </Grid>
)
Filters.args = {
  src: imgUrl
}

export const Sizes = args => (
  <Grid cols={1} gutter={[5, 10]}>
    <Cell>
      <Avatar {...args} size={Avatar.SIZES.XS} />
    </Cell>
    <Cell>
      <Avatar {...args} size={Avatar.SIZES.SM} />
    </Cell>
    <Cell>
      <Avatar {...args} size={Avatar.SIZES.MD} />
    </Cell>
    <Cell>
      <Avatar {...args} size={Avatar.SIZES.LG} />
    </Cell>
    <Cell>
      <Avatar {...args} size={Avatar.SIZES.XL} />
    </Cell>
  </Grid>
)
Sizes.args = {
  src: imgUrl
}
