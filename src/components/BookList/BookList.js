import { BookCard } from 'components/BookCard/BookCard';

export const BookList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <BookCard item={item} />
        </li>
      ))}
    </ul>
  );
};
