/**
 * Root controller.
 * The react application starts here.
 */
import React from 'react'
import ReactDOM from 'react-dom'

import Root from 'model/component/root'
import registerServiceWorker from 'model/initializer/register-service-worker'

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)

registerServiceWorker()
