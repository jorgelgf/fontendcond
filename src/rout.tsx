import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { ReactNode, useEffect } from 'react';
import {Consult, Contact, Home, Pool, Service} from './pages';
import {MainHeader} from './components';


interface ChildrenProps{
  children: ReactNode;
}


const Layout = ({children}:ChildrenProps) => {
useEffect(()=>{
  window.scrollTo(0, 0);
  

},[])

  return (
    <>
      <Container>
       <DivBG>
       
       <Black onClick={()=>{
                document.body.style.backgroundColor='#4d4848';
                document.body.style.color='white';
          }}>
        </Black>
        
       <White onClick={()=>{
                document.body.style.backgroundColor='white';
                document.body.style.color='black';
        }
       }>
      </White>

      </DivBG>         <Session>
        <MainHeader/>
        <Item>
          {children}
          </Item>
          </Session>


      </Container>

    </>
  )
}

const Rout = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home/></Layout>} />
      <Route path='/service' element={<Layout><Service/></Layout>}/>
      <Route path='/pool' element={<Layout><Pool/></Layout>}/>
      <Route path='/consult' element={<Layout><Consult/></Layout>}/>
      <Route path='/contact' element={<Layout><Contact/></Layout>}/>
    </Routes>
  );
};
export default Rout;

const Container = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: center;
height: auto;
flex-direction: column;
`
const DivBG = styled.div`
   display:flex;
   width:100%; 
   justify-content:flex-end; 
   position: absolute;
   top:0;
   padding-top: 1rem;
   padding-right: 2rem;

`
const Black = styled.div`
background-color: black;
border:solid black;
width: 5vw;
height: 3vw;
cursor: pointer;
`
const White  = styled.div`
background-color: white;
border:solid black;
width: 5vw;
height: 3vw;
cursor: pointer;
`
const Session = styled.div`
width: 90%;
display: flex;
height: auto;
flex-direction:column;
max-width: 800px;
`
const Item = styled.div`
width: 100%;
height: 100vh;
margin-top: 4rem;

`
