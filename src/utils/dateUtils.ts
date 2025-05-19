/**
 * Formats a date string into a readable format
 * @param dateStr Date string in ISO format (YYYY-MM-DD)
 * @param format Format option: 'full', 'short', 'weekday', 'monthDay'
 * @returns Formatted date string
 */
export const formatDate = (dateStr: string, format: 'full' | 'short' | 'weekday' | 'monthDay' = 'full'): string => {
    const date = new Date(dateStr);
    
    switch (format) {
        case 'full':
            return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            });
        case 'short':
            return date.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            });
        case 'weekday':
            return date.toLocaleDateString('en-US', {
            weekday: 'long',
            });
        case 'monthDay':
            return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            });
        default:
            return date.toLocaleDateString();
    }
};

/**
   * Gets the current time in HH:MM format
   * @returns Current time string
   */
export const getCurrentTime = (): string => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });
};

/**
   * Checks if a date is today
   * @param dateStr Date string in ISO format (YYYY-MM-DD)
   * @returns Boolean indicating if the date is today
   */
export const isToday = (dateStr: string): boolean => {
    const date = new Date(dateStr);
    const today = new Date();
    
    return date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();
};