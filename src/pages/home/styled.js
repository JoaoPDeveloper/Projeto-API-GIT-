import { hover } from '@testing-library/user-event/dist/hover';
import styled from 'styled-components';

export const ErrorMsg = styled.span`
  display: block;
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
  font-size: 18px;
  text-align: center;
}
`;
export const Button = styled.button`
width: 15vw;
height:7vh;
padding: 20px 25px;
text-align: center;
align-items:between;
background: linear-gradient(to right, #4812dd 50%, #79f017 50%);
background-size: 200% 100%;
background-position: right bottom;
color: #464646;
font-weight: 0;
cursor: pointer;
transition: all 300ms ease-out;
border-radius: 5px 5px 5px 5px;
margin-left: -10px;
font-family: 'Source Sans Pro', sans-serif;
font-style: italic;
font-size:18px;
`;


