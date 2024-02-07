import React from 'react';

export default function Greeting() {
  return (
    <div className="w-full max-w-md p-4 bg-white bg-opacity-40 rounded-md shadow-md">
        <h1 className="text-2xl text-gray-800 mb-4">Hello! 👋</h1>
        <p className="text-gray-800 mb-2">This website is an extension of the Mobile App known as <b className="text-blue-700">AstroReads.</b></p>
        <p className="text-gray-800 mb-2">Now with this new web app, this Sci-Fi AI reading companion can be used from a web browser via a computer, or on an Android OS.</p>
        <p className="text-gray-800 mb-2">We are a <b>free</b> library of Sci-Fi books of <i>ALL AGES</i>. In fact, there are so many to sort through, we decided that this would also make a great research project.</p>
        <p className="text-gray-800 mb-2">Recommender systems of all types use <i>Natural Language processing</i>, but there aren&apos;t many out there for science fiction enthusiasts like us.</p>
        <p className="text-gray-800 mb-2">AstroReads contributes to research in natural language processing techniques such as &quot;document embedding&quot; with Doc2Vec and &quot;bidirectional encoder representations with transformers&quot; (BERT).</p>
        <p className="text-gray-800 mb-2">There are enough people trying to steal and sell our data already, and we don&apos;t want to contribute to that.</p>
        <p className="text-gray-800 mb-4">Just Click &apos;Get Started&apos; below to start. <b>This site will never ask for, or take/store any of your data.</b></p>
        <div className="flex justify-center m-4">
            <a href="https://github.com/smithd36" target="_blank" rel="noopener noreferrer">
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" width="50" height="50" />
            </a>
        </div>    
    </div>
  );
}