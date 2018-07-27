import Styled from "styled-components";

export const RootContainer = Styled.div`
    min-height:100vh;
    width:100%;
    display:flex;
    flex-direction:column;
    ${props => console.log(props)}
`;
