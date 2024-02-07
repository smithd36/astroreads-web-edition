import { useDrag, useDrop } from 'react-dnd';
import React from 'react';

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
        className="border border-gray-700 font-bold text-sm rounded-md m-2 p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
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

export default Card;