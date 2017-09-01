import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import IconButton from 'material-ui/IconButton'
import DashboardIcon from 'material-ui/svg-icons/action/dashboard'
import FullscreenIcon from 'material-ui/svg-icons/navigation/fullscreen'
import ExitFullscreenIcon from 'material-ui/svg-icons/navigation/fullscreen-exit'
import Chip from 'material-ui/Chip'
import Avatar from 'material-ui/Avatar'

import EditTitle from './components/title'

import FreeWriteTheme from './theme'
import './App.css'
import EditBody from './components/body/index'

const theme = {

}

const styles = {
  settings: {
    serif: {},
    fontSize: {},
    editorWidth: {
      svg: {
        height: '1rem',
        width: '1rem'
      }
    }
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSerif: false,
      isBig: false,
      isWide: false
    }
  }

  getStyle () {
    return {
      fontFamily: this.state.isSerif ? 'serif' : 'sans-serif',
      fontSize: this.state.isBig ? '1.5em' : '1em',
      width: this.state.isWide ? '80%' : '50%',
      padding: this.state.isWide ? '1em 10%' : '1em 25%'
    }
  }

  toggleSerif () {
    this.setState({ isSerif: !this.state.isSerif })
  }

  toggleFontSize () {
    this.setState({ isBig: !this.state.isBig })
  }

  toggleEditorWidth () {
    this.setState({ isWide: !this.state.isWide })
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={FreeWriteTheme}>
        <div className="background">
          <AppBar
            title={<span className="revivalModern" >
                Edit
              </span>}
            iconElementRight={
              <IconButton>
                <DashboardIcon/>
              </IconButton>
            }
            showMenuIconButton={false}
          />
          <div className="AppContainer" style={this.getStyle()}>
            <EditTitle/>
            <div className="settingsBar" >
              <span className="setting__font" style={!this.state.isSerif ?
                  {
                    fontFamily: 'serif'
                  } : {
                    fontFamily: 'sans-serif'
                  }
                } onClick={() => this.toggleSerif()}>
                F
              </span>
              <span className="setting__fontSize" onClick={() => this.toggleFontSize()}>
                { this.state.isBig ? 'a' : 'A' }
              </span>
              <span className="setting__editorWidth" onClick={() => this.toggleEditorWidth()}>
                { this.state.isWide ?
                  <ExitFullscreenIcon style={styles.settings.editorWidth.svg} color="#888" /> :
                  <FullscreenIcon style={styles.settings.editorWidth.svg} color="#888" /> }
              </span>
            </div>
            <EditBody/>
          </div>
          <Chip onClick={() => window.location = 'https://atowers.info'} labelColor='#424242' style={{
            position: 'absolute',
            right: '0',
            bottom: '0',
            margin: '1em',
          }} className="revivalModern" >
            <Avatar src="https://atowers.info/routes/root/graphics/graphic.png" style={{
              backgroundColor: 'black'
            }} />
            Adam Towers
          </Chip>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
