import {
  BookCardContainer,
  DeleteButton,
  List,
  ListItem,
} from './BookCard.styled';

export const BookCard = ({
  item: { id, selectData, regNumber, nameOut, nameIn, aktNumber, note },
  onDelete,
}) => {
  return (
    <BookCardContainer>
      <ListItem>{selectData}</ListItem>
      <ListItem>{regNumber}</ListItem>
      <ListItem>{nameOut}</ListItem>
      <ListItem>{nameIn}</ListItem>
      <ListItem>{aktNumber}</ListItem>
      <ListItem>{note}</ListItem>
      <DeleteButton onClick={() => onDelete(id)}>Delete</DeleteButton>
    </BookCardContainer>
  );
};
