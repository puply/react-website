import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
//import swiper css
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './Slider.css'

import { SliderProducts } from '../../data/products';


const Slider = () => {
    return (
        <div>
            <div className="s-container" id='sales'>
                <Swiper
                    breakpoints={{
                        640:{
                            slidesPerView: 3
                        },
                        0:{
                            slidesPerView:1
                        }
                    }}
                    modules={[Pagination,Navigation]}
                    className="mySwiper"
                    navigation={true}
                    loopFillGroupWithBlank={true} //oynatıyor
                    slidesPerView={3}
                    spaceBetween={40}
                    slidesPerGroup={1}
                    loop={true}
                >
                    {SliderProducts.map((slide, i) => (
                        <SwiperSlide>
                            <div className="left-s">
                                <div className="name">
                                    <span>{slide.name}</span>
                                    <span>{slide.detail}</span>
                                </div>
                                <span>{slide.price}$</span>
                                <div>Shop Now</div>
                            </div>
                            <img src={slide.img} alt="product" className='img-p' />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Slider
