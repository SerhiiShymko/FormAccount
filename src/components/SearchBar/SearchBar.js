import { useState } from 'react';
import { Input, List, ResetButton } from './SearchBar.styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { formatDate } from 'components/utils';
import { useQueryParams } from 'hooks/useQueryParams';

export const SearchBar = ({ onChangeFilters }) => {
  const [selectedData, setSelectedData] = useState(new Date());
  const { reset, selectData, regNumber, nameOut, nameIn, aktNumber, note } =
    useQueryParams();

  return (
    <List>
      <DatePicker
        selected={selectedData}
        onChange={date => {
          setSelectedData(date);
          const formattedDate = date instanceof Date ? formatDate(date) : date;
          onChangeFilters({ selectData: formattedDate });
        }}
        dateFormat="dd.MM.yyyy"
        placeholder="Дата отримання"
        value={selectData}
      />
      <Input
        type="text"
        placeholder="Серійний номер"
        onChange={e => onChangeFilters({ regNumber: e.target.value })}
        value={regNumber}
      />
      <Input
        type="text"
        placeholder="ПІБ передав"
        as="select"
        onChange={e => onChangeFilters({ nameOut: e.target.value })}
        value={nameOut}
      >
        <option value="all">All</option>
        <option value="Petrov1">Petrov1</option>
        <option value="Petrov2">Petrov2</option>
      </Input>

      <Input
        type="text"
        placeholder="ПІБ отримав"
        onChange={e => onChangeFilters({ nameIn: e.target.value })}
        value={nameIn}
      />
      <Input
        type="text"
        placeholder="Акт передачі"
        onChange={e => onChangeFilters({ aktNumber: e.target.value })}
        value={aktNumber}
      />
      <Input
        type="text"
        placeholder="Примітка"
        onChange={e => onChangeFilters({ note: e.target.value })}
        value={note}
      />
      <ResetButton onClick={reset}>Reset filters</ResetButton>
    </List>
  );
};
