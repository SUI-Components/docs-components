/* global expect */
import React, {createRef} from 'react'
import ReactDOM from 'react-dom'

import {BackgroundColorConsumer} from './BackgroundColorConsumer'

import setupEnvironment from '../../helpers/setupEnvironment'

describe('components', () => {
  describe('BackgroundColorConsumer', () => {
    describe('default', () => {
      const Component = BackgroundColorConsumer
      const setup = setupEnvironment(Component)

      test('should render without crashing', () => {
        // Given
        const props = {style: {backgroundColor: 'red'}}

        // When
        const component = (
          <Component {...props}>
            {({color}) => {
              return color.hex()
            }}
          </Component>
        )

        // Then
        const div = document.createElement('div')
        ReactDOM.render(component, div)
        ReactDOM.unmountComponentAtNode(div)
      })

      test('should NOT render null', () => {
        // Given
        const props = {
          style: {backgroundColor: 'red'}
        }

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

      describe('forwardRef', () => {
        test('should have reference', () => {
          // Given
          const props = {
            style: {backgroundColor: 'red'}
          }
          const ref = createRef()

          // When
          const component = <Component {...props} ref={ref} />
          const div = document.createElement('div')
          ReactDOM.render(component, div)

          // Then
          expect(ref.current).not.toBe(undefined)
          expect(ref.current.nodeName).toBe('DIV')
        })

        test('should have defined elementType reference', () => {
          // Given
          const props = {elementType: 'span', style: {backgroundColor: 'red'}}
          const ref = createRef()

          // When
          const component = <Component {...props} ref={ref} />
          const div = document.createElement('div')
          ReactDOM.render(component, div)

          // Then
          expect(ref.current).not.toBe(undefined)
          expect(ref.current.nodeName).toBe('SPAN')
        })
      })
    })
  })
})
