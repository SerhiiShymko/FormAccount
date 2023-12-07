import React from 'react';
import { Input, List } from './SearchBar.styled';

export const SearchBar = ({ setSearchData, setSearchRegNumber, setSearchNameOut, setSearchNameIn, setSearchAktNumber, setSearchNote }) => {
    return (
        <List>
            <Input
                type="text"
                placeholder="Дата отримання"
                onChange={(e) => setSearchData(e.target.value)}
            />
            <Input
                type="text"
                placeholder="Серійний номер"
                onChange={(e) => setSearchRegNumber(e.target.value)}
            />
            <Input
                type="text"
                placeholder="ПІБ передав"
                onChange={(e) => setSearchNameOut(e.target.value)}
            />
            <Input
                type="text"
                placeholder="ПІБ отримав"
                onChange={(e) => setSearchNameIn(e.target.value)}
            />
            <Input
                type="text"
                placeholder="Акт передачі"
                onChange={(e) => setSearchAktNumber(e.target.value)}
            />
            <Input
                type="text"
                placeholder="Примітка"
                onChange={(e) => setSearchNote(e.target.value)}
            />
        </List>
    );
}