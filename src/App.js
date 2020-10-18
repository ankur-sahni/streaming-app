import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import Row from './Row';
import requests from './requests';
import './App.css';
import Nav from './Nav';
import Slider from './Slider';
// import axios from 'axios';

function App() {
    // const [carousel, setCarousel] = useState([]);

    // useEffect(() => {
    //     const uri =
    //         'http://stagapi.vuscreen.in/spicescreen/webapi/feedByStorage';
    //     const headers = {
    //         'Content-Type': 'application/json',
    //         Accept: 'application/json',
    //     };
    //     const postData = {
    //         partner: 'dbrovmhalfs83i130k6u9fh0sj',
    //         storage_capacity: '2GB',
    //     };
    //     async function getAppData() {
    //         try {
    //             const request = await axios.post(uri, postData, headers);
    //             setCarousel(request.data.WATCH[0].subCat[0].content);
    //         } catch (err) {
    //             // Handle Error Here
    //             console.error(err);
    //         }
    //     }
    //     getAppData();
    // }, []);

    return (
        <div className="App">
            <Nav />
            <Banner />
            <Slider fetchUrl={requests.fetchSlider} />
            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetFlixOriginals}
                isLargeRow
            />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row
                title="Trending Now"
                fetchUrl={requests.fetchTrending}
                isLargeRow
            />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row
                title="Romantic Movies"
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />
        </div>
    );
}

export default App;
