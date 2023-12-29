import { Component } from 'react';
import { BookList } from './BookList/BookList';
// import initialQuizItems from '../data.json';
import { createOrder, deleteOrder, fetchOrders } from 'api';
import { BookForm } from './BookForm/BookForm';
import { SearchBar } from './SearchBar/SearchBar';
import { Header } from './Header/Header';
import { Spinner } from './Spinner';

const localStorageKey = 'order-filters';

const initialFilters = {
  selectData: null,
  regNumber: '',
  nameOut: 'all',
  nameIn: '',
  aktNumber: '',
  note: '',
};

export class App extends Component {
  state = {
    orderItems: [],
    filters: initialFilters,
    loading: false,
  };

  async componentDidMount() {
    const savedFilters = localStorage.getItem(localStorageKey);
    if (savedFilters !== null) {
      this.setState({
        filters: JSON.parse(savedFilters),
      });
    }
    try {
      this.setState({ loading: true });
      const orderItems = await fetchOrders();
      this.setState({ orderItems, loading: false });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { filters: prevFilters } = prevState;
    const { filters: nextFilters } = this.state;

    if (prevFilters !== nextFilters) {
      localStorage.setItem(localStorageKey, JSON.stringify(nextFilters));
    }
  }

  changeFilters = newFilter => {
    this.setState(prevState => {
      return {
        filters: {
          ...prevState.filters,
          ...newFilter,
        },
      };
    });
  };

  handleReset = () => {
    this.setState({
      filters: initialFilters,
    });
  };

  handleDelete = async orderId => {
    try {
      const deletedOrder = await deleteOrder(orderId);

      this.setState(prevState => ({
        orderItems: prevState.orderItems.filter(
          order => order.id !== deletedOrder.id
        ),
      }));
    } catch (error) {
      console.log(error);
    }
  };

  addOrder = async newOrder => {
    try {
      const createdOrder = await createOrder(newOrder);

      this.setState(prevState => ({
        orderItems: [...prevState.orderItems, createdOrder],
      }));
    } catch (error) {
      console.log(error);
    }
  };

  getVisibleOrderItems = () => {
    const { orderItems, filters } = this.state;

    return orderItems.filter(order => {
      const selectDataMatch =
        !filters.selectData ||
        (filters.selectData instanceof Date &&
          new Date(order.selectData).toDateString() ===
            filters.selectData.toDateString());
      const regNumberMatch = order.regNumber
        .toLowerCase()
        .includes(filters.regNumber.toLowerCase());
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

  render() {
    console.log('render');
    const { filters, loading } = this.state;
    const visibleOrderItems = this.getVisibleOrderItems();
    return (
      <>
        <Header />
        <SearchBar
          allFilter={filters}
          onChangeFilters={this.changeFilters}
          onReset={this.handleReset}
        />
        <BookForm onAdd={this.addOrder} />
        {loading ? (
          <Spinner />
        ) : (
          <BookList items={visibleOrderItems} onDelete={this.handleDelete} />
        )}
      </>
    );
  }
}
