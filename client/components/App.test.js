import React from 'react'
import { shallow, render, mount } from 'enzyme'

import App from '../../client/components/App'
App.prototype.componentDidMount = () => {}

test('runner is working', () => {
  expect(true).toBeTruthy()
})

test('<App> root has className of app', () => {
  const wrapper = shallow(<App />)
  const root = wrapper.find('.app')
  expect(root).toHaveLength(1)
})

test('page header includes fruit', () => {
  const wrapper = render(<App />)
  const h1 = wrapper.find('h1')
  expect(h1.text()).toMatch(/Fruit/)
})

test('renders an <li> for each fruit', () => {
  const wrapper = mount(<App />)
  wrapper.setState({ fruits: ['orange', 'persimmons', 'kiwi fruit'] })
  expect(wrapper.find('li')).toHaveLength(3)
})
