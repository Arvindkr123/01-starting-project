import React, { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);
  return (
    <div>
      <h1>hello world!</h1>
      {!changeText && <Output>It's good to see you!</Output>}
      {changeText && <Output>Changed!</Output>}
      <button onClick={() => setChangeText(!changeText)}>Change Text</button>
    </div>
  );
};

export default Greeting;
