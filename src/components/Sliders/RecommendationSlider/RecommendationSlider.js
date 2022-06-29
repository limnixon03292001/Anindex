import React from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
import styles from './RecommendationSlider.module.css';
import { Link } from 'react-router-dom';
import { settings1, settings2 } from '../../../utils/SliderSettings';
import Slider from 'react-slick/lib/slider';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const  fetchRecommendations = ({ queryKey }) => {
    const id = queryKey[1];
    return axios.get(`https://api.jikan.moe/v4/anime/${id}/recommendations`);
}

const RecommendationSlider = ({ id }) => {

    const {isloading, data} = useQuery(['anime-recommendation', id], fetchRecommendations, { 
        onError: (err) => {
            console.log(err)
        }
    });
    
  return (
    <div className={styles.recommendationWrapper}>
        <p className={styles.titleRecommedation}>Recommendations</p>   

        { data?.data?.data.length === 0 ? 
            <p className={styles.norecommendationText}>No recommendations found.</p>   
            :
            <Slider {...settings2} className={styles.slider}>
                {
                    data?.data?.data?.map((recommendation, id) => (
                        
                        <Link to={`/anime/${recommendation?.entry?.mal_id}`}  key={id} className={styles.linkWrappers}>
                            <div className={styles.card}>
                                <img src={recommendation?.entry?.images?.jpg?.image_url} alt="poster" className={styles.imgRecommendation} />
                                <p>{recommendation?.entry?.title}</p>
                            </div>
                        </Link>
                        
                    ))
                }
            </Slider>
        }
    </div>
  )
}

export default RecommendationSlider