import { List } from './BookCard.styled';

export const BookCard = ({
  item: { id, data, regNumber, nameOut, nameIn, aktNumber, note },
  onDelete,
}) => {
  return (
    <div>
      <List>
        <td>{data}</td>
        <td>{regNumber}</td>
        <td>{nameOut}</td>
        <td>{nameIn}</td>
        <td>{aktNumber}</td>
        <td>{note}</td>
        <div>
          <button onClick={() => onDelete(id)}>Delete</button>
        </div>
      </List>
    </div>
  );
};
