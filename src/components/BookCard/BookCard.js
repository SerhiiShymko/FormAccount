import { List, ListItem } from './BookCard.styled';

export const BookCard = ({
  item: { id, selectData, regNumber, nameOut, nameIn, aktNumber, note },
  onDelete,
}) => {
  // const formatDate = date => {
  //   // const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  //   const formattedDate = new Date(date);

  //   const day = formattedDate.getDate().toString().padStart(2, '0');
  //   const month = (formattedDate.getMonth() + 1).toString().padStart(2, '0');
  //   const year = formattedDate.getFullYear();

  //   return `${day}.${month}.${year}`;
  // };
  return (
    <List>
      <ListItem>{selectData}</ListItem>
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
