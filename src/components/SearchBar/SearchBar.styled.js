import styled from 'styled-components';

export const List = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 5px;
  margin-bottom: 5px;
  width: 150px;
`;

export const Select = styled.select`
  padding: 5px;
  margin-bottom: 5px;
  width: 150px;
`;

export const ResetButton = styled.button`
  width: 130px;
  height: 30px;
  background-color: #2b77ec;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #0763f0;
  }
`;
