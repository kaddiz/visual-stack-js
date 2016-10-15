import React from 'react'

export default class StackBox extends React.Component {
  state = {
    data: ''
  }

  pushClick(e) {
    if (this.state.data !== '') {
      this.props.stack.push(this.state.data)
      this.setState({
        data: ''
      })
      this.props.changeStack(e) 
    }
  }
  popClick(e) {
    var item = this.props.stack.pop()
    this.props.changeStack(e)
  }
  copyClick(e) {
    this.props.copy()
    this.props.changeStack(e)
  }
  clearClick(e) {
    this.props.stack.clear()
    this.props.changeStack(e)
  }
  changeInput(e) {
    this.setState({
      data: e.target.value 
    })
  }
  enterKeyUp(e) {
    if (e.keyCode === 13) ::this.pushClick()
  }

  render() {
    var stack = this.props.stack
    var items = []
    stack.resetPointer()
    var item = stack.getNext()
    while (item !== null) {
      items.push(item)
      item = stack.getNext()
    }
    return <div class='stack-box'>
      <div class='stack-box__state'>
        S i z e : <span>{items.length}</span>
      </div>
      <ul class='stack-box__stack'>{
        items.map((item, index) => {
          return <li key={index}>{item}</li>
        })
      }</ul>
      <div class='stack-box__buttons'>
        <input name='stack-item' type='text' onKeyUp={::this.enterKeyUp} onChange={::this.changeInput} value={this.state.data} required />
        <button class='button push' onClick={::this.pushClick}>P u s h</button>
        <button class='button push' onClick={::this.popClick}>P o p</button>
        <button class='button push' onClick={::this.copyClick}>C o p y</button>
        <button class='button' onClick={::this.clearClick}>C l e a r</button>
      </div>
    </div>
  }
}
