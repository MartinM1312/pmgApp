import React from 'react';
import {LogBox} from 'react-native';
import {MainView} from './src/views/MainView/MainView';
LogBox.ignoreLogs([
  'Warning: ...',
  'componentWillReceiveProps',
  'componentWillMount',
  'ReactImageView',
]);
function App(): React.JSX.Element {
  return <MainView />;
}

export default App;
