
import { useContext } from 'react';
import { WeatherContext } from './WeatherContext';
import type { WeatherContextType } from '../types/weather';

export const useWeather = (): WeatherContextType => {
    const context = useContext(WeatherContext);
    if (context === undefined) {
        throw new Error('useWeather must be used within a WeatherProvider');
    }
    return context;
};
