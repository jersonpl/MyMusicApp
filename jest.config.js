const {defaults} = require('jest-config');

module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.ts?$': 'ts-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest/assetsTransformer.js',
  },
  moduleFileExtensions: ['tsx', ...defaults.moduleFileExtensions],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)?$',
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'identity-obj-proxy',
  },
  transformIgnorePatterns: [
    'node_modules/(?!@react-native|react-native|react-native-elements)',
  ],
  setupFiles: ['<rootDir>/config/jest/jest-setup.js'],
};
