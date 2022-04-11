import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {

  const [simpson, setSimpson] = useState()

  const getSimpson = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
         setSimpson(data[0])
      });
  };

  return (
   <div className="App">
        <h1>{simpson.character}</h1>
        <p>{simpson.quote}</p>
       <img src={simpson.image} alt="" ></img>
      <button type="button" onClick={getSimpson}>Get employee</button>
    </div>
  );
}

export default App;