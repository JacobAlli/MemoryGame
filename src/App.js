import React, { Component } from 'react';
import logo from './logo.svg';
import characters from "./Characters.json";
import CharacterCard from "./components/Body/characters.js";
import Wrapper from "./components/Wrapper/index.js"
import "./App.css"




class App extends Component {

  state = {
    score: 0,
    topscore: 0,
    clicks: [],
    characters
  };



checkClick = id => {
    if(this.state.clicks.includes(id)){
      this.setState({ score: 0, clicks: []});

    } 
    else {
      if (this.state.score + 1 > this.state.topscore) {
        this.setState({
            topscore: this.state.score + 1
        })
      }
      this.state.clicks.push(id)
      this.setState({ score: this.state.score + 1});
    }
};




handleOnchange = (id) => {
    this.checkClick(id)
    this.shuffle(this.state.characters)
};




shuffle = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}




render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Clicky Game</h1>
        </header>
        <p className="App-intro">
          Score by NOT clicking the same image twice.
        </p>
        <ul>
            <li>SCORE: {this.state.score}</li>
            <li>TOPSCORE: {this.state.topscore}</li>
        </ul>
        <Wrapper >
            {this.state.characters.map(characters => (
              <span key={characters.id}>
                <CharacterCard
                  handleOnchange={this.handleOnchange}
                  id={characters.id}
                  image={characters.image}
                />
                </span>
            ))}
          </Wrapper>
      </div>
    );
  }
}

export default App;
