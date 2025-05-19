import React from 'react';
import type { ForecastData } from '../../types/weather';
import './WeatherCard.css';

interface WeatherCardProps {
    dayData: ForecastData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ dayData }) => {
    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        });
    };

    return (
        <div className="weather-card card">
        <div className="weather-card-date">{formatDate(dayData.date)}</div>
        
        <img 
            src={dayData.day.condition.icon} 
            alt={dayData.day.condition.text} 
            className="weather-card-icon"
        />
        
        <div className="weather-card-condition">{dayData.day.condition.text}</div>
        
        <div className="weather-card-temps">
            <span className="max-temp">{Math.round(dayData.day.maxtemp_c)}°</span>
            <span className="temp-separator">/</span>
            <span className="min-temp">{Math.round(dayData.day.mintemp_c)}°</span>
        </div>
        
        <div className="weather-card-rain">
            <span className="rain-chance">{dayData.day.daily_chance_of_rain}%</span>
            <span className="rain-label">chance of rain</span>
        </div>
        </div>
    );
};

export default WeatherCard;