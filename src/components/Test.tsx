import Counter from "./Counter";
import SlowComponent from "./SlowComponent";

const Test = () => {
  return (
    <div>
      <Counter>
        <SlowComponent />
      </Counter>
    </div>
  );
};

export default Test;
