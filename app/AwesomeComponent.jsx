import React from 'react';
import axios from 'axios';

class AwesomeComponent extends React.Component {

    constructor(props) {
    super(props);

        this.setState({
           startImg: this.imgs,
            imgs: [
                './img/artic.jpg',
                './img/backstar.jpg'
            ]
        });
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    onLike() {

    }

    sayHello() {

    }

  render() {
        console.log(this.state);
    return (
      <div>

      </div>
    );
  }

}

export default AwesomeComponent;
