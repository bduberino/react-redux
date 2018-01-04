import React, { Component } from 'react';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import TasksPage from './tasks/TasksPage';
import Menu from './common/Menu';
import { BrowserRouter as Router, Route } from 'react-router-dom';



/*
class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}
*/

const App = () => (
  <Router>
    <div>
      <Route path='/' component={Menu} />
      <Route exact path='/' component={HomePage} />
      <Route path='/about' component={AboutPage} />
      <Route path='/tasks' component={TasksPage} />

    </div>
  </Router>
);



export default App;
