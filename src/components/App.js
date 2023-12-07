import { useEffect, useState } from 'react';
import { BookList } from './BookList/BookList';
import { fetchOrder } from 'api';
import { BookForm } from './BookForm/BookForm';

export function App() {
  const [orderItems, setOrderItems] = useState([]);
  const [loading, setLoading] = useState(false);

  //Фетч данних х бекенду
  useEffect(() => {
    async function getOrder() {
      try {
        setLoading(true);
        const orderItems = await fetchOrder();
        setOrderItems(orderItems);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getOrder();
  }, []);

  return (
    <>
      <>
        <h1>ЖУРНАЛ ОБЛІКУ НОСІЇВ ІНФОРМАЦІЇ</h1>
        <BookForm />
        {loading ? <div>LOADING...</div> : <BookList />}
      </>
    </>
  );
}
