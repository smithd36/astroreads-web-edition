'use client'

// Import statements
import { useState } from 'react';
import axios from 'axios';
import { useDrag, useDrop } from 'react-dnd';
import Background from '../components/Background';

const Card = ({ recommendation, index, moveCard }) => {
  const [, ref] = useDrag({
    type: 'CARD',
    item: { index },
  });

  const [, drop] = useDrop({
    accept: 'CARD',
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveCard(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => ref(drop(node))}
      className="font-bold text-sm rounded-md bg-gray-500 m-2 p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
    >
      <p className="text-base font-bold text-gray-800 mb-1">{recommendation.title}</p>
      <p className="text-xs text-gray-600 mb-1">Author: {recommendation.author}</p>
      <p className="text-xs text-gray-600">Publication Date: {recommendation.pub_date}</p>
      <a href={recommendation.download_url} className="text-blue-700 block text-xs mb-1">
        Download
      </a>
      <a href={recommendation.read_url} className="text-blue-700 block text-xs mb-1">
        Read Online
      </a>
    </div>
  );
};

const GetRecommendations = () => {
  const [inputText, setInputText] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleApiCall = async () => {
    try {
      const response = await axios.get(`https://smithd36.pythonanywhere.com/get_recommendations_by_text/${inputText}`);
      setRecommendations(response.data.recommendations);
    } catch (error) {
      console.error('Error making API call:', error);
    }
  };

  const moveCard = (fromIndex, toIndex) => {
    const newRecommendations = [...recommendations];
    const [movedItem] = newRecommendations.splice(fromIndex, 1);
    newRecommendations.splice(toIndex, 0, movedItem);
    setRecommendations(newRecommendations);
  };

  return (
    <>
      {/* Background component */}
      <Background />
      <div className="min-h-screen grid m-4 p-4">
        {/* Display recommendations or handle response data as needed */}
        {recommendations.length > 0 && (
          <div className="p-4 flex-1 flex flex-wrap justify-around">
            {recommendations.map((recommendation, index) => (
              <Card key={recommendation.book_id} recommendation={recommendation} index={index} moveCard={moveCard} />
            ))}
          </div>
        )}

        {/* Input bar and button at the bottom of the page */}
        <div>
          <div className="bottom-0 absolute w-11/12 flex p-4 bg-white shadow-md">
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              className="border p-2 flex-grow rounded-l-md bg-gray-700 bg-opacity-20"
              placeholder="What would you like to read about?"
            />
            <button onClick={handleApiCall} className="bg-gray-700 text-white p-2 rounded-r-md">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white dark:text-white">
                <path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              </path>
            </svg>
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetRecommendations;