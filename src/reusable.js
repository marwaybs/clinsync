import styled from 'styled-components';
import { spaceCadet, border, background } from './components/colors';

export const Button = styled.button`
  display: inline-block;
  padding: 0.3em 1.2em;
  margin: 0 0.1em 0.1em 0;
  border: 0.16em solid rgba(255,255,255,0);
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 300;
  color: ${background};
  background-color: ${spaceCadet};
  text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);
  text-align: center;
  transition: all 0.2s;
  font-size: 16px;
  font-weight: 600;
  &:hover {
    border-color: ${border};
  }
`;

export const Badge = styled.span`
  border-radius: 70%;
  background-color: ${props => props.backgroundColor};
  padding: 5px 10px;
  color: ${background};
  margin-right:  10px;
  font-size: 13px;
  transition: all 0.2s;
  &:hover {
    background-color: black;
  }
`;
