import React, { useState } from 'react'

export const BookList = () => {
    const data = [
        { id: 1, name: 'John', age: 25, city: 'New York' },
        { id: 2, name: 'Jane', age: 30, city: 'Los Angeles' },
        { id: 3, name: 'Bob', age: 22, city: 'Chicago' },
        { id: 4, name: 'Alice', age: 28, city: 'San Francisco' },
    ];

    // Стани для кожного поля пошуку
    const [searchName, setSearchName] = useState('');
    const [searchAge, setSearchAge] = useState('');
    const [searchCity, setSearchCity] = useState('');

    // Функція фільтрації даних за введеними значеннями
    const filteredData = data.filter((item) => {
        return (
            item.name.toLowerCase().includes(searchName.toLowerCase()) &&
            item.age.toString().includes(searchAge) &&
            item.city.toLowerCase().includes(searchCity.toLowerCase())
        );
    });

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Search by Name"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Search by Age"
                    value={searchAge}
                    onChange={(e) => setSearchAge(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Search by City"
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}