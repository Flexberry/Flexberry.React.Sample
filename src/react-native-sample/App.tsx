import { Navigation } from './Navigation';
import { StyleSheet } from 'react-native';

import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { expo as appName } from './app.json';

export default function App() {
  return (
    <PaperProvider>
      <Navigation />;
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName.name, () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});