import React, { Component } from 'react'
import styled from 'styled-components';
import { border } from './../../colors';
import logo from './../../../assets/images/logo.png';


const ChatListWrapper = styled.div`
  height: 100%;
  position: fixed;
  width: 250px;
  text-align: center;
`;

const Seperator = styled.div`
  border-bottom: 2px solid ${border};
  width: 60%;
  margin: auto;
`;

const PeopleWrapper = styled.div`
  
`;

const CategoryWrapper = styled.div`
  
`;

const Person = styled.p`
  color: black;
`;

const Category = styled.p`
  color: black;
`;

const Subtitle = styled.p`
  padding-top 10px;
  font-weight: 700;
  font-size: 14px;
`;

const Logo = styled.img`
  padding-top: 15px;
  width: 150px;
`;



export default class ChatList extends Component {
  render() {
    return (
      <ChatListWrapper>
        <Logo src={logo}/>
        <Subtitle>Specialties</Subtitle>
        {this.props.categories.map((category, key) => 
          <CategoryWrapper  key={key}>
            <Category onClick={() => this.props.changeFocus(category, 'category', key)}>{category}</Category>
            <Seperator/>
          </CategoryWrapper>
        )}
        <Subtitle>Contacts</Subtitle>
        {this.props.people.map((person, key) => 
          <PeopleWrapper key={key} >
          <Person onClick={() => this.props.changeFocus(person, 'person', key)}>{person}</Person>
          <Seperator/>
          </PeopleWrapper>
        )}
      </ChatListWrapper>
    )
  }
}
