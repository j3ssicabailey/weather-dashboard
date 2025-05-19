import React from 'react';
import { useWeather } from '../../context/useWeather';
import WeatherDetails from '../WeatherDetails/WeatherDetails';
import './CurrentWeather.css';

const CurrentWeather: React.FC = () => {
    const { weatherData, loading, error } = useWeather();

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    if (!weatherData) {
        return (
        <div className="no-data">
            <p>Search for a location to see weather information</p>
        </div>
        );
    }

    const { location, current } = weatherData;

    return (
        <div className="current-weather card">
        <div className="current-weather-header">
            <div className="location-info">
            <h2>{location.name}</h2>
            <p>{location.country}</p>
            </div>
            <div className="current-date">
            {new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            })}
            </div>
        </div>

        <div className="current-weather-content">
            <div className="temperature-container">
            <img 
                src={current.condition.icon} 
                alt={current.condition.text} 
                className="weather-icon" 
            />
            <div className="temperature">
                <span className="temperature-value">{Math.round(current.temp_c)}</span>
                <span className="temperature-unit">°C</span>
            </div>
            <p className="weather-condition">{current.condition.text}</p>
            </div>

            <WeatherDetails />
        </div>
        </div>
    );
};

export default CurrentWeather;