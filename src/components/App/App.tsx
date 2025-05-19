import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import Forecast from '../Forecast/Forecast';
import WeatherMap from '../WeatherMap/WeatherMap';
import { WeatherProvider } from '../../context/WeatherProvider';

const App: React.FC = () => {
    return (
        <WeatherProvider>
        <div className="app">
            <header className="app-header">
                <h1>Weather Dashboard</h1>
            </header>
            <main className="app-content">
                <SearchBar />
                <CurrentWeather />
                <Forecast />
                <WeatherMap />
            </main>
            <footer className="app-footer">
                <p>Weather Dashboard &copy; {new Date().getFullYear()}</p>
            </footer>
        </div>
        </WeatherProvider>
    );
};

export default App;