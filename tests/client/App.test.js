import React from 'react'
import Enzyme, {shallow, render, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import './setup-env'

import App from '../../client/components/App'
App.prototype.componentDidMount = () => {}

Enzyme.configure({adapter: new Adapter()})

test('test runner is working', () => {
  expect(true).toBeTruthy()
})

test('<App> root has className of app', () => {
  const wrapper = shallow(<App />)
  const root = wrapper.find('.app')
  expect(root.length).toBe(1)
})

test('page header includes fruit', () => {
  const wrapper = render(<App />)
  const h1 = wrapper.find('h1')
  expect(h1.text()).toMatch(/Fruit/)
})

test('renders an <li> for each fruit', () => {
  const wrapper = mount(<App />)
  wrapper.setState({fruits: ['orange', 'persimmons', 'kiwi fruit']})
  expect(wrapper.find('li').length).toBe(3)
})
