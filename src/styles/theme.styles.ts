type AvailableColors = 'white' | 'black' | 'red' | 'link' | 'linkActive' | 'success' | 'primary';

export interface ThemeI {
  colors: Record<AvailableColors, string>;
}

export const theme: ThemeI = {
  colors: {
    white: 'white',
    black: 'black',
    red: 'red',

    link: 'cornflowerblue',
    linkActive: '#09b8f3',

    success: 'lightgreen',
    primary: 'lightskyblue',
  }
}
