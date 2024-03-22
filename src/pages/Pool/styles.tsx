import styled from 'styled-components';


export const Container = styled.div`
display: flex;
align-items: center;
animation: anime 0.2s forwards;
opacity: 0;
z-index: 0;
@keyframes anime {
  to {
    transition: opacity 0.2s ease-out;

    opacity: 1;
  }}
`
export const DivCalendar = styled.div`

//border: solid black;
margin-top: 2rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: auto;
.listRegisterUser{
  width: 100%;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
    
     .itemRegisterUSer{
        max-height: 200px;
        overflow: auto;
        padding:2rem;
     }

      span{
        font-weight: 300;
          font-size: 1.2rem;

          }
  div{
    padding-top: 1rem;
    font-weight: 300;
    font-size: 1.2rem;
  }
}


`
export const DivConsult = styled.div`
height: auto;
margin-top: 1rem;
font-size: 3vw;
font-weight: 300;



.MonthDay{
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  margin-bottom: 7rem;
    max-height: 400px;
     overflow: auto;
.spaceBetween{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid;
.headerList{
  .house{
    width: 100%;
    display: flex;
    flex: flex;
  }
  .day{
    width: 100%;
    display: flex;
    justify-content: flex-end;

  }

  display: flex;
  width: 100%;
  justify-content: space-between;
  font-weight: 700;
 
}

.infoSpan{
  width: 7em;
  display: flex;
  justify-content: center;

}
.spanTrash{

width: 50%;
display: flex;
align-items: center;
justify-content: center;

}
  .trash{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .7em;
    font-weight: 500;
    color:#fffefe;
    width: 7em;
    
    background-color: #f14b4b;
    padding:1rem 0.5rem;
    cursor: pointer;
    &:hover {
    filter: brightness(1.5);
  }
  }
 
   }

}
`

export const HeaderMonth = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
padding: 1rem;
font-size: 1.5;
background-color: #d5f8f8;
color: #1f2020;
.pointer{
  cursor:pointer;
}
`
export const DivOpacity = styled.div`
  position: fixed;
  top:0;
  left:0;
  background-color: #0e0d0da0;
  width: 100%;
  height: 100vh;
  z-index: 2;
`


  
