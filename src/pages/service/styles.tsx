import styled from 'styled-components';

export const Container = styled.div`
animation: anime 0.2s forwards;
opacity: 0;
@keyframes anime {
  to {
    transition: opacity 0.2s ease-out;

    opacity: 1;
  }}
`
export const Exit = styled.div`
position: fixed;
bottom:2rem;
right:0;
width: 15%;

@media(min-height:1050px){
  top:10rem;
}    
`