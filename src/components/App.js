import { Component } from 'react';
import { BookList } from './BookList/BookList';
import initialQuizItems from '../data.json';
// import { fetchOrder } from 'api';
import { BookForm } from './BookForm/BookForm';
import { SearchBar } from './SearchBar/SearchBar';
import { Header } from './Header/Header';

// const localStorageKey = 'order-filters';
// const initialFilters = {
//   data: '',
//   regNumber: '',
//   nameOut: '',
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

export class App extends Component {
  state = {
    orderItems: initialQuizItems,
  };
  // const [orderItems, setOrderItems] = useState([]);
  // const [filters, setFilters] = useState(getInitialFilters);
  // const [loading, setLoading] = useState(false);

  // const deleteOrder = async orderId => {
  //   console.log(orderId);
  //   try {
  //     const deletedOrder = await deleteOrder(orderId);
  //     setOrderItems(prevState =>
  //       prevState.orderItems.filter(order => order.id !== deletedOrder.id)
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  handleDelete = orderId => {
    this.setState(prevState => {
      return {
        orderItems: prevState.orderItems.filter(order => order.id !== orderId),
      };
    });
  };

  addOrder = newOrder => {
    this.setState(prevState => {
      return {
        orderItems: [...prevState.orderItems, newOrder],
      };
    });
  };

  //Фетч данних х бекенду
  // useEffect(() => {
  //   async function getOrder() {
  //     try {
  //       setLoading(true);
  //       const orderItems = await fetchOrder();
  //       setOrderItems(orderItems);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   getOrder();
  // }, []);

  //Запис фільтрів в localStorage
  // useEffect(() => {
  //   localStorage.setItem(localStorageKey, JSON.stringify(filters));
  // }, [filters]);

  // const resetFilters = () => {
  //   setFilters(initialFilters);
  // };
  render() {
    return (
      <>
        <Header />
        {/* <SearchBar /> */}
        <BookForm onAdd={this.addOrder} />
        {/* {loading ? (
            <div>LOADING...</div>
          ) : ( */}
        <BookList items={this.state.orderItems} onDelete={this.handleDelete} />
        {/* )} */}
      </>
    );
  }
}
