import React, { useState } from 'react'
import orderItems from '../../data.json';

export const BookList = () => {
    // const data = [
    //     {
    //         "id": "1",
    //         "data": "01.12.2023",
    //         "regNumber": "G205231",
    //         "nameOut": "Petrov1",
    //         "nameIn": "Ivanov1",
    //         "aktNumber": 1,
    //         "note": "del"
    //     },
    //     {
    //         "id": "2",
    //         "data": "02.12.2023",
    //         "regNumber": "G205232",
    //         "nameOut": "Petrov2",
    //         "nameIn": "Ivanov2",
    //         "aktNumber": 2,
    //         "note": "del"
    //     },
    //     {
    //         "id": "3",
    //         "data": "03.12.2023",
    //         "regNumber": "G205233",
    //         "nameOut": "Petrov3",
    //         "nameIn": "Ivanov3",
    //         "aktNumber": 3,
    //         "note": "del"
    //     },
    //     {
    //         "id": "4",
    //         "data": "04.12.2023",
    //         "regNumber": "G205234",
    //         "nameOut": "Petrov4",
    //         "nameIn": "Ivanov4",
    //         "aktNumber": 4,
    //         "note": "del"
    //     },
    //     {
    //         "id": "5",
    //         "data": "05.12.2023",
    //         "regNumber": "G205235",
    //         "nameOut": "Petrov5",
    //         "nameIn": "Ivanov5",
    //         "aktNumber": 5,
    //         "note": "del"
    //     },
    //     {
    //         "id": "6",
    //         "data": "06.12.2023",
    //         "regNumber": "G205236",
    //         "nameOut": "Petrov6",
    //         "nameIn": "Ivanov6",
    //         "aktNumber": 6,
    //         "note": "del"
    //     }
    // ];

    // Стани для кожного поля пошуку
    const [searchData, setSearchData] = useState('');
    const [searchNameOut, setSearchNameOut] = useState('');
    const [searchNameIn, setSearchNameIn] = useState('');

    // Функція фільтрації даних за введеними значеннями
    const filteredData = orderItems.filter((item) => {
        return (
            item.data.toString().includes(searchData) &&
            item.nameOut.toLowerCase().includes(searchNameOut.toLowerCase()) &&
            item.nameIn.toLowerCase().includes(searchNameIn.toLowerCase())
        );
    });

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Дата отримання"
                    value={searchData}
                    onChange={(e) => setSearchData(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="ПІБ передав"
                    value={searchNameOut}
                    onChange={(e) => setSearchNameOut(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="ПІБ отримав"
                    value={searchNameIn}
                    onChange={(e) => setSearchNameIn(e.target.value)}
                />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>data</th>
                        <th>regNumber</th>
                        <th>nameOut</th>
                        <th>nameIn</th>
                        <th>aktNumber</th>
                        <th>note</th>
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