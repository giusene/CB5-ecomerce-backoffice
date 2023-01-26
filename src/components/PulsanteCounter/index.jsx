const PulsanteCounter = ({ counter, setCounter }) => {
  return (
    <div>
      <p>secondary component</p>
      <button onClick={() => setCounter(counter + 1)}>counter +1</button>
    </div>
  );
};

export default PulsanteCounter;
