/**
 * Component to configure the routes.
 */
import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Base from 'model/component/base/base.component'
import PublicAbout from 'model/component/subsystems/public/about/about.component'
import PublicCareers from 'model/component/subsystems/public/careers/careers.component'
import PublicContact from 'model/component/subsystems/public/contact/contact.component'
import PublicFrequentlyAskedQuestions from 'model/component/subsystems/public/frequently-asked-questions/frequently-asked-questions.component'
import PublicHelp from 'model/component/subsystems/public/help/help.component'
import PublicLanding from 'model/component/subsystems/public/landing/landing.component'
import PublicPrivacyPolicy from 'model/component/subsystems/public/privacy-policy/privacy-policy.component'
import PublicTermsOfService from 'model/component/subsystems/public/terms-of-service/terms-of-service.component'

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
				<div>
					<Switch>
						<Route exact path="/" component={PublicLanding}/>
						<Redirect from="/landing" to="/"/>
					</Switch>
					<Route exact path="/about" component={PublicAbout}/>
					<Route exact path="/careers" component={PublicCareers}/>
					<Route exact path="/contact" component={PublicContact}/>
					<Switch>
						<Route exact path="/faq" component={PublicFrequentlyAskedQuestions}/>
						<Redirect from="/frequently-asked-questions" to="/faq"/>
					</Switch>
					<Route exact path="/help" component={PublicHelp}/>
					<Route exact path="/privacy-policy" component={PublicPrivacyPolicy}/>
					<Route exact path="/terms-of-service" component={PublicTermsOfService}/>
				</div>
      </BrowserRouter>
    )
  }
}
