/**
 * PersonAlchemy Mobile App
 * WebView implementation for personalchemy.io
 *
 * @format
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import WebViewScreen from '@/screens/WebView';

function App() {
  return (
    <SafeAreaProvider>
      <WebViewScreen />
    </SafeAreaProvider>
  );
}

export default App;
