import { List, ListItem } from './BookCard.styled';

export const BookCard = ({
  item: { id, data, regNumber, nameOut, nameIn, aktNumber, note },
  onDelete,
}) => {
  return (
    <List>
      <ListItem>{data}</ListItem>
      <ListItem>{regNumber}</ListItem>
      <ListItem>{nameOut}</ListItem>
      <ListItem>{nameIn}</ListItem>
      <ListItem>{aktNumber}</ListItem>
      <ListItem>{note}</ListItem>
      <div>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </List>
  );
};
