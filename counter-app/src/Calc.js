import React from 'react'

class App extends React.Component {
  state = { 
    firstNum:0,
    secondNum:0,
    res:0
  }

  calcNums = () => {
      this.setState({res:this.state.firstNum + this.state.secondNum})
  }

  render() {
    return(
    <div className="calc-app">
      <span>Калькулятор</span>
      <input type="text" onChange={(e) => this.setState({firstNum :+e.target.value})}/>
      <input type="text" onChange={(e) => this.setState({secondNum :+e.target.value})}/>
      <button onClick={this.calcNums}>Посчитать</button>
      <div>
          {this.state.res}
      </div>
    </div>
  )};
}

export default App;
