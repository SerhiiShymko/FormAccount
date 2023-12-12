import styled from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';

export const StyledField = styled(Field)`
  width: 130px;
  gap: 2px;
  padding-left: 1.5px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  gap: 2px;
  padding-left: 1.5px;
  padding-bottom: 10px;
`;

export const StyledError = styled(ErrorMessage)`
  color: ${p => p.theme.colors.error};
`;
