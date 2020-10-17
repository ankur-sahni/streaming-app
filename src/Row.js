import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';

//const imgBaseUrl ="https://image.tmdb.org/t/p/original/"
const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map((movie) => {
                    return (
                        <img
                            className={`row__poster ${
                                isLargeRow && 'rowPosterLarge'
                            }`}
                            key={movie.id}
                            src={`${imgBaseUrl}${
                                isLargeRow
                                    ? movie.poster_path
                                    : movie.backdrop_path
                            }`}
                            alt={movie.name}
                        ></img>
                    );
                })}
            </div>
        </div>
    );
}

export default Row;
