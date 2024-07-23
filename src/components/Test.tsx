import { useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);

  const words = Array.from({ length: 100 }, () => "Word");

  return (
    <div>
      <h1>Slow?!?</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>
      <ul>
        {words.map((w, idx) => (
          <li key={idx}>
            {idx}: {w}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
