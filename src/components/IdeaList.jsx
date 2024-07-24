import React from 'react';

const IdeaList = ({ ideas }) => {
    return (
        <ul>
            {ideas.map((idea, index) => (
                <li key={index}>{idea}</li>
            ))}
        </ul>
    );
};

export default IdeaList;

