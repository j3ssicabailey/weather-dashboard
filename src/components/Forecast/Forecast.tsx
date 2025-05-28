import React from 'react';
import { useWeather } from '../../context/useWeather';
import WeatherCard from '../WeatherCard/WeatherCard';
import './Forecast.css';

const Forecast: React.FC = () => {
    const { forecastData, loading, error } = useWeather();

    if (loading) {
        return null; 
    }

    if (error) {
        return null; 
    }

    if (!forecastData) {
        return null;
    }

    const { forecast } = forecastData;

    return (
        <div className="forecast">
        <h2 className="forecast-title">5-Day Forecast</h2>
        <div className="forecast-cards">
            {forecast.forecastday.map((day) => (
            <WeatherCard key={day.date} dayData={day} />
            ))}
        </div>
        </div>
    );
};

export default Forecast;