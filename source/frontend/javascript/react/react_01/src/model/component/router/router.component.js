/**
 * Component to configure the routes.
 */
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Base from 'model/component/base/base.component'
import PublicLanding from 'model/component/subsystems/public/landing/landing.component';

/**
 *
 */
export default class Router extends Base {

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
