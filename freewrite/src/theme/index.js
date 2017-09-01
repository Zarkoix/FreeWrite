import getMuiTheme from 'material-ui/styles/getMuiTheme'

const FreeWriteTheme = getMuiTheme({
  palette: {
    primary1Color: '#212121',
    textColor: '#BDBDBD',
    /*
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    alternateTextColor: white
    */
    canvasColor: '#ffffff'
  },
  appBar: {
    height: 50
  }
})

export default FreeWriteTheme