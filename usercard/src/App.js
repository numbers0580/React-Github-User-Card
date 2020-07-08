import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './App.css';

import Header from './support/Header.js'
import SearchID from './support/SearchID';
import SearchUser from './support/SearchUser';
import OneCard from './support/OneCard';
import UserList from './support/UserList';

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

    //I was unable to get multiple axios.get() calls to work without errors
    //Modified the below axios call from info found here: https://www.storyblok.com/tp/how-to-send-multiple-requests-using-axios
    axios.all([axios.get('https://api.github.com/users/numbers0580'), axios.get('https://api.github.com/users/numbers0580/followers')])
      .then(axios.spread((...fetches) => {
        this.setState({userData: fetches[0].data});
        this.setState({userFollowers: fetches[1].data});
      }))
      .catch(mountError => {
        console.log('Error getting user from axios');
      })
  }

  findUser = enteredName => {
    axios.all([axios.get(`https://api.github.com/users/${enteredName}`), axios.get(`https://api.github.com/users/${enteredName}/followers`)])
      .then(axios.spread((...searched) => {
        this.setState({userData: searched[0].data});
        this.setState({userFollowers: searched[1].data});
      }))
      .catch(searchError => {
        console.log('Error finding entered username in axios');
      })
  };

  render() {
    console.log('Rendering App');
    console.log('Getting User\'s info: ', this.state.userData);
    console.log('Checking the Name:', this.state.userData.name);
    console.log('Getting Follower\'s info: ', this.state.userFollowers);
    //console.log('Checking random Login', this.state.userFollowers[0].login);
    return (
      <div className='App'>
        <BrowserRouter>
          <Route path='/'>
            <Header />
          </Route>
          <Route path='/usersearch'>
            <SearchUser findName={this.findUser} passedUser={this.state.userData} passedFollowers={this.state.userFollowers} />
          </Route>
          <Route path='/idsearch'>
            <SearchID />
          </Route>
        </BrowserRouter>
        {/* <SearchForm />
        <UserList /> */}
      </div>
    );
  }
}

export default App;