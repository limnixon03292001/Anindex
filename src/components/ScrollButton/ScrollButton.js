import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import styles from './ScrollButton.module.css';

const ScrollButton = () => {
    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      if (window.scrollY > 300){
        setVisible(true);
      } 
      else if (window.scrollY  <= 300){
        setVisible(false);
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
    
    return (
      <button onClick={scrollToTop} className={`${visible ? styles.visible : styles.invisible} ${styles.btn}`}>
          <IoIosArrowForward size={33} className='-rotate-90 m-auto'/>
      </button>
    );
  }

export default ScrollButton