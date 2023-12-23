import styled from 'styled-components';

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
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

export const Button = styled.button`
  padding: 5px 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export const ResetButton = styled(Button)`
  background-color: #e74c3c;
  margin-left: 10px;
`;

// export const StyledDatePicker = styled(DatePicker)`
//   padding: 5px;
//   margin-bottom: 5px;
//   width: 150px;
// `;
