/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import App from '../App';

// Mock react-native-webview
jest.mock('react-native-webview', () => {
  const { View } = require('react-native');

  return {
    __esModule: true,
    default: View,
  };
});

test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<App />);
  });
});
