import React, { Component } from 'react'
import styled from 'styled-components';
import steth from './../../../assets/images/steth.jpg';


const FocusedUserWrapper = styled.div`
`;

const Image = styled.image`
  height:  200px;
  width: 200px;
`;

export default class FocusedPost extends Component {
  render() {
    return (
      <FocusedUserWrapper>
        <Image src={steth}/>
      </FocusedUserWrapper>
    )
  }
}
