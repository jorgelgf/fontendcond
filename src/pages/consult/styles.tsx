import styled from 'styled-components';

export const Back = styled.div`
position: fixed;
bottom:2rem;
right:0;
width: 15%;
@media(min-height:1050px){
  top:10rem;
}`

export const Container = styled.div`
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
padding: 2rem 0;
animation: anime 0.2s forwards;
opacity: 0;
@keyframes anime {
  to {
    transition: opacity 0.2s ease-out;

    opacity: 1;
  }}

img{
  padding: 2rem 0 3rem 0;
  max-width: 90vw;
  animation: anime 0.2s forwards;
  opacity: 0;
        @keyframes anime {
          to {
            transition: opacity 0.2s ease-out;

            opacity: 1;
          }}
        @media(max-width:500px){
          min-height: 250px;
        }
        @media(min-width:999px){
          min-height: 450px;
    }
}

`
export const LaborBack = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

