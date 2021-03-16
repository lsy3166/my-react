import React, { useState } from "react";
function Count(props) {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(count + 1);
  };

  const clickName = props.click || "Click Defualt";

  return (
    <div>
      <span className="m-1">Hello, {props.name} </span>

      <button
        type="button"
        className="btn btn-primary m-1"
        data-toggle="button"
        aria-pressed="false"
        onClick={onClick}
      >
        {clickName} : {count}
      </button>
    </div>
  );
}

export default Count;
