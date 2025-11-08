import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 30px;
  color:rgb(31, 15, 5);
  font-size: 20px;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 250px;
  border: none;
  padding: 10px;
  background-color: #f6d7c3;
  color: #2d1e12;
  font-size: 16px;
  outline: none;
  border-radius: 0;
  font-size: 20px;

  &:focus {
    background-color: #f2c9b5;
  }

  &::placeholder {
    color: #6b4a31;
  }
`;
