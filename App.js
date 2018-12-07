import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import LoginForm from './components/loginForm';
import BackgroundImage from './components/background';
class App extends Component {
  render() {
    return (
        <React.Fragment>
            <BackgroundImage />
            <LoginForm />
        </React.Fragment>
    );
  }
}


export default App;

AppRegistry.registerComponent('AwesomeProject', () => App);