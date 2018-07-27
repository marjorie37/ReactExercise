import styled from "styled-components";

const RootContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  ${props => console.log(props)};
`;

export default RootContainer;
