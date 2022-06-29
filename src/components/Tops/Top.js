import React from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
import TopSlider from '../Sliders/TopSlider/TopSlider'

const fetchTopAnime = () => {
    return axios.get(`https://api.jikan.moe/v4/top/anime`);
}

const fetchSeasonNow = () => {
    return axios.get(`https://api.jikan.moe/v4/seasons/now`);
}

const fetchUpcomingSeasonAnime = () => {
    return axios.get(`https://api.jikan.moe/v4/seasons/upcoming`);
}


const Top = () => {
    //Top Anime
    const {isLoading: loadingTopAnime, data: dataTopAnime} = useQuery('top-anime', fetchTopAnime, { 
        onError: (err) => {
            console.log(err)
        }
    });

    //Current airing anime this season
    const {isLoading: loadingSeasonNowAnime, data: seasonAnime} = useQuery('seasonNow', fetchSeasonNow, { 
        onError: (err) => {
            console.log(err)
        }
    });

    //Top upcoming season anime
    const {isLoading: loadingUpcomingSeasonAnime, data: upcomingSeasonAnime} = useQuery('upcomingSeasonAnime', fetchUpcomingSeasonAnime, { 
        onError: (err) => {
            console.log(err)
        }
    });


  return (
    <>
        <TopSlider data={seasonAnime} title='Season Now' link='/season-now' loading={loadingSeasonNowAnime} />
        <TopSlider data={dataTopAnime} title='Top Anime' link='/top-anime' loading={loadingTopAnime} />
        <TopSlider data={upcomingSeasonAnime} title='Top Upcoming Anime' link='/top-upcoming' loading={loadingUpcomingSeasonAnime} />
    </>
  )
}

export default Top