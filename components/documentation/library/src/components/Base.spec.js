/* global expect */
import React from 'react'
import ReactDOM from 'react-dom'

import Base, {FONT_WEIGHT, TEXT_DECORATION, TEXT_TRANSFORM} from './Base.core'

import setupEnvironment from '../helpers/setupEnvironment'

describe('components', () => {
  describe('Base', () => {
    describe('default', () => {
      const Component = Base
      const setup = setupEnvironment(Component)

      test('should render without crashing', () => {
        // Given
        const props = {}

        // When
        const component = <Component {...props} />

        // Then
        const div = document.createElement('div')
        ReactDOM.render(component, div)
        ReactDOM.unmountComponentAtNode(div)
      })

      test('should NOT render null', () => {
        // Given
        const props = {}

        // When
        const {container} = setup(props)

        // Then
        expect(container.innerHTML).toBeString()
        expect(container.innerHTML).not.toHaveLength(0)
      })

      test('should have propTypes and defaultProps ', () => {
        // Given
        const component = Component

        // When

        // Then
        expect(component.hasOwnProperty('propTypes')).toBeTruthy()
        expect(component.hasOwnProperty('defaultProps')).toBeTruthy()
      })

      test('should have proper displayName attribute', () => {
        // Given
        // const props = {}

        // When
        const component = Component

        // Then
        expect(component.displayName).toBeString()
        expect(component.displayName).not.toHaveLength(0)
        expect(component.displayName).toMatchSnapshot()
      })

      test('should display wrapping default children only', () => {
        // Given
        const props = {
          children: 'children'
        }

        // When
        const {container, getByText} = setup(props)
        const element = getByText(props.children)

        // Then
        expect(element.localName).toBe('div')
        expect(element.innerHTML).toBeString()
        expect(element.innerHTML).toBe(props.children)
        expect(container).toMatchSnapshot()
      })

      test('should render elementType if an element is given', () => {
        // Given
        const props = {
          elementType: 'element-type',
          children: 'children'
        }

        // When
        const {container, getByText} = setup(props)
        const element = getByText(props.children)

        // Then
        expect(element.localName).toBe(props.elementType)
        expect(element.innerHTML).toBeString()
        expect(element.innerHTML).toBe(props.children)
        expect(container).toMatchSnapshot()
      })

      test('should assign default element in class is given', () => {
        // Given
        const props = {
          className: 'test-classname',
          children: 'children'
        }

        // When
        const {container, getByText} = setup(props)
        const element = getByText(props.children)

        // Then
        expect(element.localName).toBe('span')
        expect(element.innerHTML).toBeString()
        expect(element.innerHTML).toBe(props.children)
        expect(container).toMatchSnapshot()
      })

      test('should assign default elementType if it is deprecated', () => {
        // Given
        const props = {
          deprecated: true,
          children: 'children'
        }

        // When
        const {container, getByText} = setup(props)
        const element = getByText(props.children)

        // Then
        expect(element.localName).toBe('span')
        expect(element.innerHTML).toBeString()
        expect(element.innerHTML).toBe(props.children)
        expect(container).toMatchSnapshot()
      })

      test('should assign default elementType if textTransform is given', () => {
        // Given
        const props = {
          textTransform: TEXT_TRANSFORM.CAPITALIZE,
          children: 'children'
        }

        // When
        const {container, getByText} = setup(props)
        const element = getByText(props.children)

        // Then
        expect(element.localName).toBe('span')
        expect(element.innerHTML).toBeString()
        expect(element.innerHTML).toBe(props.children)
        expect(container).toMatchSnapshot()
      })

      test('should assign default elementType if fontWeight is given', () => {
        // Given
        const props = {
          fontWeight: FONT_WEIGHT.BOLD,
          children: 'children'
        }

        // When
        const {container, getByText} = setup(props)
        const element = getByText(props.children)

        // Then
        expect(element.localName).toBe('span')
        expect(element.innerHTML).toBeString()
        expect(element.innerHTML).toBe(props.children)
        expect(container).toMatchSnapshot()
      })

      test('should assign default elementType if textDecoration is given', () => {
        // Given
        const props = {
          textDecoration: TEXT_DECORATION.UNDERLINE,
          children: 'children'
        }

        // When
        const {container, getByText} = setup(props)
        const element = getByText(props.children)

        // Then
        expect(element.localName).toBe('span')
        expect(element.innerHTML).toBeString()
        expect(element.innerHTML).toBe(props.children)
        expect(container).toMatchSnapshot()
      })
    })
  })
})
