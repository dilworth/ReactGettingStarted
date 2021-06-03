import React, { Component, useState } from 'react';


function Button(props) {
    const handleClick = () => props.onClickFunction(props.increment);
    
    return (
        <button onClick={handleClick}>
            +{props.increment}
        </button>
    );
};

function Display(props) {
    return (
        <div>{props.message}</div>
    );
}

function App() {
    const [counter, setCounter] = useState(0);
    console.log("Counter before incrementCounter: " + counter);
    const incrementCounter = (incrementValue) => setCounter(counter + incrementValue);
    console.log("incrementCounter: " + incrementCounter);



    return (
        <div>
            <Button onClickFunction={incrementCounter} increment={1} />
            <Button onClickFunction={incrementCounter} increment={5} />
            <Button onClickFunction={incrementCounter} increment={10} />
            <Button onClickFunction={incrementCounter} increment={100} />
            <Display message={counter} />
            <div>Hello</div>
            <p>paragraph</p>
        </div>
    );
}


export class ButtonCounter extends Component {
    static displayName = ButtonCounter.name;

   
  render () {
      return (
          <App />
     )
  }
}

