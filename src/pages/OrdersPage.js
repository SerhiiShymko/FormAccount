import { useEffect, useState } from 'react';
import { Spinner } from 'components/Spinner';
import { Link } from 'react-router-dom';
import { BookList } from 'components/BookList/BookList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { deleteOrder, fetchOrders } from 'api';
import { formatDate } from 'components/utils';
import { Header } from 'components/Header/Header';
import { useQueryParams } from 'hooks/useQueryParams';

const OrdersPage = () => {
  const {
    selectData,
    regNumber,
    nameOut,
    nameIn,
    aktNumber,
    note,
    changeFilters,
    searchParams,
    // reset,
  } = useQueryParams();

  const [orderItems, setOrderItems] = useState([]);
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
        selectData === null ||
        (order.selectData &&
          formatDate(order.selectData) === formatDate(selectData));

      // console.log(selectData);

      const regNumberMatch =
        !regNumber ||
        (order.regNumber &&
          order.regNumber.toLowerCase().includes(regNumber.toLowerCase()));
      const nameOutMatch =
        nameOut === 'all' ||
        order.nameOut.toLowerCase().includes(nameOut.toLowerCase());
      const nameInMatch = order.nameIn
        .toLowerCase()
        .includes(nameIn.toLowerCase());
      const aktNumberMatch = order.aktNumber.toString().includes(aktNumber);
      const noteMatch = order.note.toLowerCase().includes(note.toLowerCase());

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
      <SearchBar
        value={searchParams}
        onChangeFilters={changeFilters}
        // onReset={reset}
      />

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
