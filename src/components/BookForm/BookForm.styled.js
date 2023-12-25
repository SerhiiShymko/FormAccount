import styled from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';

export const StyledField = styled(Field)`
  width: 150px;
  padding-left: 1.5px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 10px;
  margin-bottom: 10px;
`;

export const StyledError = styled(ErrorMessage)`
  color: ${p => p.theme.colors.error};
`;

export const AddButton = styled.button`
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
