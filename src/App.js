import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './HelloWorld';

// const foo = 'lol';

const App = () => {
  return (
    <div>
      <HelloWorld />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
