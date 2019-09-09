import React, {Component} from 'react';
import './App.css';
import logo from './logo.svg';
import Content from './Content';

let x = 10;
class App extends Component{
 render() {
 return (
 <div className="App">
 <Content name="Jantapa" num="{x}"/>
 </div>
 );
 }
}
export default App;
