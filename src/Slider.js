import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';

import axios from './axios';
import './Slide.css';
const imgBaseUrl = 'https://image.tmdb.org/t/p/original/';
function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
}
SwiperCore.use([Autoplay]);
function Slider({ fetchUrl }) {
    const [slides, setSlides] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setSlides(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    console.log(slides);
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {/* {carousel.map((item) => {
                console.log(item);
                return (
                    <SwiperSlide key={item.id} className="large__slide">
                        <img
                            src={item.thumbnail}
                            alt={item.name}
                            className="slide_item"
                        />
                    </SwiperSlide>
                );
            })} */}
            {slides.map((slide) => {
                console.log(slide);
                return (
                    <SwiperSlide
                        key={slide.id}
                        className="large__slide"
                        style={{
                            backgroundSize: 'cover',
                            backgroundImage: `url("https://image.tmdb.org/t/p/original/${slide?.poster_path}")`,
                            backgroundPosition: 'center center',
                        }}
                    >
                        <div className="slide__content">
                            <h1 className="slide__title">
                                {slide?.title ||
                                    slide?.name ||
                                    slide?.original_name}
                            </h1>
                            <p className="slide__info">{`RELEASE DATE: ${slide.release_date} - VOTES: ${slide.vote_count} `}</p>
                            <p className="slide__description">
                                {truncate(slide?.overview, 100)}
                            </p>
                        </div>
                        {/* <img
                            src={`${imgBaseUrl}${slide.backdrop_path}`}
                            alt={slide.name}
                            className="slide__item"
                        /> */}
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}

export default Slider;
