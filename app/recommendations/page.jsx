'use client';

import { useState } from 'react';
import axios from 'axios';
import Card from './Card';
import Prompt from './Prompt';
import Loading from '../components/Loading';
import Suggestions from './Suggestions';

const GetRecommendations = () => {
  const [inputText, setInputText] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tokens, setTokens] = useState(1);

  const suggestions = [
    "I like books about aliens & space invasion.",
    "Frankenstein is one of my favorite books!",
    'Show me the "weirdest" books you have!'
  ];

  const handleSuggestionClick = async (suggestion) => {
    if (tokens === 0) {
      return; // do nothing for now - integrate token system soon
    }

    setLoading(true);
    try {
      const response = await axios.get("https://smithd36.pythonanywhere.com/get_recommendations_by_text/${suggestion}");
      setRecommendations(response.data.recommendations);
      tokens > 0 && setTokens(prevTokens => prevTokens - 1); // Decrement tokens on successful API call
    } catch (error) {
      console.error('Error making API call:', error);
    }
    setLoading(false);
  };

  const handleApiCall = async () => {
    if (tokens === 0) {
      // do nothing for now - integrate a new token system soon
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get("https://smithd36.pythonanywhere.com/get_recommendations_by_text/${inputText}");
      setRecommendations(response.data.recommendations);
      setTokens(prevTokens => prevTokens - 1); // Decrement tokens on successful API call
    } catch (error) {
      console.error('Error making API call:', error);
    }
    setLoading(false);
  };

  const moveCard = (fromIndex, toIndex) => {
    const newRecommendations = [...recommendations];
    const [movedItem] = newRecommendations.splice(fromIndex, 1);
    newRecommendations.splice(toIndex, 0, movedItem);
    setRecommendations(newRecommendations);
  };

  if (loading) return <Loading />;

  if (recommendations.length === 0 && tokens === 0) {
    // Render message if there are no recommendations and no tokens left
    return (
      <div className="flex justify-center items-center w-full h-full">
        <p className="text-4xl font-thin">You're out of tokens. Please come back later.</p>
      </div>
    );
  }

  return (
    <>
      {/* Primary Page Content */}
      <div className="min-h-screen grid m-4 p-4">
          <div className="flex flex-row justify-end">
          <p className="text-2xl font-bold">Tokens: {tokens}</p>
        </div>
        {/* Display welcome component or handle response data as needed */}
        {recommendations.length === 0 ? (
          <div className="flex items-center w-full h-full absolute">
            <Prompt />
            <Suggestions handleSuggestionClick={ handleSuggestionClick } suggestions={ suggestions } />
          </div>
        ) : (
          <div className="p-4 flex-1 flex flex-wrap justify-around absolute top-1/4">
            {recommendations.map((recommendation, index) => (
              <Card key={recommendation.book_id} recommendation={recommendation} index={index} moveCard={moveCard} />
            ))}
          </div>
        )}

        {/* Input bar and button at the bottom of the page */}
        <div className="bottom-0 absolute w-11/12 flex p-4 bg-white shadow-md">
          <input
            type="text"
            id="inputText"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="border p-2 flex-grow rounded-l-md bg-gray-700 bg-opacity-20"
            placeholder="eg... I like books about space invasion. What do you recommend?"
          />
          <button onClick={handleApiCall} className="bg-gray-700 text-white p-2 rounded-r-md">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white dark:text-white">
              <path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default GetRecommendations;