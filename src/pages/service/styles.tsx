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
