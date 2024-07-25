import React, { useState } from 'react';
import { fetchRandomIdea } from '../services/apiService';

const TestAPI = () => {
    const [idea, setIdea] = useState(null);
    const [error, setError] = useState(null);

    const handleFetchIdea = async () => {
        try {
            const randomIdea = await fetchRandomIdea();
            setIdea(randomIdea);
            setError(null); // Clear any previous errors
        } catch (error) {
            setError(error.message);
            setIdea(null); // Clear previous idea on error
        }
    };

    return (
        <div>
            <button onClick={handleFetchIdea}>Get a Random Idea</button>
            {idea && <div>{idea.activity}</div>}
            {error && <div>Error: {error}</div>}
        </div>
    );
};

export default TestAPI;
