import React, { useState } from 'react';

const IdeaForm = ({ addIdea }) => {
    const [idea, setIdea] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (idea.trim()) {
            addIdea(idea);
            setIdea('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="Enter your idea"
            />
            <button type="submit">Add Idea</button>
        </form>
    );
};

export default IdeaForm;
