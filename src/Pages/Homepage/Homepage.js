import React from 'react';
import cover from '../../imgs/cover.jpg';
import styles from './Homepage.module.css';
import SearchBarHero from '../../components/SearchBar/SearchBarHero/SearchBarHero';
import Top from '../../components/Tops/Top';


const Homepage = () => {

  return (
    <div className={styles.hero}>
        <div className={styles.heroImg} style={{backgroundImage: `url(${cover})`}}>

            <div className={styles.heroContent}>
                <p className={styles.welcomeText}>Welcome to Ani<span>NDEX</span></p>
                <p>Search your Favorite Anime!</p>
                <p>Developed by Nixon Lim powered by Jikan Api</p>

                {/* SearchBar */}
                <SearchBarHero/>
                {/* SearchBar */}
            </div>
            

            {/* Top's section Anime */}
            <Top/>
            {/* Top's section Anime */}
            
        </div>
    </div>  
    )
}

export default Homepage