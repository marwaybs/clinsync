import React, { Component } from 'react'
import styled from 'styled-components';
import { Button, Badge } from '../../../reusable';
import { accent1, accent2, border } from './../../colors';
import xray from './../../../assets/images/xray.jpg';




const PostWrapper = styled.div`
  padding-top: 20px;
  margin: auto;
  text-align: center;
`;

const Description = styled.p``;
const CommentWrapper = styled.div``;
const Comment = styled.p`
  font-size: 13px;
`;
const User = styled.p `
  font-weight: 700;
`;
const Portrait = styled.img``;

const Image = styled.img`
  height:  30%;
  width: 30%;

`;

const Seperator = styled.div`
  border-bottom: 2px solid ${border};
  width: 60%;
  margin: auto;
  padding-top: 20px;
`;

export default class Post extends Component {
  render() {
    console.log(this.props.post.comments)
    return (
      <PostWrapper>
        <Image src={xray}/>
        <Description>{this.props.post.description}</Description>
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
