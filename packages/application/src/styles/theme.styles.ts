type AvailableColors = 'white' | 'black' | 'red' | 'link' | 'linkActive' | 'success' | 'primary' | 'error' | 'grayLight';

export interface ThemeI {
  colors: Record<AvailableColors, string>;
}

export const theme: ThemeI = {
  colors: {
    white: 'white',
    black: 'black',
    red: 'red',

    grayLight: '#e6e3e3',

    link: 'cornflowerblue',
    linkActive: '#09b8f3',

    success: 'lightgreen',
    primary: 'lightskyblue',
    error: '#b51d1d',
  }
}
