// Function to get user location using Geolocation API
export function getUserLocation() {
    return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition((position) => {
            resolve({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
        }, (error) => {
            console.error('Error getting user location:', error);
            resolve(null);
        });
    });
}