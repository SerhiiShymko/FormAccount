import { Component } from 'react';
import { BookList } from './BookList/BookList';
import initialQuizItems from '../data.json';
// import { fetchOrder } from 'api';
import { BookForm } from './BookForm/BookForm';
import { SearchBar } from './SearchBar/SearchBar';
import { Header } from './Header/Header';

export class App extends Component {
  state = {
    orderItems: initialQuizItems,
    filters: {
      selectData: null,
      regNumber: '',
      nameOut: 'all',
      nameIn: '',
      aktNumber: '',
      note: '',
    },
  };

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
      filters: {
        selectData: null,
        regNumber: '',
        nameOut: 'all',
        nameIn: '',
        aktNumber: '',
        note: '',
      },
    });
  };

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

  getVisibleOrderItems = () => {
    const { orderItems, filters } = this.state;
    return orderItems.filter(order => {
      const selectDataMatch =
        !filters.selectData ||
        new Date(order.selectData).toDateString() ===
          filters.selectData.toDateString();

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
    const { filters } = this.state;
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
        {/* {loading ? (
            <div>LOADING...</div>
          ) : ( */}
        <BookList items={visibleOrderItems} onDelete={this.handleDelete} />
        {/* )} */}
      </>
    );
  }
}
