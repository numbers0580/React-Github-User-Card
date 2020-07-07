import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    console.log('Under Construction');
    super();
    this.state = {
      userData: {},
      userFollowers: []
    };
  }

  componentDidMount() {
    console.log('Climbing \'Component-Did\' Mount');
    // axios.get('https://api.github.com/users/numbers0580')
    //   .then(fetched => {
    //     this.setState({userData: fetched.data});
    //   })
    //   .catch(error => {
    //     console.log('Unable to retrieve github user\'s data');
    //   })

    axios.all([axios.get('https://api.github.com/users/alphaseinor'), axios.get('https://api.github.com/users/alphaseinor/followers')])
      .then(axios.spread((...fetches) => {
        this.setState({userData: fetches[0].data});
        this.setState({userFollowers: fetches[1].data});
      }))
      .catch()

    // console.log('Having followers climb the Mount now');
    // axios.get('https://api.github.com/users/numbers0580/followers')
    //   .then(fetchedFollowers => {
    //     this.setState({userFollowers: fetchedFollowers.data});
    //   })
    //   .catch(fError => {
    //     console.log('Unable to retrieve user\'s followers');
    //   })
  }

  render() {
    console.log('Rendering App');
    console.log('Getting User\'s info: ', this.state.userData);
    console.log('Checking the Name:', this.state.userData.name);
    console.log('Getting Follower\'s info: ', this.state.userFollowers);
    //console.log('Checking random Login', this.state.userFollowers[0].login);
    return (
      <div className='App'>
        <h1>Github User Card v 2</h1>
      </div>
    );
  }
}

export default App;