import React, { Component } from 'react'
import { RichUtils } from 'draft-js'
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor'
import createInlineToolbarPlugin, { Separator } from 'draft-js-inline-toolbar-plugin'
 import 'draft-js-inline-toolbar-plugin/lib/plugin.css' // eslint-disable-line import/no-unresolved
import editorStyles from './editorStyles.css'
import buttonStyles from './buttonStyles.css'
import toolbarStyles from './toolbarStyles.css'
import seperatorStyles from './seperatorStyles.css'

import Paper from 'material-ui/Paper'

import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton
} from 'draft-js-buttons'

const inlineToolbarPlugin = createInlineToolbarPlugin({
  structure: [
    BoldButton,
    ItalicButton,
    UnderlineButton,
    Separator,
    UnorderedListButton,
    OrderedListButton,
    BlockquoteButton
  ]
})

const { InlineToolbar } = inlineToolbarPlugin
const plugins = [inlineToolbarPlugin]
const text = 'In this editor a toolbar with a lot more options shows up once you select part of the text …'

export default class EditBody extends Component {
  constructor(props) {
    super(props)
    this.state = { editorState: createEditorStateWithText(text) }
    this.onChange = (editorState) => this.setState({editorState})
    this.handleKeyCommand = this.handleKeyCommand.bind(this)
  }

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command)
    if (newState) {
      this.onChange(newState)
      return 'handled'
    }
    return 'not-handled'
  }

  focus = () => {
    this.editor.focus()
  }

  render() {
    return (
      <Paper className={editorStyles.editor} onClick={this.focus} children={
        <div>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref={(element) => { this.editor = element }}
            handleKeyCommand={this.handleKeyCommand}
          />
          < InlineToolbar />
        </div>
      } style={{
        color: '#424242',
        padding: '1rem',
        minHeight: '65vh',
        fontFamily: 'inherit'
      }} />
    )
  }
}
