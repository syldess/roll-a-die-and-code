import './App.css';
import React, { Component } from 'react';
import Die from './Die';

class App extends Component {
  state = {
    diePlaceholder: "?",
  };

  render() {
    return (
      <>
        <div
          style={{
            backgroundColor: '#000',
          }}
        >
          <h2>>roll_a_die_and_code()</h2>
          <div
            style={{
              width: '250px',
              height: '250px',
              borderRadius: '2rem',
              position: 'absolute',
              top: '0',
              bottom: '0',
              left: '0',
              right: '0',
              margin: 'auto',
              padding: '1rem',
              textAlign: 'center',
            }}
          >
            <p>Want to tackle some coding problems?</p>
            <Die />
          </div>
        </div>
      </>
    );
  }
}

export default App;
