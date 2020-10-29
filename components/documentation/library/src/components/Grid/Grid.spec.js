/* global expect */
import React from 'react'
import ReactDOM from 'react-dom'

import {Grid} from './Grid'

import setupEnvironment from '../../helpers/setupEnvironment'

describe('Grid', () => {
  describe('default', () => {
    const Component = Grid
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
  })
})
