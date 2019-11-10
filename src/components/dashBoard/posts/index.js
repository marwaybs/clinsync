import React, { Component } from 'react'
import styled from 'styled-components';
import Post from './post';
import { Button } from '../../../reusable';
import xray from './../../../assets/images/xray.jpg';


const PostsWrapper = styled.div`
  margin: auto;
`;

export default class Posts extends Component {
  render() {
    return (
      <PostsWrapper>
        {this.props.posts.map((post) => 
          <Post post={post}/>
        )}
      </PostsWrapper>
    )
  }
}
