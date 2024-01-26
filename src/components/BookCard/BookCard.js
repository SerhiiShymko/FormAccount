import { Link, useLocation } from 'react-router-dom';
import { BookCardContainer, DeleteButton, ListItem } from './BookCard.styled';

export const BookCard = ({
  item: { id, selectData, regNumber, nameOut, nameIn, aktNumber, note },
  onDelete,
}) => {
  const location = useLocation();

  return (
    <BookCardContainer>
      <ListItem>{selectData}</ListItem>
      <ListItem>
        <Link to={`/orders/${id}`} state={{ from: location }}>
          {regNumber}
        </Link>
      </ListItem>
      <ListItem>{nameOut}</ListItem>
      <ListItem>{nameIn}</ListItem>
      <ListItem>{aktNumber}</ListItem>
      <ListItem>{note}</ListItem>
      <DeleteButton onClick={() => onDelete(id)}>Delete</DeleteButton>
    </BookCardContainer>
  );
};
