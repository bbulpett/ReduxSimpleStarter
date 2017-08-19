import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyDj3JtxG-XjdOFyOKmfG_TlEywTCYt7K9s';

// Create a new component. This component should produce some HTML

const App = () => {       // <- App is a class of component
  return <div>Hi!</div>;  // <- that is JSX
}
// ^^^ Const is an ES6 (ES2016) thing. Declares variable similar to var. It is a "constant", will never change.

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));