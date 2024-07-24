import React, { useState } from 'react';
import IdeaForm from '../components/IdeaForm';
import IdeaList from '../components/IdeaList';

const Home = () => {
    const [ideas, setIdeas] = useState([]);

    const addIdea = (idea) => {
        setIdeas([...ideas, idea]);
    };

    return (
        <main>
            <h2>Welcome to Idea Bank</h2>
            <IdeaForm addIdea={addIdea} />
            <IdeaList ideas={ideas} />
        </main>
    );
};

export default Home;
