import React, { useState } from 'react';

const Greeting = () => {

  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  }

  return (
    <div>
      <button onClick={changeTextHandler}>Click</button>
      <h2>Hello World</h2>
      {!changedText && <p>It's good to see you!</p>}
      {changedText && <p>Changed!</p>}
    </div>
  )
}

export default Greeting;