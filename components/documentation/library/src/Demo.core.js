import React from 'react'
import PropTypes from 'prop-types'

import {MODES} from './components/Base.core.js'
import * as Components from './main.js'

const {
  Anchor,
  // Article,
  // Avatar,
  // Box,
  Button,
  ButtonGroup,
  Code,
  Grid,
  Cell,
  // Heading,
  H1,
  H2,
  H3,
  H4,
  AntDesignIcon,
  BoxIcon,
  BootstrapIcon,
  DevIcon,
  FeatherIcon,
  Input,
  Label,
  UnorderedList,
  OrderedList,
  ListItem,
  Paragraph,
  Quote,
  // Radio,
  // RadioGroup,
  RadioButton,
  RadioButtonGroup,
  Separator,
  Text,
  Bold,
  Strong,
  Idiomatic,
  Emphasis,
  Mark,
  Small,
  Deleted,
  Inserted,
  Subscript,
  Superscript
} = Components

const Demo = ({mode}) => {
  return (
    <Grid mode={mode} cols={1} gutter={[5, 10]}>
      <Cell>
        <H1>Heading one</H1>
      </Cell>
      <Cell>
        <H2>Heading two</H2>
      </Cell>
      <Cell>
        <H3>Heading three</H3>
      </Cell>
      <Cell>
        <H4>Heading four</H4>
      </Cell>
      <Cell>
        <Paragraph>
          This is just an example of a paragraph styled using the{' '}
          <Code>Code</Code> element with a random text just to get a few more
          lines here.
        </Paragraph>
      </Cell>
      <Cell>
        <Paragraph>
          <Anchor href="#">This is a link</Anchor>
        </Paragraph>
      </Cell>
      <Cell>
        <UnorderedList>
          <ListItem>Item number 1</ListItem>
          <ListItem>Item number 2</ListItem>
          <ListItem>Item number 3</ListItem>
        </UnorderedList>
      </Cell>
      <Cell>
        <OrderedList>
          <ListItem>Item number 1</ListItem>
          <ListItem>Item number 2</ListItem>
          <ListItem>Item number 3</ListItem>
        </OrderedList>
      </Cell>
      <Cell>
        <Paragraph>
          <Label>This is a label</Label>
        </Paragraph>
      </Cell>
      <Cell>
        <Button fullWidth>button</Button>
      </Cell>
      <Cell>
        <Button outline fullWidth>
          button
        </Button>
      </Cell>
      <Cell>
        <ButtonGroup fullWidth>
          <Button>button</Button>
          <Button>button</Button>
          <Button>button</Button>
          <Button>button</Button>
          <Button>button</Button>
        </ButtonGroup>
      </Cell>
      <Cell>
        <ButtonGroup outline fullWidth>
          <Button>button</Button>
          <Button>button</Button>
          <Button>button</Button>
          <Button>button</Button>
          <Button>button</Button>
        </ButtonGroup>
      </Cell>
      <Cell>
        <Quote>Quote</Quote>
      </Cell>
      <Cell>
        <Text>Text</Text>
      </Cell>
      <Cell>
        <Grid cols={3} gutter={[5, 5]}>
          <Cell>
            <Bold>Bold</Bold>
          </Cell>
          <Cell>
            <Strong>Strong</Strong>
          </Cell>
          <Cell>
            <Idiomatic>Idiomatic</Idiomatic>
          </Cell>
          <Cell>
            <Emphasis>Emphasis</Emphasis>
          </Cell>
          <Cell>
            <Mark>Mark</Mark>
          </Cell>
          <Cell>
            <Small>Small</Small>
          </Cell>
          <Cell>
            <Deleted>Deleted</Deleted>
          </Cell>
          <Cell>
            <Inserted>Inserted</Inserted>
          </Cell>
          <Cell>
            <Subscript>Subscript</Subscript>
          </Cell>
          <Cell>
            <Superscript>Superscript</Superscript>
          </Cell>
        </Grid>
      </Cell>
      <Cell>
        <Separator />
        <Separator>Separator</Separator>
      </Cell>
      <Cell>
        <Input defaultValue="Input" fullWidth />
      </Cell>
      <Cell>
        <Grid cols={5} gutter={[5, 5]}>
          <Cell>
            <AntDesignIcon icon="AiFillAccountBook" />
          </Cell>
          <Cell>
            <BoxIcon icon="BiAbacus" />
          </Cell>
          <Cell>
            <BootstrapIcon icon="BsFillAlarmFill" />
          </Cell>
          <Cell>
            <DevIcon icon="DiAndroid" />
          </Cell>
          <Cell>
            <FeatherIcon icon="FiActivity" />
          </Cell>
        </Grid>
      </Cell>
      <Cell>
        <RadioButton label="radioButton" value="value" fullWidth />
      </Cell>
      <Cell>
        <RadioButton outline label="radioButton" value="value" fullWidth />
      </Cell>
      <Cell>
        <RadioButtonGroup name="radio-button-group" fullWidth>
          <RadioButton label="radioButton" value="1" />
          <RadioButton label="radioButton" value="2" />
          <RadioButton label="radioButton" value="3" />
          <RadioButton label="radioButton" value="4" />
          <RadioButton label="radioButton" value="5" />
        </RadioButtonGroup>
      </Cell>
      <Cell>
        <RadioButtonGroup outline name="radio-button-group" fullWidth>
          <RadioButton label="radioButton" value="1" />
          <RadioButton label="radioButton" value="2" />
          <RadioButton label="radioButton" value="3" />
          <RadioButton label="radioButton" value="4" />
          <RadioButton label="radioButton" value="5" />
        </RadioButtonGroup>
      </Cell>
    </Grid>
  )
}

Demo.propTypes = {
  mode: PropTypes.oneOf(Object.values(MODES))
}

export default Demo
