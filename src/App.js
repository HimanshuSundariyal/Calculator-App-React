import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Keys from './components/keys';

class App extends Component {
	state ={
		numbers: '',
		result: ''
	}
	onpress = (numbervalue) => {
		this.setState(function (prevState) {
			return {
				numbers: prevState.numbers + numbervalue
			};
		});
	}

	calculate = () => {
		var total = eval(this.state.numbers);
		this.setState({ result : total });
	}

	resetcalc = () => {
		this.setState({numbers: '', result:''});
	}

	render() {
    return (
      <div className="App">
			<div className="container">
			  <div className="calc-body">
				<div className="calc-screen">
				  <div className="calc-operation">{this.state.numbers}</div>
				  <div className="calc-typed">{this.state.result}<span className="blink-me">_</span></div>
				</div>
				<div className="calc-button-row">
				  <div className="button c" onClick={this.resetcalc}>C</div>
					<Keys numbervalue="≠" onpress={this.onpress}/> 
					<Keys numbervalue="%" onpress={this.onpress}/> 
					<Keys numbervalue="/" onpress={this.onpress}/> 
				</div>
				<div className="calc-button-row">
				<Keys numbervalue="7" onpress={this.onpress}/>
				<Keys numbervalue="8" onpress={this.onpress}/>
				<Keys numbervalue="9" onpress={this.onpress}/>
			  <Keys numbervalue="x" onpress={this.onpress}/> 		
				</div>
				<div className="calc-button-row">
				<Keys numbervalue="4" onpress={this.onpress}/>
				<Keys numbervalue="5" onpress={this.onpress}/>
				<Keys numbervalue="6" onpress={this.onpress}/>
				<Keys numbervalue="-" onpress={this.onpress}/> 
				</div>
				<div className="calc-button-row">
				<Keys numbervalue="1" onpress={this.onpress}/>
				<Keys numbervalue="2" onpress={this.onpress}/>
				<Keys numbervalue="3" onpress={this.onpress}/>
				<Keys numbervalue="+" onpress={this.onpress}/> 
				</div>
				<div className="calc-button-row">
				  <div className="button">.</div>
				  <Keys numbervalue="0" onpress={this.onpress}/>
				  <div className="button">
					</div>
					  <div className="button l" onClick={this.calculate}>=</div>
				  </div>
				</div>
			  </div>        
      </div>
    );
  }
}

export default App;
