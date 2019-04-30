import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import Routes from './src/routes';

const App = () => {
  SplashScreen.hide();

  return (
    <Routes />
  );
};

export default App;
