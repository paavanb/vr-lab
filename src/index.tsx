import 'core-js/stable'
import * as React from 'react'
import {render} from 'react-dom'

import App from './app/App'

console.log("IS ANYONE THERE?")
const bodyEl = document.body
render(<App />, bodyEl)
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./app/App', () => render(<App />, bodyEl))
}
