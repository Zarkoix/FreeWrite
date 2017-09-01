import React from 'react'
import Chip from 'material-ui/Chip'
import Avatar from 'material-ui/Avatar'

export default (props) => (
  <Chip onClick={() => window.location = 'https://atowers.info'} labelColor='#424242' style={{
    position: 'absolute',
    right: '0',
    bottom: '0',
    margin: '1em',
  }} className="revivalModern" >
    <Avatar src="/graphics/selfie.png" style={{
      backgroundColor: 'black'
    }} />
    Adam Towers
  </Chip>
)
