import { hover } from '@testing-library/user-event/dist/hover';
import styled from 'styled-components';
import { Title } from '../home/styled';

export const ErrorMsg = styled.span`
  display: flex;
  font-size: 20px;
  color: red;
  text-align: center;
  font-weight: 300;
  margin-top: 40rem;
  margin-left: -1rem;
  height:40.9vh;
  width:31vw; 
  position: fixed;
  font-family: 'Source Sans Pro', sans-serif;
  font-style: inherit;
  `;
  export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  `;
  export const Content = styled.div`
  width: 125vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  `;
  export const Input = styled.input`
  width: 25vw;
  padding: 17px 25px;
  border-radius: 5px 5px 5px 5px;
  color: black;
  font-style: inherit;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 23px;
  text-align: center;
}
`;
export const Button = styled.button`
width: 15vw;
height:7vh;
display:block;
padding: 20px 25px;
text-align: center;
align-items:between;
background:#79f017 50%;
color: #464646;
cursor: pointer;
border-radius: 5px 5px 5px 5px;
margin-left: -10px;
font-family: 'Source Sans Pro', sans-serif;
font-style: italic;
font-size:18px;
`;


