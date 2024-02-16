import { styled } from 'styled-components';


export const Container = styled.div`
  position: fixed;
  max-width: 500px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  display: flex;
  flex-direction:column;
  

  
  .dv{
    margin-top: 1rem;
    background-color: #221f1f;
    width: 100%;
    display: flex;
  }
`;