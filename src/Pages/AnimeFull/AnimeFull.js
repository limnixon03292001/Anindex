import axios from 'axios';
import React from 'react'
import styles from './AnimeFull.module.css';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { FaStar,FaHeart } from 'react-icons/fa';
import RecommendationSlider from '../../components/Sliders/RecommendationSlider/RecommendationSlider';
import Trailer from '../../components/Trailer/Trailer';
import Loader from '../../components/GlobalLoader/Loader';
import Header from '../../components/Header/Header';

const fetchAnimeDetails = ({ queryKey }) => {
  const id = queryKey[1];
  return axios.get(`https://api.jikan.moe/v4/anime/${id}/full`);
}

const fetchAnimeCharacters = ({ queryKey }) => {
  const id = queryKey[1];
  return axios.get(`https://api.jikan.moe/v4/anime/${id}/characters`);
}

const AnimeFull = () => {

  const {id} = useParams();
  
  const {isLoading, data,} = useQuery(['animeDetails', id], fetchAnimeDetails, { 
      onError: (err) => {
          console.log(err)
      }
  });

  const { isLoading: loadingCharacters,  data: charactersData} = useQuery(['anime-characters', id], fetchAnimeCharacters, { 
    onError: (err) => {
        console.log(err)
    }
  });
  
    return (
      <>
      {isLoading ? 
          <div className={styles.loaderContainer}>
            <Loader/> <p>Fetching anime...</p>
          </div> 
      :
        <div>
          <Header/>
          <div className={styles.firstLayerWrapper}>
            <div className={styles.background} style={{backgroundImage: `url(${data?.data?.data?.images?.jpg?.image_url})`}}/>

            <div className={styles.firstLayer}>
              <div className={styles.imageWrapper}>
                <img src={data?.data?.data?.images?.jpg?.image_url} alt="poster" className={styles.posterImg} />
              </div>

              <div>
                <div>
                  <p className={styles.popularity}>Popularity #{data?.data?.data?.popularity}</p>
                  <h2 className={styles.title}>{data?.data?.data?.title}</h2>
                  <p className={styles.titleJapanese}>{data?.data?.data?.title_japanese}</p>
                  <p className={styles.synopsis}>{data?.data?.data?.synopsis}</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.secondLayer}>
          <div className={styles.secondLayerGrid}>
            <div className={styles.secondLayerLeftSide}>
              <div className={styles.score}>
                <FaStar color="rgb(216 255 0 / 91%)" size="1.3rem"  />
                <p> Score: {data?.data?.data?.score}</p>
              </div>

              <div className={styles.ranked}>
                  <FaHeart color="#de3838" size="1.3rem"  />
                  <p>Ranked #{data?.data?.data?.rank} </p>
              </div>

              <div className={styles.moreDetails}>
                <ul>
                  <li>
                    <p>Genre</p>
                    {data?.data?.data?.genres.map((genre,id) => (
                      <span key={id}>{genre?.name}, </span>
                    ))}
                  </li>
                  <li>
                    <p>Source</p>
                    <span>{data?.data?.data?.source}</span>
                  </li>
                  <li>
                    <p>Format</p>
                    <span>{data?.data?.data?.type}</span>
                  </li>
                  <li>
                    <p>Season</p>
                    <span>{data?.data?.data?.season}</span>
                  </li>
                  <li>
                    <p>Episodes</p>
                    <span>{data?.data?.data?.episodes}</span>
                  </li>
                  <li>
                    <p>Episodes Duration</p>
                    <span>{data?.data?.data?.duration}</span>
                  </li>
                  <li>
                    <p>Aired on</p>
                    <span>{data?.data?.data?.aired?.string}</span>
                  </li>
                  <li>
                    <p>Status</p>
                    <span>{data?.data?.data?.status}</span>
                  </li>
                  <li>
                    <p>Memebers</p>
                    <span>{data?.data?.data?.members}</span>
                  </li>
                  <li>
                    <p>Favorites</p>
                    <span>{data?.data?.data?.favorites}</span>
                  </li>
                </ul>
              </div>
            </div>

          
            <div className={styles.secondLayerRightSide}>
              {/* Characters & Voice Actors */}
              <div className={styles.charactersActorWrapper}>
                <p>Characters & Voice Actors</p>
                <div className={styles?.gridCharacters}>
                  {charactersData?.data?.data?.slice(0,6).map((characters,id) => (
                    <div className={styles.charactersCard} key={id}>

                      <div className={styles.characterActor} >
                        <div className={styles.character}>
                          <div className={styles?.characterActorImg} style={{backgroundImage: `url(${characters?.character?.images?.jpg?.image_url})`}}/>
                          <div className={styles.nameRole}>
                            <p>{characters?.character?.name}</p>
                            <p>{characters?.role}</p>
                          </div>
                        </div>

                        <div className={styles.actor}>
                          <div className={styles.nameRole}>
                            <p>{characters?.voice_actors[0]?.person?.name}</p>
                            <p>{characters?.voice_actors[0]?.language}</p>
                          </div>
                          <div className={styles?.characterActorImg} style={{backgroundImage: `url(${characters?.voice_actors[0]?.person?.images?.jpg?.image_url})`}}/> 
                          
                        </div>
                      </div>
                      
                    </div>
                  ))}
                </div>
              </div>
          
              {/* Characters & Voice Actors */}
              <div>
                {/* Opening Themes */}
                  <p>Opening Themes</p>   
                  <div className={styles.themesGrid}>
                      {data?.data?.data?.theme?.openings.map((opening,id) => (
                        <div className={styles.themesItem} key={id}>
                          <p>{opening}</p>
                        </div>
                      ))}
                  </div>
                {/* Opening Themes */}   

                {/* Ending Themes */}
                <p>Ending Themes</p>   
                <div className={styles.themesGrid}>
                    {data?.data?.data?.theme?.endings.map((ending,id) => (
                      <div className={styles.themesItem} key={id}>
                        <p>{ending}</p>
                      </div>
                    ))}
                </div>
                {/* Ending Themes*/}
              </div>
              
                {/* Trailer */}
                <Trailer trailerId={data?.data?.data?.trailer?.youtube_id}/>
                {/* Trailer */}

                {/* Recommendations Slider */}
            
                {/* Recommendations Slider */}
            </div>
          
          </div>
          </div>


          
          <div className={styles.recommendationMainWrapper}>
            <RecommendationSlider id={id}/>
          </div>
      </div>
    }
      
    </>
    )
  }

export default AnimeFull