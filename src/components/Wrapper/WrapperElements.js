import styled from "styled-components";

export const Box = styled.div`
  max-width: 60%;
  width: 100%;
  height: 100vh;
  flex: 1 90%;
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const Wrap = styled.div`
  max-width: 70%;
`;
