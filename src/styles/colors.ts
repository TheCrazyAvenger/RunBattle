import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import merge from 'deepmerge';
import {
  MD3DarkTheme,
  MD3LightTheme,
  adaptNavigationTheme,
} from 'react-native-paper';

const PaperTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: 'rgb(255, 107, 53)',
    onPrimary: 'rgb(255, 255, 255)',
    primaryContainer: 'rgb(255, 233, 224)',
    onPrimaryContainer: 'rgb(140, 45, 0)',
    secondary: 'rgb(0, 180, 171)',
    onSecondary: 'rgb(255, 255, 255)',
    secondaryContainer: 'rgb(197, 248, 242)',
    onSecondaryContainer: 'rgb(0, 85, 80)',
    tertiary: 'rgb(255, 193, 7)',
    onTertiary: 'rgb(255, 255, 255)',
    tertiaryContainer: 'rgb(255, 234, 168)',
    onTertiaryContainer: 'rgb(153, 115, 0)',
    error: 'rgb(229, 57, 53)',
    onError: 'rgb(255, 255, 255)',
    errorContainer: 'rgb(255, 218, 214)',
    onErrorContainer: 'rgb(95, 33, 32)',
    background: 'rgb(255, 251, 250)',
    onBackground: 'rgb(32, 32, 32)',
    surface: 'rgb(255, 255, 255)',
    onSurface: 'rgb(32, 32, 32)',
    surfaceVariant: 'rgb(245, 245, 245)',
    onSurfaceVariant: 'rgb(117, 117, 117)',
    outline: 'rgb(189, 189, 189)',
    outlineVariant: 'rgb(224, 224, 224)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(48, 48, 48)',
    inverseOnSurface: 'rgb(255, 255, 255)',
    inversePrimary: 'rgb(255, 171, 145)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(250, 250, 250)',
      level2: 'rgb(245, 245, 245)',
      level3: 'rgb(240, 240, 240)',
      level4: 'rgb(238, 238, 238)',
      level5: 'rgb(235, 235, 235)',
    },
    surfaceDisabled: 'rgba(32, 32, 32, 0.12)',
    onSurfaceDisabled: 'rgba(32, 32, 32, 0.38)',
    backdrop: 'rgba(48, 48, 48, 0.4)',
  },
};

const PaperDarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: 'rgb(255, 150, 103)',
    onPrimary: 'rgb(80, 25, 0)',
    primaryContainer: 'rgb(140, 45, 0)',
    onPrimaryContainer: 'rgb(255, 233, 224)',
    secondary: 'rgb(128, 219, 212)',
    onSecondary: 'rgb(0, 55, 52)',
    secondaryContainer: 'rgb(0, 85, 80)',
    onSecondaryContainer: 'rgb(197, 248, 242)',
    tertiary: 'rgb(255, 213, 79)',
    onTertiary: 'rgb(77, 57, 0)',
    tertiaryContainer: 'rgb(153, 115, 0)',
    onTertiaryContainer: 'rgb(255, 234, 168)',
    error: 'rgb(242, 136, 133)',
    onError: 'rgb(96, 20, 16)',
    errorContainer: 'rgb(140, 45, 0)',
    onErrorContainer: 'rgb(255, 218, 214)',
    background: 'rgb(18, 18, 18)',
    onBackground: 'rgb(224, 224, 224)',
    surface: 'rgb(32, 32, 32)',
    onSurface: 'rgb(224, 224, 224)',
    surfaceVariant: 'rgb(66, 66, 66)',
    onSurfaceVariant: 'rgb(189, 189, 189)',
    outline: 'rgb(138, 138, 138)',
    outlineVariant: 'rgb(66, 66, 66)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(224, 224, 224)',
    inverseOnSurface: 'rgb(48, 48, 48)',
    inversePrimary: 'rgb(140, 45, 0)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(40, 40, 40)',
      level2: 'rgb(45, 45, 45)',
      level3: 'rgb(50, 50, 50)',
      level4: 'rgb(52, 52, 52)',
      level5: 'rgb(55, 55, 55)',
    },
    surfaceDisabled: 'rgba(224, 224, 224, 0.12)',
    onSurfaceDisabled: 'rgba(224, 224, 224, 0.38)',
    backdrop: 'rgba(48, 48, 48, 0.4)',
  },
};

const {LightTheme, DarkTheme} = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

export const CombinedDefaultTheme = merge(LightTheme, PaperTheme);
export const CombinedDarkTheme = merge(DarkTheme, PaperDarkTheme);

export const commonColors = {
  lightRed: 'rgba(255, 50, 50, 0.5)',
  lightGreen: 'rgba(50, 200, 50, 0.5)',
  lightPrimary: 'rgba(255, 107, 53, 0.2)',
};
