import './App.css';
import React, { useState } from 'react';
import Die from './Die';

function App() {
  const [diePlaceholder] = useState("?");
  const [dieDefaultUrl] = useState("#");
  const [appTitle] = useState(">roll_a_die_and_code()")

  return (
    <>
      <div
        style={{
          backgroundColor: '#000',
        }}
      >
        <h2>{appTitle}</h2>
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
          <Die diPlaceholder={diePlaceholder} dieDefaultUrl={dieDefaultUrl} />
        </div>
      </div>
    </>
  );
}

export default App;
