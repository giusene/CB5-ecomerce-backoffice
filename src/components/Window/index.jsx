import styled from "styled-components";

const Window = ({ totale }) => {
  const Totale = styled.p`
    font-size: 18px;
  `;

  return <Totale>Totale: {totale}</Totale>;
};

export default Window;
