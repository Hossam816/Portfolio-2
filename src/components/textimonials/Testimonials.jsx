import React from 'react'
import './testimonials.css'

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'

const data = [
    {
        avatar: AVATAR1,
        name: 'Eman Fawzy',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem aut accusamus nulla veniam architecto voluptatibus, similique reiciendis optio obcaecati amet? Ratione mollitia optio earum quia numquam? Natus libero nesciunt totam!'
    },
    {
        avatar: AVATAR2,
        name: 'Karim Hady',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem aut accusamus nulla veniam architecto voluptatibus, similique reiciendis optio obcaecati amet? Ratione mollitia optio earum quia numquam? Natus libero nesciunt totam!'
    },
    {
        avatar: AVATAR3,
        name: 'Haleem Musa',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem aut accusamus nulla veniam architecto voluptatibus, similique reiciendis optio obcaecati amet? Ratione mollitia optio earum quia numquam? Natus libero nesciunt totam!'
    },
    {
        avatar: AVATAR4,
        name: 'Tahia ELaraby',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem aut accusamus nulla veniam architecto voluptatibus, similique reiciendis optio obcaecati amet? Ratione mollitia optio earum quia numquam? Natus libero nesciunt totam!'
    }
]


function Testimonials() {
    return (
        <section>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className='container testimonials__container'
                // install Swiper modules
                modules={[ Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                {
                    data.map(({avatar, name, review}, index) => {
                        return(
                            <SwiperSlide className='testimonial' key={index}>
                                <div className='client__avatar'>
                                    <img src={avatar} alt="im" />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </section>
    )
}

export default Testimonials