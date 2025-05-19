export interface WeatherData {
    location: {
        name: string;
        country: string;
        lat: number;
        lon: number;
    };
    current: {
        temp_c: number;
        temp_f: number;
        condition: {
            text: string;
            icon: string;
            code: number;
        };
        wind_kph: number;
        wind_dir: string;
        humidity: number;
        feelslike_c: number;
        feelslike_f: number;
        uv: number;
        is_day: number;
    };
}

export interface ForecastData {
    date: string;
    day: {
        maxtemp_c: number;
        mintemp_c: number;
        condition: {
            text: string;
            icon: string;
            code: number;
        };
        daily_chance_of_rain: number;
    };
}

export interface WeatherForecast {
    location: {
        name: string;
        country: string;
        lat: number;
        lon: number;
    };
    forecast: {
        forecastday: ForecastData[];
    };
}

export interface SearchResult {
    id: number;
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
}

export interface WeatherContextType {
    weatherData: WeatherData | null;
    forecastData: WeatherForecast | null;
    searchResults: SearchResult[];
    loading: boolean;
    error: string | null;
    fetchWeather: (query: string) => Promise<void>;
    fetchForecast: (query: string) => Promise<void>;
    searchLocation: (query: string) => Promise<void>;
}