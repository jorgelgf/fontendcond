import { styled } from 'styled-components';


export const DivLoading = styled.div`
  width: 100px;
  height: 100px;
  border: 5px solid;
  border-radius: 50%;
  border-top-color: transparent;
  margin: 100px auto;
  color: #222222;
  animation: load 0.5s linear infinite;

  @keyframes load {
    to {
      transform: rotate(360deg);
    }
  }
`;