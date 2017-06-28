/**
 * Router component of the application.
 */
import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Base from 'model/component/base/base'
// import AdministrationDashBoard from 'model/component/subsystems/administration/dashboard'
// import DevelopmentDashBoard from 'model/component/subsystems/development/dashboard'
// import PublicAbout from 'model/component/subsystems/public/about'
// import PublicCareers from 'model/component/subsystems/public/careers'
// import PublicContact from 'model/component/subsystems/public/contact'
// import PublicFrequentlyAskedQuestions from 'model/component/subsystems/public/frequently-asked-questions'
// import PublicHelp from 'model/component/subsystems/public/help'
import PublicLanding from 'model/component/subsystems/public/landing'
// import PublicPrivacyPolicy from 'model/component/subsystems/public/privacy-policy'
// import PublicTermsOfService from 'model/component/subsystems/public/terms-of-service'
// import UserDashBoard from 'model/component/subsystems/user/dashboard'

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
					{/*
						Administration
					*/}
					{/*<Switch>*/}
						{/*<Route exact path="/administration" component={AdministrationDashBoard}/>*/}
						{/*<Redirect from="/administration/dashboard" to="/administration"/>*/}
					{/*</Switch>*/}

					{/*
					 Development
				 	*/}
					{/*<Switch>*/}
						{/*<Route exact path="/development" component={DevelopmentDashBoard}/>*/}
						{/*<Redirect from="/development/dashboard" to="/development"/>*/}
					{/*</Switch>*/}

					{/*
					 Public
				 	*/}
					<Switch>
						<Route exact path="/" component={PublicLanding}/>
						<Redirect from="/landing" to="/"/>
					</Switch>
					{/*<Route exact path="/about" component={PublicAbout}/>*/}
					{/*<Route exact path="/careers" component={PublicCareers}/>*/}
					{/*<Route exact path="/contact" component={PublicContact}/>*/}
					{/*<Switch>*/}
						{/*<Route exact path="/faq" component={PublicFrequentlyAskedQuestions}/>*/}
						{/*<Redirect from="/frequently-asked-questions" to="/faq"/>*/}
					{/*</Switch>*/}
					{/*<Route exact path="/help" component={PublicHelp}/>*/}
					{/*<Route exact path="/privacy-policy" component={PublicPrivacyPolicy}/>*/}
					{/*<Route exact path="/terms-of-service" component={PublicTermsOfService}/>*/}

					{/*
					 User
				 	*/}
					{/*<Switch>*/}
						{/*<Route exact path="/user" component={UserDashBoard}/>*/}
						{/*<Redirect from="/user/dashboard" to="/user"/>*/}
					{/*</Switch>*/}
				</div>
      </BrowserRouter>
    )
  }
}
