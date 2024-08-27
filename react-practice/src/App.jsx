import { useState, useEffect } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  console.log("--App--");
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(false);
  const onClickCountUp = () => {
    setNum((prev) => prev + 1);
  };
  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        isShowFace || setIsShowFace(true);
      } else {
        isShowFace && setIsShowFace(false);
      }
    }
  }, [num]);

    return (
    <>
      <h1 style={{color: "red"}}>Hello World</h1>
      <ColorfulMessage color="blue">what's up?</ColorfulMessage>
      <ColorfulMessage color="green">good.</ColorfulMessage>
      <button onClick={onClickCountUp}>count up</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>(^o^)</p>}
    </>
  )
}
