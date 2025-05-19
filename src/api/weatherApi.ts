import axios from 'axios';
import type { WeatherData, WeatherForecast, SearchResult } from '../types/weather';

const API_KEY = '07cb27245f624621a7d154729251605';
const BASE_URL = 'https://api.weatherapi.com/v1';

// Create axios instance
const weatherApi = axios.create({
    baseURL: BASE_URL,
    params: {
        key: API_KEY
    }
});

export const getCurrentWeather = async (query: string): Promise<WeatherData> => {
    try {
        const response = await weatherApi.get('/current.json', {
        params: {
            q: query
        }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching current weather:', error);
        throw error;
    }
};

export const getForecast = async (query: string, days: number = 5): Promise<WeatherForecast> => {
    try {
        const response = await weatherApi.get('/forecast.json', {
        params: {
            q: query,
            days
        }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching forecast:', error);
        throw error;
    }
};

export const searchLocations = async (query: string): Promise<SearchResult[]> => {
    try {
        const response = await weatherApi.get('/search.json', {
        params: {
            q: query
        }
        });
        return response.data;
    } catch (error) {
        console.error('Error searching locations:', error);
        throw error;
    }
};