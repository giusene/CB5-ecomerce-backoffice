import { useState } from "react";
import PulsanteCounter from "../PulsanteCounter";
import Window from "../Window";
import styles from "./styles.module.scss";

const Home = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className={styles.main}>
      <h1>Primary Component</h1>

      <Window totale={counter} />
      <PulsanteCounter counter={counter} setCounter={setCounter} />
    </div>
  );
};

export default Home;
