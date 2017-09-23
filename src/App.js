import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
}, {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
}, ];


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: list,
      colors: {'odd': 'red', 'even': 'green'}
    };
  }

  color(number) {
    return number % 2 === 0 ? 'red' : 'green';
  }

  render() {
    const randomNumber = parseInt(10000 * Math.random(), 10);
    return (
      <div className="App">
        <div className="App-header">
          { this.state.list.map(item =>
              <div key={item.objectID} style={{color: this.color(item.objectID)}}>
                <span>
                  <a href={item.url}>{item.title}</a>
                </span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
