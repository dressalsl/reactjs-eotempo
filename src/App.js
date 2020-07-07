import React, { useState } from 'react';

import { fetchWeather } from './api/fetchWeather';
import styles from './App.css';
import logo from './assets/logo.png';


const App = () => {

    const [query, setQuery] = useState('');

    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchWeather(query)
            console.log(data);
        }
    }

    return (
        <div className='main-container'>
            <img className={styles.image} src={logo} alt="Logo E o tempo?"/>
            <input
                type="text"
                className="search"
                placeholder="Pesquisar"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={search}
            />
        </div>
    );
}

export default App;