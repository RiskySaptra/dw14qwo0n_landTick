import React from 'react';
import {Provider as PaperProvider, DarkTheme} from 'react-native-paper';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
// theme
import {Light, Dark} from './src/style/Theme';

export const Main = () => {
  return (
    <PaperProvider theme={Light}>
      <App />
    </PaperProvider>
  );
};
AppRegistry.registerComponent(appName, () => Main);
