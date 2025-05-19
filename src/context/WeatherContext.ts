import { createContext } from 'react';
import type { WeatherContextType } from '../types/weather';

export const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

