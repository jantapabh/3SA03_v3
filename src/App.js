import React from 'react';
import CharacterCard from './CharacterCard';
import './App.css';
import _ from 'lodash'
import style from './App.css'
import { Button } from 'reactstrap';



let message = 'HELLOJANJOA'
const prepareStateFromWord = (given_word) => {
  let word = given_word.toUpperCase()
  let chars = _.shuffle(Array.from(word))
  
  return {
  word,
  chars,
  attempt: 1,
  guess: [],
  completed: false
  }
 }

class App extends React.Component {

  state = prepareStateFromWord(message)

  activationHandler = (c) => {
    let guess = [...this.state.guess, c]
    this.setState({guess})
    if(guess.length == this.state.chars.length){
    if(guess.join('').toString() == this.state.word){
    this.setState({guess: [], completed: true})
    }else{
    this.setState({guess: [], attempt: this.state.attempt + 1})
    }
    }
   }

  render() {
    return (
      
        
      <div>
        {

<Button color="primary" size="lg">Large Button</Button>{' '}
          Array.from(this.state.chars).map((item, index) => (
            <CharacterCard
              value={item}
              key={index}
              activationHandler={this.activationHandler}
            />
          ))   
      
        }


        <h2 className="activeCard">Choose</h2>
        {
          Array.from(this.state.guess).map((item, index) => (
            <CharacterCard
              value={item}
              key={index}
              activationHandler={this.activationHandler}
            />
          ))

        }
        <div>Attemp {this.state.attempt}</div>
        {
            
          this.state.completed && <h1>"Correct nowwwww"</h1>
        
        }
        
      </div>


    )
  }
}

export default App;