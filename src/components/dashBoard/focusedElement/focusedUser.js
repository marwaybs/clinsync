import React, { Component } from 'react'
import styled from 'styled-components';
import steth from './../../../assets/images/steth.jpg';
import { border, background } from './../../colors';


const FocusedUserWrapper = styled.div`
  border: 3px solid ${border};
  padding: 15px 30px 30px;
  max-width: 640px;
  display: flex;
`;

export const VerifiedBadge = styled.span`
  border-radius: 10%;
  background-color: green;
  padding: 5px 10px;
  color: ${background};
  margin-right:  10px;
  font-size: 13px;
  transition: all 0.2s;
`;

const Image = styled.img`
      margin: 20px 30px 0 0;
      height: 200px;
      object-fit: contain;
      align-self: flex-start;
`;

const TextWrapper = styled.span`
  flex: 1 1 auto;
`;

const Name = styled.p`
  font-weight: 600;
  font-size: 16px;
`;

const Bio = styled.p`
  font-size: 14px;
`;

const Focus = styled.p`
  font-size: 13px;
  color: grey;
`;

export default class FocusedUser extends Component {
  render() {
    console.log(this.props);
    const user =  this.props.user;
    return (
      <FocusedUserWrapper>
        <Image src={user.image}/>
        <TextWrapper>
          <Name>{user.name}</Name>
          <VerifiedBadge>Verified</VerifiedBadge>
          <Bio>{user.bio}</Bio>
          <Focus>{user.focus}</Focus>
        </TextWrapper>
      </FocusedUserWrapper>
    )
  }
}
