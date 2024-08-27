import {ColorfulMessage} from "./components/ColorfulMessage.jsx";

const App = () => {
  const onClickButton = () => alert();
  return (
    <>
    <h1 style={{color: "red"}}>Hello</h1>
    <ColorfulMessage color="blue">what's up?</ColorfulMessage>
    <ColorfulMessage color="green">good.</ColorfulMessage>
    <button onClick={onClickButton}>button</button>
    </>
  )
}

export default App;