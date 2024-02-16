import { styled } from 'styled-components';

export const ButtonItem  = styled.button`
border: none;
cursor: pointer;
width: 100%;
padding:2rem 1rem;
letter-spacing: 2px;
transition: ease-in-out .2s;
font-size: 3vw;
z-index: 0;

&:hover {
    filter: brightness(1.5);
  }
  @media(max-width:500px){
    font-size: 1rem;
  }
`