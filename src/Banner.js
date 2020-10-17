import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        async function fatchData() {
            const request = await axios.get(requests.fetchNetFlixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fatchData();
    }, [requests.fetchNetFlixOriginals]);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }
    return (
        <div>
            <header
                className="banner"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.poster_path}")`,
                    backgroundPosition: 'center center',
                }}
            >
                <div className="banner__Content">
                    <h1 className="banner__title">
                        {movie?.title || movie?.name || movie?.original_name}
                    </h1>
                    <div className="banner__buttons">
                        <button className="banner_button">Play</button>
                        <button className="banner_button">My List</button>
                    </div>
                    <p className="banner__description">
                        {truncate(movie?.overview, 150)}
                    </p>
                </div>
                <div className="banner__fade"></div>
            </header>
        </div>
    );
}

export default Banner;
