// Function to store data in local storage
export function storeData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Function to retrieve data from local storage
export function retrieveData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}