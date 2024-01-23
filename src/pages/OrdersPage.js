import { useEffect, useState } from 'react';
import { Spinner } from 'components/Spinner';
import { Link, useSearchParams } from 'react-router-dom';
import { BookList } from 'components/BookList/BookList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { deleteOrder, fetchOrders } from 'api';
import { formatDate } from 'components/utils';
import { Header } from 'components/Header/Header';

const OrdersPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectDataFilter = searchParams.get('selectData') ?? null;
  const regNumberFilter = searchParams.get('regNumber') ?? '';
  const nameOutFilter = searchParams.get('nameOut') ?? 'all';
  const nameInFilter = searchParams.get('nameIn') ?? '';
  const aktNumberFilter = searchParams.get('aktNumber') ?? '';
  const noteFilter = searchParams.get('note') ?? '';

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

  const changeFilters = newFilter => {
    setSearchParams(newFilter);
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

  // const getVisibleOrderItems = () => {
  //   return orderItems.filter(order => {
  //     const selectDataMatch =
  //       filters.selectData === null ||
  //       (order.selectData &&
  //         formatDate(new Date(order.selectData)) ===
  //           formatDate(filters.selectData));
  //     const regNumberMatch =
  //       !filters.regNumber ||
  //       (order.regNumber &&
  //         order.regNumber
  //           .toLowerCase()
  //           .includes(filters.regNumber.toLowerCase()));
  //     const nameOutMatch =
  //       filters.nameOut === 'all' ||
  //       order.nameOut.toLowerCase().includes(filters.nameOut.toLowerCase());
  //     const nameInMatch = order.nameIn
  //       .toLowerCase()
  //       .includes(filters.nameIn.toLowerCase());
  //     const aktNumberMatch = order.aktNumber
  //       .toString()
  //       .includes(filters.aktNumber);
  //     const noteMatch = order.note
  //       .toLowerCase()
  //       .includes(filters.note.toLowerCase());

  //     return (
  //       selectDataMatch &&
  //       regNumberMatch &&
  //       nameOutMatch &&
  //       nameInMatch &&
  //       aktNumberMatch &&
  //       noteMatch
  //     );
  //   });
  // };

  // const visibleOrderItems = getVisibleOrderItems();

  return (
    <div>
      <Header />
      <SearchBar
        allFilter={searchParams}
        onChangeFilters={changeFilters}
        // onReset={handleReset}
      />

      <div>
        <Link to="/create">Create order</Link>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <BookList items={orderItems} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default OrdersPage;
