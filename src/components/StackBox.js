import React from 'react'

export default class StackBox extends React.Component {
  constructor() {
    super()
    this.stoped = false
  }

  state = {
    data: ''
  }

  pushClick(e) {
    if (this.state.data !== '') {
      this.stoped = this.props.stack.push(this.state.data)
    }
    this.props.changeStack(e)
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
        Size: <span>{items.length}</span>
      </div>
      <ul class='stack-box__stack'>{
        items.map((item, index) => {
          return <li class={index === 0 && this.stoped ? 'item' : ''} key={Math.random()}>{item}</li>
        })
      }</ul>
      <div class='stack-box__buttons'>
        <input name='item' type='number' onChange={::this.changeInput} value={this.state.data} />
        <button class='button push' onClick={::this.pushClick}>Push</button>
        <button class='button push' onClick={::this.popClick}>Pop</button>
        <button class='button push' onClick={::this.copyClick}>Copy</button>
        <button class='button' onClick={::this.clearClick}>Clear</button>
      </div>
    </div>
  }
}
