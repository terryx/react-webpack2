import React, { Component } from 'react'
import { render } from 'react-dom'

import './css/app.styl'

class App extends Component {
  render() {
    return (
      <h1>Hello Webpack 2</h1>
    )
  }
}

render(<App />, document.getElementById('root'))
