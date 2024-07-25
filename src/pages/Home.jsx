import React, { useState } from 'react';
import { fetchRandomIdea } from '../services/apiService';
import IdeaForm from '../components/IdeaForm';
import IdeaList from '../components/IdeaList';
import TestAPI from '../components/TestAPI';


const Home = () => {
    const [ideas, setIdeas] = useState([]);

    const addIdea = (idea) => {
        setIdeas([...ideas, idea]);
    };

    const handleFetchIdea = async () => {
        try {
            const randomIdea = await fetchRandomIdea();
            addIdea(randomIdea.activity);
        } catch (error) {
            console.error("Error fetching the random idea:", error);
        }
    };

    return (
        <main>
            <h2>Welcome to Idea Bank</h2>
            <button onClick={handleFetchIdea}>Get a Random Idea</button>
            <IdeaForm addIdea={addIdea} />
            <IdeaList ideas={ideas} />
            <TestAPI /> {/* Added this line to test */}

        </main>
    );
};

export default Home;
