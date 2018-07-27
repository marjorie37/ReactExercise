import styled from "styled-components"
import { Button } from "reactstrap"

const StyledButton = styled(Button) `
font-size:1.3rem;
color: pink;
background: orange;
border-color: orange;
border-radius: 5px;

&:hover {
    background: "white";
    border-color: "white";
    color : "darkkhaki";
}`




export { StyledButton }