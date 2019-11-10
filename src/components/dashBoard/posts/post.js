import React, { Component } from 'react'
import styled from 'styled-components';
import { Button, Badge } from '../../../reusable';
import { accent1, accent2, border } from './../../colors';


const PostWrapper = styled.div`
  padding-top: 20px;
  margin: auto;
  text-align: center;
  text-align: -webkit-center;
`;

const Description = styled.p`
  max-width: 800px;
  `;
const CommentWrapper = styled.div``;
const Comment = styled.p`
  font-size: 13px;
`;
const User = styled.p `
  font-weight: 700;
`;
const Portrait = styled.img``;

const Image = styled.img`
  max-height: 600px;
  max-width: 600px;

`;

const Seperator = styled.div`
  border-bottom: 2px solid ${border};
  width: 60%;
  margin: auto;
  padding-top: 20px;
`;

export default class Post extends Component {
  render() {
    return (
      <PostWrapper>
        <Image src={this.props.post.image}/>
        <Description>{this.props.post.description}</Description>
        <Badge backgroundColor={accent1}>{`${this.props.post.helpful} Helpful`}</Badge>
        <Badge backgroundColor={accent2}>{`${this.props.post.irrelevant} Irrelevant`}</Badge>
        <Button>Consult</Button>
        {this.props.post.comments.map((comment, key) => (
            <CommentWrapper key={key}>
              <User>{comment.user}</User>
              <Comment>{comment.text}</Comment>
              <Badge backgroundColor={accent1}>{`${comment.helpful} Helpful`}</Badge>
              <Badge backgroundColor={accent2}>{`${comment.irrelevant} Irrelevant`}</Badge>
              <Seperator></Seperator>
            </CommentWrapper>
        ))}
      </PostWrapper>
    )
  }
}
