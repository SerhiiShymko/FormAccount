import styled from 'styled-components';

// export const List = styled.ul`
//   display: flex;
//   flex-direction: row;
//   gap: 2px;
//   padding-left: 1.5px;
// `;

// export const ListItem = styled.li`
//   padding: 2px;
//   margin-bottom: 1px;
//   border: solid 1px;
//   width: 130px;
//   text-align: center;
// `;
export const BookCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
`;

export const ListItem = styled.span`
  flex: 1;
`;

export const DeleteButton = styled.button`
  width: 130px;
  height: 30px;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: #642720;
  }
`;
