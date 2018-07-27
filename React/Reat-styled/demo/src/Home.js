import React, { Component } from 'react'
import styled from 'styled-components';

const Paragraph = styled.h1`
  font-size: ${props => (props.big ? "1.9" : "1.5")};
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Input = styled.input`
padding : ${props => props.big ? "1.9" : "1.5"};
margin : 0.5em;
color : palegoldenrod;
border : ${props => (props.gold ? "gold" : "none")};
border-radius : 3px;
background : ${props => (props.gold ? "gold" : "none")};`

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (<div>
            <Input type="email" value="@XX" />
            <Input big type="text" placeholder="text" />
            <Input big gold type="text" placeholder="text" />
            <Wrapper>
                <Paragraph big>Jolie Home</Paragraph>
                <Paragraph>Jolie Home</Paragraph>
            </Wrapper>
        </div>
        );
    }
}

export default Home;