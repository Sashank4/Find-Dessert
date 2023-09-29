import React from 'react'
import './InspiredStyles.css'
import InspiredData from './InspiredData'
import Img from '../Assets/re.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Inspired = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 767, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  return (
    <>
    <div className='inspiration'>
        <h1>Catogiries you can Inspire</h1>
    </div>

    <div className='data'>
    <Carousel 
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
         >
        <InspiredData
        Img = {Img}
        Category = "Indian"
        />
        <InspiredData
        Img = {Img}
        Category = "Indian"
        />
        <InspiredData
        Img = {Img}
        Category = "Indian"
        />
        <InspiredData
        Img = {Img}
        Category = "Indian"
        />
        <InspiredData
        Img = {Img}
        Category = "Indian"
        />
        </Carousel>
        </div>
    </>
  )
}

export default Inspired