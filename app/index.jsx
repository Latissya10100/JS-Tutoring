import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
          <h1>Reload Void </h1>
        <AwesomeComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
