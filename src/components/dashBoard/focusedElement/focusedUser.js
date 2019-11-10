import React, { Component } from 'react'
import styled from 'styled-components';
import steth from './../../../assets/images/steth.jpg';


const FocusedUserWrapper = styled.div`
  border: 3px solid blue;
  padding: 20px 40px 40px;
  max-width: 640px;
  display: flex;
`;

const Image = styled.img`
      margin: 20px 30px 0 0;
      width: 200px;
      object-fit: contain;
      align-self: flex-start;
`;

const TextWrapper = styled.span`
  flex: 1 1 auto;
`;


export default class FocusedUser extends Component {
  render() {
    return (
      <FocusedUserWrapper>
        <Image src={steth}/>
        <TextWrapper>
          Cat
        </TextWrapper>
      </FocusedUserWrapper>
    )
  }
}
