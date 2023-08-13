import React, { useState } from "react";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);
  return (
    <div>
      <h1>hello world!</h1>
      {!changeText && <p>It's good to see you!</p>}
      {changeText && <p>Changed!</p>}
      <button onClick={() => setChangeText(!changeText)}>Change Text</button>
    </div>
  );
};

export default Greeting;
