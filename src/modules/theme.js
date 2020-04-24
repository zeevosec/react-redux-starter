import { createMuiTheme } from '@material-ui/core';

/*

Create your theme here

*/
const theme = createMuiTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 12,

    body1: {
      fontSize: 18,
    },
  },
});

export default theme;
