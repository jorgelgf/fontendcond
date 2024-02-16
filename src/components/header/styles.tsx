import { styled } from 'styled-components';


//-- MainHeader
export const Container  = styled.header`
width: 100%;
padding:0;
cursor: pointer;
header{
display: flex;
align-items: flex-start;
justify-content: flex-start;
margin-top: 5rem;

font-weight: 600;
font-size: 4vw;  
flex-direction:column;
@media (max-width:600px){
  font-size: 1.5rem;
}
@media (max-width:400px){
  font-size: 1.4rem;
}
}
div{
  margin-top:.8rem;
  display: flex;
  justify-content: flex-start;
  font-weight: 300;
  font-size:3vw;
  @media (max-width:500px){
  font-size: 1.5rem;
}
@media (max-width:400px){
  font-size: 1.2rem;
}
}
`
//-- MainHeader


//HeaderService

export const DivHeaderService = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
font-size: 3vw;
margin-bottom: 3rem;
div{
  display: flex;
  align-items: center;
  height: 100%;;
  position: relative;
  bottom:.3rem;
  left:-2rem;
  img{ 
    width: 2rem;
    height:2rem;
    opacity: 0.5;
    @media(max-width:500px){
         width: 1rem;
         height:1rem;
         border:none;
         opacity: 0.5;
         bottom:0rem;

  }}
}
`