import styled from "styled-components";
import { useState } from "react";
import PulsanteCounter from "../PulsanteCounter";
import Title from "../Title";
import Window from "../Window";

const Home = () => {
  const [counter, setCounter] = useState(0);

  const Main = styled.div`
    width: 100%;
    background-color: #fff;
    min-height: 300px;
    border-radius: 10px;
    padding: 20px;
  `;

  return (
    <Main>
      <Title title="Home" />
      <Window totale={counter} />
      <PulsanteCounter counter={counter} setCounter={setCounter} />
    </Main>
  );
};

export default Home;
