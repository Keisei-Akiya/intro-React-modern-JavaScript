import React from 'react';
import {ColorfulMessage} from './components/ColorfulMessage.jsx';

const onClickButton = () => alert();

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Hello, React!</h1>
      <ColorfulMessage color="blue">What's up?</ColorfulMessage>
      <ColorfulMessage color="green">good.</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </div>
  );
}

export default App;