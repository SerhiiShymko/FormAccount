import React, { useState } from 'react'
import orderItems from '../../data.json';
import { Input, List } from './BookList.styled';

export const BookList = () => {
    // Стани для кожного поля пошуку
    const [searchData, setSearchData] = useState('');
    const [searchRegNumber, setSearchRegNumber] = useState('');
    const [searchNameOut, setSearchNameOut] = useState('');
    const [searchNameIn, setSearchNameIn] = useState('');
    const [searchAktNumber, setSearchAktNumber] = useState('');
    const [searchNote, setSearchNote] = useState('');

    // Функція фільтрації даних за введеними значеннями
    const filteredData = orderItems.filter((item) => {
        return (
            item.data.toString().includes(searchData) &&
            item.nameOut.toLowerCase().includes(searchNameOut.toLowerCase()) &&
            item.nameIn.toLowerCase().includes(searchNameIn.toLowerCase()) &&
            item.regNumber.toLowerCase().includes(searchRegNumber.toLowerCase()) &&
            item.aktNumber.toString().includes(searchAktNumber) &&
            item.note.toLowerCase().includes(searchNote.toLowerCase())
        );
    });

    return (
        <div>
            <List>
                <Input
                    type="text"
                    placeholder="Дата отримання"
                    value={searchData}
                    onChange={(e) => setSearchData(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Серійний номер"
                    value={searchRegNumber}
                    onChange={(e) => setSearchRegNumber(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="ПІБ передав"
                    value={searchNameOut}
                    onChange={(e) => setSearchNameOut(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="ПІБ отримав"
                    value={searchNameIn}
                    onChange={(e) => setSearchNameIn(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Акт передачі"
                    value={searchAktNumber}
                    onChange={(e) => setSearchAktNumber(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Примітка"
                    value={searchNote}
                    onChange={(e) => setSearchNote(e.target.value)}
                />
            </List>
            <table>
                <thead>
                    <tr>
                        {/* <th>ID</th> */}
                        {/* <th>data</th>
                        <th>regNumber</th>
                        <th>nameOut</th>
                        <th>nameIn</th>
                        <th>aktNumber</th>
                        <th>note</th> */}
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.data}</td>
                            <td>{item.regNumber}</td>
                            <td>{item.nameOut}</td>
                            <td>{item.nameIn}</td>
                            <td>{item.aktNumber}</td>
                            <td>{item.note}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}