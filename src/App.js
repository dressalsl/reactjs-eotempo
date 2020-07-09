import React, { useState } from 'react';

import { fetchWeather } from './api/fetchWeather';
import styles from './App.css';
import logo from './assets/logo.png';


const App = () => {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({

    });

    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchWeather(query)
            
            console.log(data);
            setWeather(data);
            setQuery('');
        }
    }

    return (
        <div className='main-container'>
            <img className={styles.image} src={logo} alt="Logo Weather Temperature?"/>
            <input
                type="text"
                className="search"
                placeholder="Search City"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={search}
            />
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div>
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                    <div>
                        <h4>
                            Thermal sensation: {Math.round(weather.main.feels_like)}<sup>&deg;C</sup>
                        </h4>
                        <h4>
                            Maximum temperature: {Math.round(weather.main.temp_max)}<sup>&deg;C</sup>
                        </h4>
                        <h4>
                            Minimum temperature: {Math.round(weather.main.temp_min)}<sup>&deg;C</sup>
                        </h4>
                        <h4>
                           Humidity: {weather.main.humidity} %
                        </h4>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;