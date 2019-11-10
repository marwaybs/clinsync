import React, { Component } from 'react'
import styled from 'styled-components';
import { accent1, accent2, background, border } from './../../colors';
import { Button } from './../../../reusable';


const ChatWrapper = styled.div`
`;


const MeMessage = styled.p`
  background: ${accent1};
  color: ${background};
  padding: 10px;
  margin-right: 25px;
  text-align: right;
  overflow-wrap: normal;
  border-radius:  25px;
  width: fit-content;
  margin-left: auto;
`;

const YouMessage = styled.p`
  background: ${accent2};
  color: ${background};
  padding: 10px;
  text-align: left;
  overflow-wrap: normal;
  width: fit-content;
  border-radius:  25px;
`;

const MessageWrapper = styled.div``;

const FormWrapper = styled.div`
    position: absolute;
    bottom: 15px;
    width: 60em;
    text-align: center;
  `;

const Input = styled.input`
  border: 2px solid ${border};
  border-radius: 18px;
  height:  25px;
  margin-right: 10px;
  width: 50%;
`;



export default class Chat extends Component {
  render() {
    return (
      <ChatWrapper>
        <MessageWrapper>
          {this.props.messages.map((message, key) => (message.sender === 'me') ?
            <MeMessage key={key} >{message.text}</MeMessage> :
            <YouMessage key={key} >{message.text}</YouMessage>
          )}
        </MessageWrapper>
        <FormWrapper>
          <Input type="text" name="firstname"/>
          <Button>Send</Button>
        </FormWrapper>
      </ChatWrapper>
    )
  }
}
