import Condition from "../components/Condition";
import Count from "../components/Count";

const Home = () => {
  const title = "React World!";
  return (
    <div>
      <h1>Home</h1>
      {/* {Component} */}
      <Count name={title + 1} click="Click First"></Count>
      <Count name={title + 2}></Count>
      <Count name={title + 3} click="Click Third"></Count>
      <hr></hr>
      {/* {조건 랜더링} */}
      <Condition></Condition>
    </div>
  );
};

export default Home;
