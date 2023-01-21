import styled from "styled-components";

export const Form = styled.form`
  background-color: #fff;
  color: #07163e;
  padding: 1.2rem;
  border-radius: 7px;
  text-align: center;
`;

export const InputGroup = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  color: #000;
  width: 75%;
  padding: 1rem 1.2rem;
  outline: none;
  font-size: 1.2rem;
  border-radius: 7px;
  border: 1px solid #fe7832;

  &::placeholder {
    color: #fe7832;
  }
`;
export const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;
