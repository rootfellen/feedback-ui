import styled from "styled-components";

export const Container = styled.div`
  min-width: 60%;
  background-color: #fff;
  border-radius: 7px;
  color: #000;
  margin: 2rem 0rem;
  padding: 2.5rem 2rem;
  position: relative;
`;

export const Rating = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  top: -10px;
  left: -10px;
  width: 3rem;
  height: 3rem;
  background: radial-gradient(#fe7832, #ffc643);
  border-radius: 50%;
  color: #fff;
`;

export const Button = styled.button`
  all: unset;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
