import React from 'react';
import styles from './SeasonNow.module.css';
import axios from 'axios';
import { useInfiniteQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loader from '../../components/GlobalLoader/Loader';
import Header from '../../components/Header/Header';

const fetchSeasonNow = ({ pageParam = 1 }) => {
  return axios.get(`https://api.jikan.moe/v4/seasons/now?page=${pageParam}`);
}


const SeasonNow = () => {

  const {isLoading, isFetching, data, hasNextPage, fetchNextPage } = useInfiniteQuery('seasonNow', fetchSeasonNow, 
  {
      getNextPageParam: (lastPage, pages) => {
          const nextPage = pages[pages.length - 1];
          if(nextPage.data.length === 0){
              return undefined
          }else {
              return pages.length + 1;
          }
      }
  });


  return (
    <div>
      <Header/>
      <div className={styles.seasonNowContainer}>
        <p className={styles.seasonTitle}>Season Now</p>

        {isLoading ? 
          <div className={styles.loaderContainer}>
            <Loader/> <p>Fetching anime...</p>
          </div>    
        :
          <div className={styles.searchAnimeGridContainer}> 
            {data?.pages?.map((page, id) => (
              <React.Fragment key={id}>
                {page?.data?.data?.map((anime,id) => (
                  <Link to={`/anime/${anime?.mal_id}`} key={id}>
                    <div className={styles.imgContainer}>
                      <img src={anime?.images?.jpg?.image_url} alt="poster" />
                    </div>
                    <p className={styles.animeTitle}>{anime?.title}</p>
                  </Link>
                ))}
              </React.Fragment>
            ))}
          </div>
        }
      

        <div className={styles.btnContainer}>
          {isFetching ?  
              <div className={styles.loaderContainer}>
                <Loader/> <p>Fetching anime...</p>
              </div>  
            :
              <button type='button' onClick={fetchNextPage} className={styles.btnLoadMore}>Load more.</button>
            }
        </div>
      </div>
    </div>
  )
}

export default SeasonNow