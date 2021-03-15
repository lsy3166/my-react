import React, { useState } from "react";
function Count(props) {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(count + 1);
  };

  const clickName = props.click || "Click Defualt";

  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <button onClick={onClick}>
        {clickName} : {count}
      </button>
    </div>
  );
}

export default Count;
