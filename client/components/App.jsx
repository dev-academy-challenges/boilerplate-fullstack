import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

import { fetchFruits } from '../actions'

export function App (props) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchFruits())
  }, [])

  return (
    <div className='app'>
      <h1>Fullstack Boilerplate - with Fruits!</h1>
      <ul>
        {props.fruits.map(fruit => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  )
}

function mapStateToProps (globalState) {
  return {
    fruits: globalState.fruits
  }
}

export default connect(mapStateToProps)(App)
