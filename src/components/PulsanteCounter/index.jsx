import styled from "styled-components";

const PulsanteCounter = ({ counter, setCounter }) => {
  return (
    <Container>
      <Paragraph>secondary component</Paragraph>
      <CounterBtn onClick={() => setCounter(counter + 1)}>
        counter +1
      </CounterBtn>
    </Container>
  );
};

const Container = styled.div`
  background-color: red;
  color: white;
`;

const Paragraph = styled.p`
  font-size: 15px;
  color: blueviolet;
`;

const CounterBtn = styled.button`
  padding: 5px 10px;
  background: #000;
  color: white;
`;

export default PulsanteCounter;
