import { useEffect, useState } from 'react';
import { Spinner } from 'components/Spinner';
import { Link } from 'react-router-dom';
import { BookList } from 'components/BookList/BookList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { deleteOrder, fetchOrders } from 'api';
import { formatDate } from 'components/utils';
import { Header } from 'components/Header/Header';

// const localStorageKey = 'order-filters';

// const initialFilters = {
//   selectData: null,
//   regNumber: '',
//   nameOut: 'all',
//   nameIn: '',
//   aktNumber: '',
//   note: '',
// };

// const getInitialFilters = () => {
//   const savedFilters = localStorage.getItem(localStorageKey);
//   if (savedFilters !== null) {
//     return JSON.parse(savedFilters);
//   }
//   return initialFilters;
// };

const OrdersPage = () => {
  const [orderItems, setOrderItems] = useState([]);
  // const [filters, setFilters] = useState(getInitialFilters());
  const [loading, setLoading] = useState(false);

  //    Фетч данних з бекенду
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
  // useEffect(() => {
  //   localStorage.setItem(localStorageKey, JSON.stringify(filters));
  // }, [filters]);

  // const handleReset = () => {
  //   setFilters(initialFilters);
  // };

  const changeFilters = newFilter => {
    setFilters(prevState => ({
      ...prevState,
      ...newFilter,
    }));
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
        filters.selectData === null ||
        (order.selectData &&
          formatDate(new Date(order.selectData)) ===
            formatDate(filters.selectData));
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
    <div>
      <Header />
      {/* <SearchBar
        allFilter={filters}
        onChangeFilters={changeFilters}
        onReset={handleReset}
      /> */}

      <div>
        <Link to="/create">Create order</Link>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <BookList items={visibleOrderItems} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default OrdersPage;
