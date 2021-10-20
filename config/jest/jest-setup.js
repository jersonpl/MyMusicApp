import {NativeModules} from 'react-native';
import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';

NativeModules.SettingsManager = {
  settings: {
    AppleLocale: 'es',
  },
};

jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);
