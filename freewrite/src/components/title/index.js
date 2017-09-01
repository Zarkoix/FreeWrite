import React from 'react'
import Paper from 'material-ui/Paper'
import './title.css'

export const EditTitle = (props) => {

return (
  <Paper className="titlePaper" children={
    <h4><contentEditable onChange={(e) => console.log(e)} >Adam</contentEditable></h4>
  } style={{
    fontFamily: 'inherit'
  }}/>
)


}

export default EditTitle
