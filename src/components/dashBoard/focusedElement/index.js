import React, { Component } from 'react'
import styled from 'styled-components';
import FocusedUser from './focusedUser';
import FocusedPost from './focusedPost';
import Chat from './../chat';
import Posts from './../posts';


const FocusedElementWrapper = styled.div`
  padding-top: 20px;
`;

export default class FocusedElement extends Component {
  render() {
    const {focus, posts, peopleBio, focusSubject, focusType} = this.props;
    const determineFocus = () => {
      if (focusType === "person"){
        return <FocusedUser user={peopleBio[focusSubject]}/>
      } else if (focus === "category") {
        // return <FocusedPost category={category[focusSubject]}/>
      }
    }
    return (
      <FocusedElementWrapper>
        {determineFocus()}
      </FocusedElementWrapper>
    )
  }
}
