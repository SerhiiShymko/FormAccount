import { BookList } from './BookList/BookList';
import orderItems from '../data.json';

export function App() {
  return (
    <>
      <h1>ЖУРНАЛ ОБЛІКУ НОСІЇВ ІНФОРМАЦІЇ</h1>
      <BookList items={orderItems} />
    </>
  );
}
