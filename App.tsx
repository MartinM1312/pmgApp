import React from 'react';
import {LogBox} from 'react-native';
import {MainView} from './src/views/MainView';
LogBox.ignoreLogs(['Warning: ...']);
function App(): React.JSX.Element {
  return <MainView />;
}

export default App;
