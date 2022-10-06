import styled from "styled-components";

const BasicTitle = styled.h1`
  text-transform: capitalize;
  color: ${(props) => props.special && "red"};
`;

export default BasicTitle;
