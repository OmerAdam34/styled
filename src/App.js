import styled from "styled-components";

// tagged template literal
const BasicTitle = styled.h1`
  text-transform: capitalize;
`;

const DefaultButton = styled.button`
  background: purple;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  padding: 0.25rem;
  width: 200px;
  text-align: center;
`;

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <BasicTitle>styled component</BasicTitle>

      <DefaultButton>click me</DefaultButton>
    </div>
  );
}

export default App;
