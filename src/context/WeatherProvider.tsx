// src/context/WeatherProvider.tsx
import React, { useState, type ReactNode } from 'react';
import { getCurrentWeather, getForecast, searchLocations } from '../api/weatherApi';
import { WeatherContext } from './WeatherContext';
import type { WeatherData, WeatherForecast, SearchResult } from '../types/weather';

export const WeatherProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [forecastData, setForecastData] = useState<WeatherForecast | null>(null);
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchWeather = async (query: string) => {
        try {
            setLoading(true);
            setError(null);
            const data = await getCurrentWeather(query);
            setWeatherData(data);
        } catch (err) {
            setError('Failed to fetch weather data');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const fetchForecast = async (query: string) => {
        try {
            setLoading(true);
            setError(null);
            const data = await getForecast(query);
            setForecastData(data);
        } catch (err) {
            setError('Failed to fetch forecast data');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const searchLocation = async (query: string) => {
        try {
            setLoading(true);
            setError(null);
            const data = await searchLocations(query);
            setSearchResults(data);
        } catch (err) {
            setError('Failed to search locations');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const value = {
        weatherData,
        forecastData,
        searchResults,
        loading,
        error,
        fetchWeather,
        fetchForecast,
        searchLocation
    };

    return (
        <WeatherContext.Provider value={value}>
            {children}
        </WeatherContext.Provider>
    );
};
