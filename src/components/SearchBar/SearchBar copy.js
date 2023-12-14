import React, { useEffect, useState } from 'react';
import { Input, List } from './SearchBar.styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { fetchOrder } from 'api';

export const SearchBar = ({ allFilter, onReset }) => {
  const [searchData, setSearchData] = useState('');
  const [searchRegNumber, setSearchRegNumber] = useState('');
  const [searchNameOut, setSearchNameOut] = useState('');
  const [searchNameIn, setSearchNameIn] = useState('');
  const [searchAktNumber, setSearchAktNumber] = useState('');
  const [searchNote, setSearchNote] = useState('');
  const [selectedData, setSelectedData] = useState(new Date());

  useEffect(() => {
    const filterData = async () => {
      try {
        const orderItems = await fetchOrder();
        const filteredData = orderItems.filter(item => {
          return (
            item.data.toString().includes(searchData) &&
            item.nameOut.toLowerCase().includes(searchNameOut.toLowerCase()) &&
            item.nameIn.toLowerCase().includes(searchNameIn.toLowerCase()) &&
            item.regNumber
              .toLowerCase()
              .includes(searchRegNumber.toLowerCase()) &&
            item.aktNumber.toString().includes(searchAktNumber) &&
            item.note.toLowerCase().includes(searchNote.toLowerCase())
          );
        });
        allFilter(filteredData);
      } catch (error) {
        console.error(error);
      }
    };

    filterData();
  }, [
    searchData,
    searchRegNumber,
    searchNameOut,
    searchNameIn,
    searchAktNumber,
    searchNote,
    allFilter,
  ]);

  return (
    <List>
      <DatePicker
        selected={selectedData}
        onChange={date => {
          setSelectedData(date);
        }}
        dateFormat="dd.MM.yyyy"
        placeholder="Дата отримання"
      />
      <Input
        type="text"
        placeholder="Серійний номер"
        onChange={e => setSearchRegNumber(e.target.value)}
      />
      <Input
        type="text"
        placeholder="ПІБ передав"
        as="select"
        onChange={e => setSearchNameOut(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Petrov1">Petrov1</option>
        <option value="Petrov2">Petrov2</option>
      </Input>

      <Input
        type="text"
        placeholder="ПІБ отримав"
        onChange={e => setSearchNameIn(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Акт передачі"
        onChange={e => setSearchAktNumber(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Примітка"
        onChange={e => setSearchNote(e.target.value)}
      />
      <button onClick={onReset}>Reset filters</button>
    </List>
  );
};
