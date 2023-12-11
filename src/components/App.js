import { useEffect, useState } from 'react';
import { BookList } from './BookList/BookList';
// import orderItems from '../data.json';
import { fetchOrder } from 'api';
import { BookForm } from './BookForm/BookForm';
import { SearchBar } from './SearchBar/SearchBar';

const localStorageKey = 'order-filters';
const initialFilters = {
  data: '',
  regNumber: '',
  nameOut: '',
  nameIn: '',
  aktNumber: '',
  note: '',
};

const getInitialFilters = () => {
  const savedFilters = localStorage.getItem(localStorageKey);
  if (savedFilters !== null) {
    return JSON.parse(savedFilters);
  }
  return initialFilters;
};

export function App() {
  const [orderItems, setOrderItems] = useState([]);
  const [filters, setFilters] = useState(getInitialFilters);
  const [loading, setLoading] = useState(false);

  const deleteOrder = async orderId => {
    try {
      const deletedOrder = await deleteOrder(orderId);
      setOrderItems(prevState =>
        prevState.quizItems.filter(quiz => quiz.id !== deletedOrder.id)
      );
    } catch (error) {
      console.log(error);
    }
  };

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

  //Запис фільтрів в localStorage
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(filters));
  }, [filters]);

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  return (
    <>
      <>
        <h1>ЖУРНАЛ ОБЛІКУ НОСІЇВ ІНФОРМАЦІЇ</h1>
        <BookForm />
        <SearchBar onReset={resetFilters} />
        {loading ? (
          <div>LOADING...</div>
        ) : (
          <BookList items={orderItems} onDelete={deleteOrder} />
        )}
      </>
    </>
  );
}
