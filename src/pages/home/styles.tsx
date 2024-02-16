import styled from 'styled-components';



export const Item = styled.div`
//border: solid;
min-height: 300px;
display: flex;
justify-content: space-between;;
flex-direction: column;

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


`