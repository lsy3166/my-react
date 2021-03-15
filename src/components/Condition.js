import { useEffect, useState } from "react";
function Condition() {
  const [condition, setCondition] = useState(false);
  const onClick = () => {
    setCondition(!condition);
  };

  useEffect(() => {
    console.log(condition);
  }, [condition]);
  let conditionText = condition ? "True" : "False";

  return (
    <div>
      <div>{conditionText}</div>
      <button onClick={onClick}>Toggle</button>
    </div>
  );
}

export default Condition;
