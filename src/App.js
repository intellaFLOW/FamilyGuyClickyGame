import React, { Component } from 'react';
import './App.css';
import Pictures from './components/Pictures';
import characters from './components/characters.json';

class App extends Component {
  //Set initial state
  state = { 
    points: 0,
    characters //pulls characters.json into array
  };


  pointsIncrement = id => {
    //randomizing Character pictures
    const shuffle = () => {
      for (let i=0; i < characters.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [characters[i], characters[j]] = [characters[j], characters[i]];
      }
      return characters;
    };
    //Filters characters array, puts array into x, finds id of x and filters the passed into id
    let wasCharClickedOn = this.state.characters.filter(x => x.id === id);

    console.log(wasCharClickedOn[0].clickedon);

    // Checks if picture has been clicked already
    if (wasCharClickedOn[0].clickedon === false){
      wasCharClickedOn[0].clickedon = true;
      this.setState({ points: this.state.points + 1 });
    }else{
      for (let i=0; i < characters.length; i++) {
        this.state.characters[i].clickedon = false;
        console.log('Char', i, 'is now', this.state.characters[i].clickedon)
      }  

      this.setState({ points: 0 });
    }
    shuffle();
    console.log('Actual ID:', id);
  }; //PointsIncrement

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Family Guy Memory Game</h1>
        </header>
        <p className="App-intro">
          Click a Character, Click them all, just dont Click the same one twice!
        </p>

        <div>Total Points: {this.state.points}</div>
        <ul>
          <p>Game will reset if the same character is clicked twice.</p>
          <p>Best Possible Score is 24! </p>
        </ul>
        <h4>Good Luck!!!</h4>
        <div className="holdcharacters">
          {this.state.characters.map((Char) =>
             <Pictures 
              key={Char.id}
              onClick={ () => this.pointsIncrement(Char.id) }
              image={Char.image} 
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;