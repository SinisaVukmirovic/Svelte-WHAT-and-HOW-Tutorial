import { writable, readable } from 'svelte/store';

export const count = writable(0);

// export const readOnlyData = readable('fallback data', function(set) {
export const readOnlyData = readable(new Date(), function(set) {
    const interval = setInterval(() => {
        set(new Date());
    }, 1000);

    // whenever we use setinterval it is important to clear the interval,
    // to prevent memory leaks
    return () => clearInterval(interval);
});