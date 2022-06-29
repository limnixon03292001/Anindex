import React, { useEffect } from 'react'
import styles from './TopAnime.module.css';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import { useInfiniteQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loader from '../../components/GlobalLoader/Loader';
import Header from '../../components/Header/Header';


const fetchTopAnime = ({ pageParam = 1 }) => {
  return axios.get(`https://api.jikan.moe/v4/top/anime?page=${pageParam}`);
}

const TopAnime = () => {

  const {isLoading, isFetching, data, hasNextPage, fetchNextPage } = useInfiniteQuery('top-anime', fetchTopAnime, 
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
      <div className={styles.topAnimeContainer}>
        <p className={styles.topAnimeTitle}>Top Anime Series</p>
      

      <div className={styles.tableWrapper}>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Title</th>
              <th>Score</th>
            </tr>
          </thead>
          {/* <FaStar color="rgb(216 255 0 / 91%)" size="1.3rem"  /> */}
          <tbody>

            {isLoading ? null : data?.pages?.map((page, id) => (
              <React.Fragment key={id}>
                {page?.data?.data?.map((anime,id) => (
                  <tr key={id}>
                    <td>
                      <p className={styles.rank}>{anime?.rank}</p>  
                    </td>
                    <td>
                      <div className={styles.animeTitleWrapper}>
                        <div className={styles.animeImgWrapper}>
                          <img src={anime?.images?.jpg?.image_url} alt="poster" />
                        </div>
                        <div className={styles.animeDescriptionWrapper}>
                          <Link to={`/anime/${anime?.mal_id}`}>{anime?.title}</Link>
                          <p>{anime?.type} ({anime?.episodes} eps)</p>
                          <p>{anime?.aired?.string}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className={styles.score}>
                        <FaStar color="rgb(216 255 0 / 91%)" size="1.3rem"  />
                        <p>{anime?.score}</p>
                      </div>
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>

        </table>
        {isLoading &&
              <div className={styles.loaderContainer}>
              <Loader/> <p>Fetching anime...</p>
              </div>  
            }
      </div>
      
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

export default TopAnime