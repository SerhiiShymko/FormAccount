import { BookList } from './BookList/BookList';
// import initialQuizItems from '../data.json';
import { createOrder, deleteOrder, fetchOrders } from 'api';
import { BookForm } from './BookForm/BookForm';
import { SearchBar } from './SearchBar/SearchBar';
import { Header } from './Header/Header';
import { Spinner } from './Spinner';
import { useEffect, useState } from 'react';

const localStorageKey = 'order-filters';

const initialFilters = {
  selectData: null,
  regNumber: '',
  nameOut: 'all',
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

export const App = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [filters, setFilters] = useState(getInitialFilters());
  const [loading, setLoading] = useState(false);

  //   // Фетч данних з бекенду
  useEffect(() => {
    async function getOrders() {
      try {
        setLoading(true);
        const orderItems = await fetchOrders();
        setOrderItems(orderItems);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getOrders();
  }, []);

  //   Запис фільтрів в localStorage
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(filters));
  }, [filters]);

  const handleReset = () => {
    setFilters(initialFilters);
  };

  const changeFilters = newFilter => {
    setFilters(prevState => ({
      ...prevState,
      ...newFilter,
    }));
  };

  const addOrder = async newOrder => {
    try {
      const createdOrder = await createOrder(newOrder);
      setOrderItems(prevState => [...prevState, createdOrder]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async orderId => {
    try {
      const deletedOrder = await deleteOrder(orderId);
      setOrderItems(prevState => {
        return prevState.filter(order => order.id !== deletedOrder.id);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getVisibleOrderItems = () => {
    return orderItems.filter(order => {
      const selectDataMatch =
        !filters.selectData ||
        (filters.selectData instanceof Date &&
          new Date(order.selectData).toDateString() ===
            filters.selectData.toDateString());
      const regNumberMatch =
        !filters.regNumber ||
        (order.regNumber &&
          order.regNumber
            .toLowerCase()
            .includes(filters.regNumber.toLowerCase()));
      const nameOutMatch =
        filters.nameOut === 'all' ||
        order.nameOut.toLowerCase().includes(filters.nameOut.toLowerCase());
      const nameInMatch = order.nameIn
        .toLowerCase()
        .includes(filters.nameIn.toLowerCase());
      const aktNumberMatch = order.aktNumber
        .toString()
        .includes(filters.aktNumber);
      const noteMatch = order.note
        .toLowerCase()
        .includes(filters.note.toLowerCase());

      return (
        selectDataMatch &&
        regNumberMatch &&
        nameOutMatch &&
        nameInMatch &&
        aktNumberMatch &&
        noteMatch
      );
    });
  };

  const visibleOrderItems = getVisibleOrderItems();

  return (
    <>
      <Header />
      <SearchBar
        allFilter={filters}
        onChangeFilters={changeFilters}
        onReset={handleReset}
      />
      <BookForm onAdd={addOrder} />

      {loading ? (
        <Spinner />
      ) : (
        <BookList items={visibleOrderItems} onDelete={handleDelete} />
      )}
    </>
  );
};
