import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Redirect, Route, Link, withRouter } from "react-router-dom";
import './index.css';
import IssueList from './Components/IssueList';
import IssueEdit from './Components/IssueEdit';

const NoMatch = () => <p>Page Not FOund</p>;

const RoutedApp = () => (
  <Router>
    <div>
        <Redirect from="/" to="/issues" />
        <Route path="/issues" exact component={withRouter(IssueList)} />
        <Route path="/Issues/:id" exact component={IssueEdit} />
        <Route path="/*" component={NoMatch} />
    </div>
  </Router>
);

ReactDOM.render(<RoutedApp />, document.getElementById('root'));

if(module.hot){
  module.hot.accept();
}

// const RoutedApp = () => (
//   <Router>
//     <div>
//         <Redirect from="/" to="/issues" />
//         <Route path="/issues" exact component={withRouter(IssueList)} />
//         <Route path="/Issues/:id" exact component={IssueEdit} />
//         <Route path="/*" component={NoMatch} />
//     </div>
//   </Router>
// );

// import React from 'react';
// import ReactDOM from 'react-dom';

//
//
// const NoMatch = () => <p>Page Not FOund</p>;
//
// const RouterApp = () => (
//   <Router>
//   <div>

//   </div>
//   </Router>
// );
//
// ReactDOM.render(<RouterApp />, document.getElementById('root'));
