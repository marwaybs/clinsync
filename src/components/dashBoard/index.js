import React, { Component } from 'react'
import styled from 'styled-components';
import ChatList from './chatList';
import Chat from './chat';
import FocusedElement from './focusedElement';
import Posts from './posts';
import SearchBar from './searchBar';
import { categories, people, conversations, posts, peopleBio } from './data';

const DashBoardWrapper = styled.div`
`;

const BodyWrapper = styled.div`
  margin-left: 250px;
`;

export default class Dashboard extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      people: people,
      categories: categories,
      focus: 'general',
      focusType: 'category',
      focusSubject: 0,
      conversations: conversations,
      modalOpen: false,
    };
  }

  changeFocus = (focus, focusType, key) => {
    this.setState({ 
      focus: focus,
      focusType: focusType,
      focusSubject: key,
    })
  }
  
renderBody = () => {
  const { focusType, focusSubject, conversations, focus} = this.state;
  if (focusType === 'person') {
    return <Chat messages={conversations[focusSubject]} focus={focus}  />
  } else if (focusType === 'category'){
    return <Posts changeFocus={this.changeFocus} posts={posts}  />
  }
}


  render() {
    const { people, categories, focusSubject, focusType, active, focus } = this.state;
    return (
      <DashBoardWrapper>
        <ChatList people={people} categories={categories} active={active} changeFocus={this.changeFocus} />
        <BodyWrapper>
          <SearchBar/>
          <FocusedElement focus={focus} focusSubject={focusSubject} focusType={focusType} posts={posts} peopleBio={peopleBio} />
          {this.renderBody()}
        </BodyWrapper>
      </DashBoardWrapper>
    )
  }
}
