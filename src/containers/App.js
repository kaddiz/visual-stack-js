import React from 'react'
import StackBox from '../components/StackBox'
import Stack from '../Stack'

export default class App extends React.Component {
  constructor() {
    super()
  }

  state = {
    left: new Stack(),
    right: new Stack()
  }

  changeStack(e) {
    this.setState({
      left: this.state.left,
      right: this.state.right 
    })
  }

  copyLeftToRight() {
    this.state.right.copy(this.state.left)
  }

  copyRightToLeft() {
    this.state.left.copy(this.state.right)
  }

  render() {
    return <div class='wrapper'>
      <header>
        <h1>S t a c k</h1>
      </header>
      <main>
        <StackBox changeStack={::this.changeStack} copy={::this.copyLeftToRight} stack={this.state.left} />
        <div class='similar'>Similar: {
          (this.state.left.similar(this.state.right)) ? <span>TRUE</span> : <span>FALSE</span>
        }</div>
        <StackBox changeStack={::this.changeStack} copy={::this.copyRightToLeft} stack={this.state.right} />
      </main>
    </div>
  }
}
