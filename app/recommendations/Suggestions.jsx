'use client';

import React, { useState } from 'react';

const Suggestions = ({ handleSuggestionClick, suggestions }) => {
  const [selectedSuggestion, setSelectedSuggestion] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  return (
    <div className="flex flex-wrap items-center justify-center">
      {suggestions.map((suggestion, index) => (
        <div
          key={index}
          className={`text-white border font-thin rounded-md p-4 m-4 bg-opacity-70 cursor-pointer ${selectedSuggestion === suggestion ? 'bg-gray-700' : 'bg-gray-500'}`}
          onClick={() => {
            handleSuggestionClick(suggestion);
            setSelectedSuggestion(suggestion);
          }}
        >
          <p>{suggestion}</p>
        </div>
      ))}
      {/* Display recommendations if available */}
      {recommendations && recommendations.length > 0 && (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Recommendations:</h2>
          <ul>
            {recommendations.map((recommendation) => (
              <li key={recommendation.book_id} className="border rounded-md p-4 m-4">
                <p>Title: {recommendation.title}</p>
                <p>Author: {recommendation.author}</p>
                <a href={recommendation.download_url} className="text-teal-700">Download<br/></a>
                <a href={recommendation.read_url} className="text-teal-700">Read for Free<br/></a>
                <p>Publication Date: {recommendation.pub_date}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Suggestions;