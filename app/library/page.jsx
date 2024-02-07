'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';

export default function Page() {
    const [books, setBooks] = useState([]);
    const [displayCount, setDisplayCount] = useState(12);
    const [isLoading, setIsLoading] = useState(true);

    const handleApiCall = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get('https://smithd36.pythonanywhere.com/get_all_books');
            setBooks(response.data.all_books);
        } catch (error) {
            console.error('Error making API call: ', error);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        handleApiCall();
    }, []);

    const handleShowMore = () => {
        setDisplayCount(prevCount => prevCount + 9);
    };

    if (isLoading) {
        return <div><Loading /></div>;
    }

    return (
        <>
            <div className="p-4">
                <h1 className="text-2xl mb-4">Total Books: {books.length}</h1>
                <div className="flex flex-wrap justify-around">
                    {books.slice(0, displayCount).map((book, index) => (
                        <div key={index} className="border border-gray-700 m-2 p-4 w-64">
                            <h2 className="text-xl">{book.title}</h2>
                            <h3 className="text-lg text-gray-500">{book.author}</h3>
                            <p className="text-sm">Published in {book.pub_date}</p>
                            <div className="mt-2">
                                <a href={book.read_url} className="text-blue-500 hover:underline">Read</a> | <a href={book.download_url} className="text-blue-500 hover:underline">Download</a>
                            </div>
                        </div>
                    ))}
                </div>
                {displayCount < books.length && (
                    <button onClick={handleShowMore} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                        Show More
                    </button>
                )}
            </div>
        </>
    );
}