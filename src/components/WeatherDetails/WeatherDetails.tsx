import React from 'react';
import { useWeather } from '../../context/useWeather';
import './WeatherDetails.css';

const WeatherDetails: React.FC = () => {
    const { weatherData } = useWeather();

    if (!weatherData) {
        return null;
    }

    const { current } = weatherData;

    return (
        <div className="weather-details">
        <div className="details-grid">
            <div className="detail-item">
            <span className="detail-label">Feels Like</span>
            <span className="detail-value">{Math.round(current.feelslike_c)}°C</span>
            </div>
            <div className="detail-item">
            <span className="detail-label">Humidity</span>
            <span className="detail-value">{current.humidity}%</span>
            </div>
            <div className="detail-item">
            <span className="detail-label">Wind</span>
            <span className="detail-value">{Math.round(current.wind_kph)} km/h</span>
            </div>
            <div className="detail-item">
            <span className="detail-label">Direction</span>
            <span className="detail-value">{current.wind_dir}</span>
            </div>
            <div className="detail-item">
            <span className="detail-label">UV Index</span>
            <span className="detail-value">{current.uv}</span>
            </div>
            <div className="detail-item">
            <span className="detail-label">Time</span>
            <span className="detail-value">{current.is_day ? 'Day' : 'Night'}</span>
            </div>
        </div>
        </div>
    );
};

export default WeatherDetails;