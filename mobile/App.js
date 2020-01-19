import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import Routes from './src/pages/routes';

YellowBox.ignoreWarnings([
  'Unrecognized Websocket'
]);

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
      <Routes />
    </>
  );
}