import React, { useState, useEffect, useRef } from 'react';
import { useWeather } from '../../context/useWeather';
import './SearchBar.css';

const SearchBar: React.FC = () => {
    const { searchLocation, searchResults, fetchWeather, fetchForecast } = useWeather();
    const [searchQuery, setSearchQuery] = useState('');
    const [showResults, setShowResults] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    // Handle outside clicks to close dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
        if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
            setShowResults(false);
        }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSearch = () => {
        if (searchQuery.trim() !== '') {
        searchLocation(searchQuery);
        setShowResults(true);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        if (e.target.value.trim() !== '' && e.target.value.length > 2) {
        searchLocation(e.target.value);
        setShowResults(true);
        } else {
        setShowResults(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
        handleSearch();
        }
    };

    const handleSelectLocation = (lat: number, lon: number) => {
        const query = `${lat},${lon}`;
        fetchWeather(query);
        fetchForecast(query);
        setShowResults(false);
    };

    return (
        <div className="search-bar" ref={searchRef}>
        <div className="search-input-container">
            <input
            type="text"
            className="search-input"
            placeholder="Search for a city..."
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            />
            <button className="search-button" onClick={handleSearch}>
            Search
            </button>
        </div>
        
        {showResults && searchResults.length > 0 && (
            <div className="search-results">
            {searchResults.map((result) => (
                <div 
                key={result.id} 
                className="search-result-item"
                onClick={() => handleSelectLocation(result.lat, result.lon)}
                >
                {result.name}, {result.region && `${result.region}, `}{result.country}
                </div>
            ))}
            </div>
        )}
        </div>
    );
};

export default SearchBar;