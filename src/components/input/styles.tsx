import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  form{
    border: solid 1px;
  }
  
`
export const InputComponent = styled.input`
padding:1rem;
background-color: #D9D9D9;
width: 100%;
font-weight: 300;
border: none;
outline: none;
font-size: 5vw;

`
export const DivAvatar = styled.div`
background-color: #D9D9D9;
position: relative;
display: flex;
align-items: center;
justify-content: center;
padding-left: 1rem;
height:auto;
  top:0;
  left: 0rem;
  
  img{
    width: 3rem;
    height:3rem;
    border:none;
    opacity: 0.1;
    padding-right: 1rem;
    @media(max-width:500px){
      width: 1rem;
    height:1rem;
    border:none;
    opacity: 0.1;
  }
  }
`