import React from 'react';
import styles from './Trailer.module.css';
import YouTube from 'react-youtube';

const Trailer = ({ trailerId }) => {


    // const opts = {
    //   height: '390',
    //   width: '740',
    //   playerVars: {
    //     autoplay: 1,
    //   }
    // }
  return (
    <div className={styles.trailerWrapper}>
        <p className={styles.titleTrailer}>Trailer</p>
        <div className={styles.youtubeWrapper}>
            <YouTube videoId={trailerId}  className={styles.youtubex}/>
        </div> 
    </div>
  )
}

export default Trailer