import React, { Component } from 'react';
import styled from 'styled-components';
import { accent1, accent2, background, border } from './../../colors';
import { Button } from './../../../reusable';

const SearchBarWrapper = styled.div`
  padding-top: 20px;
  text-align: center;
`;

const Input = styled.input`
  border: 2px solid ${border};
  border-radius: 18px;
  height:  25px;
  margin-right: 10px;
  width: 50%;
  ::placeholder {
    font-size: 14px;
    margin-right: 3px;
  }
`;

const Seperator = styled.div`
  border-bottom: 2px solid ${border};
  width: 80%;
  margin: auto;
  padding-top: 10px;
`;


export default class index extends Component {
  render() {
    return (
      <SearchBarWrapper>
        <Input placeholder="Enter a clinician or search term" type="text" name="firstname"/>
        <Button>Search</Button>
        <Seperator/>
      </SearchBarWrapper>
    )
  }
}
