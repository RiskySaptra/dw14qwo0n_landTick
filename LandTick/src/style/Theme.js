import {DefaultTheme} from 'react-native-paper';

export const Light = {
  ...DefaultTheme,
  dark: false,
  roundness: 8,
  colors: {
    primary: '#0264d3',
    accent: '#03dac4',
    background: '#f6f6f6',
    surface: 'white',
    error: '#B00020',
    text: '#393a42',
    onBackground: '#000000',
    onSurface: '#000000',
  },
};

export const Dark = {
  ...DefaultTheme,
  dark: true,
  mode: 'adaptive',
  colors: {
    ...DefaultTheme.colors,
    primary: '#BB86FC',
    accent: '#03dac6',
    background: '#121212',
    surface: '#121212',
    error: '#CF6679',
    onBackground: '#FFFFFF',
    onSurface: '#FFFFFF',
    text: 'white',
  },
};
