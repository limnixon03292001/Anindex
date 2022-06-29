import React from 'react'
import Slider from 'react-slick/lib/slider';
import styles from './TopSlider.module.css';
import Loader from '../../GlobalLoader/Loader';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { settings1 } from '../../../utils/SliderSettings';
import { Link } from 'react-router-dom';


const TopSlider = ({data, title, link, loading}) => {

  return (
    <div>
        <div className={styles.header}>
            <h1 className={styles.topAnimeText}>{title}</h1>
            <Link to={link}>View all</Link>
        </div>
        {loading ?
            <div className={styles.loaderContainer}>
             <Loader/> <p>Fetching {title}...</p>
           </div> 
        :
            <Slider {...settings1} className={styles.slider}>
                {
                    data?.data?.data?.map((anime, id) => (
                        <Link to={`/anime/${anime?.mal_id}`} key={id} className={styles.linkWrapper}>
                            <div className={styles.card}>
                                <img src={anime?.images?.jpg?.image_url} alt="poster" className={styles.imgTops} />
                                <p>{anime?.title}</p>
                            </div>
                        </Link>
                    ))
                }
            </Slider>
        }
       
    </div>
  )
}

export default TopSlider 