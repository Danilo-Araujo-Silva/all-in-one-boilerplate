/**
 * Component to configure the routes.
 */
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Main from 'model/component/main/main.component'
import PublicLanding from 'model/component/subsystems/public/landing/landing.component';

/**
 *
 */
export default class Router extends Main {

	/**
	 *
	 * @returns {XML}
	 */
  render() {
    return (
      <BrowserRouter>
        <Route exact path='*' component={PublicLanding}/>
      </BrowserRouter>
    )
  }
}
