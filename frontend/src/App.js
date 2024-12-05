import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [cars, setCars] = useState([]);
    const [form, setForm] = useState({ name: '', brand: '', year: '' });

    // Fetch cars from backend
    useEffect(() => {
        axios.get('http://localhost:5000/cars')
            .then(response => setCars(response.data))
            .catch(err => console.error(err));
    }, []);

    // Add a new car
    const addCar = () => {
        axios.post('http://localhost:5000/cars', form)
            .then(response => setCars([...cars, response.data]))
            .catch(err => console.error(err));
    };

    return (
        <div>
            <h1>Motorsport Cars</h1>
            <ul>
                {cars.map((car, index) => (
                    <li key={index}>
                        {car.name} - {car.brand} - {car.year}
                    </li>
                ))}
            </ul>
            <h2>Add a Car</h2>
            <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Brand"
                value={form.brand}
                onChange={e => setForm({ ...form, brand: e.target.value })}
            />
            <input
                type="number"
                placeholder="Year"
                value={form.year}
                onChange={e => setForm({ ...form, year: e.target.value })}
            />
            <button onClick={addCar}>Add Car</button>
        </div>
    );
};

export default App;
