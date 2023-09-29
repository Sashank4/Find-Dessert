import React from 'react'
import './trendingStyles.css'
import TrendingData from './trndingData'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import re from '../Assets/re.jpg'
const trending = (props) => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
   
  return (
    <div className='trending'>
        <h1>Trending</h1>
     
        <Carousel responsive={responsive} showDots={true}>

            <TrendingData
            Img = {re}
            heading = "Halwa"
            text = "Halwa is best"
            />
            <TrendingData
            Img = {re}
            heading = "Halwa"
            text = "Halwa is best"
            />
            <TrendingData
            Img = {re}
            heading = "Halwa"
            text = "Halwa is best"
            />
            <TrendingData
            Img = {re}
            heading = "Halwa"
            text = "Halwa is best"
            />
            <TrendingData
            Img = {re}
            heading = "Gulabjamun"
            text = "Halwa is best"
            />
</Carousel>
    </div>
  )
}

export default trending