import React from 'react';
import {render} from 'react-dom';
import Admin from './admin.jsx';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'

const Index = ({}) =>
    <div>
        <h1>Index</h1>
    </div>;

const Home = ({}) =>
    <div>
        <h1>Home</h1>
    </div>;

const About = ({}) =>
    <div>
        <h1>About</h1>
    </div>;

const NotFound = ({}) =>
    <div>
        <h1>NotFound</h1>
    </div>;

class App extends React.Component {
  render () {
    return (
      <div>
          <Admin />
      </div>
    );
  }
}

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Index}/>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
        </Route>
    </Router>
), document.getElementById('app'));
