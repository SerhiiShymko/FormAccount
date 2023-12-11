import React, { useEffect, useState } from 'react';
import { Input, List } from './SearchBar.styled';
import { fetchOrder } from 'api';

export const SearchBar = ({ setFilteredData, onReset }) => {
  const [searchData, setSearchData] = useState('');
  const [searchRegNumber, setSearchRegNumber] = useState('');
  const [searchNameOut, setSearchNameOut] = useState('');
  const [searchNameIn, setSearchNameIn] = useState('');
  const [searchAktNumber, setSearchAktNumber] = useState('');
  const [searchNote, setSearchNote] = useState('');

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
        setFilteredData(filteredData);
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
    setFilteredData,
  ]);

  return (
    <List>
      <Input
        type="text"
        placeholder="Дата отримання"
        onChange={e => setSearchData(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Серійний номер"
        onChange={e => setSearchRegNumber(e.target.value)}
      />
      <Input
        type="text"
        placeholder="ПІБ передав"
        onChange={e => setSearchNameOut(e.target.value)}
      />
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
