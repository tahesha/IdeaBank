// services/apiService.js
export const fetchRandomIdea = async () => {
    const response = await fetch('https://www.boredapi.com/api/activity/');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
};
