import { BookCard } from 'components/BookCard/BookCard';

export const BookList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <BookCard item={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};
