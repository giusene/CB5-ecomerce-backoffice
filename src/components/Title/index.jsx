import styled, { css } from "styled-components";

const Title = ({ title }) => {
  const Title = styled.h1`
    color: #333;
    font-size: 40px;

    /* ${props =>
      props.primary &&
      css`
        background: palevioletred;
        color: blue;
        font-size: 10px;
      `} */
  `;

  return (
    <>
      <Title>{title}</Title>
      {/* <Title primary>{title}</Title> */}
    </>
  );
};

export default Title;
