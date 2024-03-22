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
        <Session>
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
const Session = styled.div`
width: 90%;
display: flex;
height: auto;
flex-direction:column;
`
const Item = styled.div`
//border: solid;
width: 100%;
height: 100vh;
margin-top: 4rem;

`
