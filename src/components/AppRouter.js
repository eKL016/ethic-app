import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import Header from './Header';
import ProjectPage from './ProjectPage';
import MethodPage from './MethodPage';
import ContactPage from './ContactPage';
import BackgroundPage from './BackgroundPage';
import ExperimentPage from './ExperimentPage';
import SurveyPage from './SurveyPage';
import ConclusionPage from './ConclusionPage';

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Header />
          <Switch>
            <Route path="/" component={HomePage} exact></Route>
            <Route path="/project" component={ProjectPage}></Route>
            <Route path="/method" component={MethodPage}></Route>
            <Route path="/background" component={BackgroundPage}></Route>            
            <Route path="/experiment" component={ExperimentPage}></Route>            
            <Route path="/survey" component={SurveyPage}></Route>            
            <Route path="/conclusion" component={ConclusionPage}></Route>            
            <Route path="/contact" component={ContactPage}></Route>            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
