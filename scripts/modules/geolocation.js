// Function to get user location using Geolocation API
export function getUserLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
            resolve({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });
        }, (error) => {
            reject(error);
        });
    });
}