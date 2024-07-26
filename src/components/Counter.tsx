import { useState } from "react";

const Counter = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Slow?!?</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>

      {children}
    </div>
  );
};

export default Counter;
