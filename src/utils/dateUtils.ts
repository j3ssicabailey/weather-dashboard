export const formatDate = (dateStr: string, format: 'full' | 'short' | 'weekday' | 'monthDay' = 'full'): string => {
    const date = new Date(dateStr);
    
    switch (format) {
        case 'full':
            return date.toLocaleDateString('en-GB', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            });
        case 'short':
            return date.toLocaleDateString('en-GB', {
                weekday: 'short',
                day: 'numeric',
                month: 'short',
            });
        case 'weekday':
            return date.toLocaleDateString('en-GB', {
                weekday: 'long',
            });
        case 'monthDay':
            return date.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
            });
        default:
            return date.toLocaleDateString('en-GB');
    }
};

export const getCurrentTime = (): string => {
    const now = new Date();
    return now.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });
};

export const isToday = (dateStr: string): boolean => {
    const date = new Date(dateStr);
    const today = new Date();
    
    return date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();
};