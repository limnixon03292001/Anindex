import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import {FaSearch} from 'react-icons/fa';
import Loader from '../GlobalLoader/Loader';


const searchAnime = ({queryKey}) => {
  const anime = queryKey[1];
  return axios.get(`https://api.jikan.moe/v4/anime?letter=${anime}&order_by=rank&sort=asc&limit=10`);
}

const Header = () => {
  const [searchData, setSearchData] = useState('');

  const { data, isFetching }  = useQuery(['search', searchData], searchAnime, 
  {
    enabled: Boolean(searchData)
  });

  
  useEffect(() => {
    const openSearchResult = event => {
       if (event.target.id !== 'searchWrapper') setSearchData('');
    };

    window.addEventListener('click', openSearchResult);

    return () => window.removeEventListener('click', openSearchResult);
  }, []);

  return (
    <nav className={styles.header}>
      <div className={styles.headerCenterWrapper}>
        <Link to='/' >Ani<span>NDEX</span></Link>

        <div className={styles.searchBar}>
          
        <div className={styles.searchHero}>
                <div className={styles.searchInner}>
                    <div className={styles.searchMainInner} >
                        <input type="text" placeholder="Search..." value={searchData} onChange={(e) => setSearchData(e.target.value)}  required className={styles.inputSearch} id="searchWrapper"/>
                        {/* <Link> */}
                            <button type="submit" className={styles.searchIcon}>
                                <FaSearch size="1rem"/>
                            </button>
                        {/* </Link>  */}
                    </div>
                    {/* Searched Anime */}
                    <div className={styles.searchAnimeWrapper} id="searchWrapper">
                        { isFetching ? 
                            <div className={styles.loadingWrapper}>
                              <Loader/>  <p>Fetching anime {searchData}...</p>
                            </div>
                        :

                          data?.data?.data?.length === 0 ?
                            <div className={styles.loadingWrapper}>
                                    <p>Can't find Anime {searchData}</p>
                            </div>
                        :
                            data?.data?.data?.map((anime,id) => (
                                <Link to={`/anime/${anime?.mal_id}`} key={id} className={styles.animeLink}>
                                    <div className={styles.searchAnime}>
                                        <div className={styles.imgContainer}>
                                            <img src={anime?.images?.jpg?.image_url} alt="poster" />
                                        </div>
                                        <div>
                                            <p>{anime?.title}</p>
                                            {anime?.year && <p className={styles.yearText}>{anime?.year}</p> }
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                    {/* Searched Anime */}
                </div>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Header