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
    <div ref={(node) => ref(drop(node))} className="rounded-md bg-gray-500 m-2 p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
      <p>Title: {recommendation.title}</p>
      <p>Author: {recommendation.author}</p>
      <a href={recommendation.download_url} className="text-teal-700 block">
        Download
      </a>
      <a href={recommendation.read_url} className="text-teal-700 block">
        Read for Free
      </a>
      <p>Publication Date: {recommendation.pub_date}</p>
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

      <div className="min-h-screen flex flex-col">
        {/* Display recommendations or handle response data as needed */}
        {recommendations.length > 0 && (
          <div className="p-4 flex-1 flex flex-wrap justify-around">
            {recommendations.map((recommendation, index) => (
              <Card key={recommendation.book_id} recommendation={recommendation} index={index} moveCard={moveCard} />
            ))}
          </div>
        )}

        {/* Input bar and button at the bottom of the page */}
        <div className="p-4">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            className="border p-2"
            placeholder="Enter text here"
          />
          <button onClick={handleApiCall} className="bg-blue-500 text-white p-2 ml-2">
            Get Recommendations
          </button>
        </div>
      </div>
    </>
  );
};

export default GetRecommendations;