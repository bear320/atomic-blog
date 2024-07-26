const SlowComponent = () => {
  const words = Array.from({ length: 1000 }, () => "WORD");
  return (
    <ul>
      {words.map((w, idx) => (
        <li key={idx}>
          {idx}: {w}
        </li>
      ))}
    </ul>
  );
};

export default SlowComponent;
