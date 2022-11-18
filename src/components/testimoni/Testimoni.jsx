import React from 'react';
import './testimoni.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimoni = () => {
    return (
        <section id='testimoni'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}>
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR1} alt="Avatar 1" />
                    </div>
                    <h5>Leona</h5>
                    <small className='client__review'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam suscipit atque obcaecati quia in error, perferendis eum at officia quam fugit ullam? Odit sunt qui laudantium unde odio necessitatibus ipsum?
                    </small>
                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR2} alt="Avatar 2" />
                    </div>
                    <h5>Indro</h5>
                    <small className='client__review'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam suscipit atque obcaecati quia in error, perferendis eum at officia quam fugit ullam? Odit sunt qui laudantium unde odio necessitatibus ipsum?
                    </small>
                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR3} alt="Avatar 3" />
                    </div>
                    <h5>Feirdaus</h5>
                    <small className='client__review'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam suscipit atque obcaecati quia in error, perferendis eum at officia quam fugit ullam? Odit sunt qui laudantium unde odio necessitatibus ipsum?
                    </small>
                </SwiperSlide>
                <SwiperSlide className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR4} alt="Avatar 4" />
                    </div>
                    <h5>Reva Lina</h5>
                    <small className='client__review'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam suscipit atque obcaecati quia in error, perferendis eum at officia quam fugit ullam? Odit sunt qui laudantium unde odio necessitatibus ipsum?
                    </small>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default Testimoni;
