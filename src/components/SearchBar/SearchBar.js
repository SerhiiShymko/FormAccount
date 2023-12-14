import { useState } from 'react';
import { Input, List } from './SearchBar.styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import { fetchOrder } from 'api';

export const SearchBar = ({ allFilter, onChangeFilters, onReset }) => {
  const [selectedData, setSelectedData] = useState(new Date());

  return (
    <List>
      <DatePicker
        selected={selectedData}
        onChange={date => {
          setSelectedData(date);
          onChangeFilters({ selectData: date });
        }}
        dateFormat="dd.MM.yyyy"
        placeholder="Дата отримання"
      />
      <Input
        type="text"
        placeholder="Серійний номер"
        onChange={e => onChangeFilters({ regNumber: e.target.value })}
      />
      <Input
        type="text"
        placeholder="ПІБ передав"
        as="select"
        onChange={e => onChangeFilters({ nameOut: e.target.value })}
      >
        <option value="all">All</option>
        <option value="Petrov1">Petrov1</option>
        <option value="Petrov2">Petrov2</option>
      </Input>

      <Input
        type="text"
        placeholder="ПІБ отримав"
        onChange={e => onChangeFilters({ nameIn: e.target.value })}
      />
      <Input
        type="text"
        placeholder="Акт передачі"
        onChange={e => onChangeFilters({ aktNumber: e.target.value })}
      />
      <Input
        type="text"
        placeholder="Примітка"
        onChange={e => onChangeFilters({ note: e.target.value })}
      />
      <button onClick={onReset}>Reset filters</button>
    </List>
  );
};
