import { SampleNextArrow, SamplePrevArrow } from "../components/SliderButton/SliderButton";

//Settings for sliders

const settings2 = {
   infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
       {
          breakpoint: 1200,
 
          settings: {
            infinite: true,
             slidesToShow: 6,
             slidesToScroll: 6,
          },
       },
     
       {
        breakpoint: 768,
        settings: {
         
           slidesToShow: 5,
           slidesToScroll: 5,
        },
     },
     {
        breakpoint: 600,
        settings: {
           slidesToShow: 4,
           slidesToScroll: 4,
        },
     },
     {
      breakpoint: 480,
      settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
      },
    },
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    ],
};

const settings1 = {
   slidesToShow: 8,
   swipeToSlide: true,
 
   centerMode: true,
   infinite: true,
   speed: 500,
   nextArrow: <SampleNextArrow />,
   prevArrow: <SamplePrevArrow />,
   responsive: [
       {
          breakpoint: 1200,
 
          settings: {
             slidesToShow: 6,
             
          },
       },
       {
        breakpoint: 1100,
        settings: {
           slidesToShow: 5,
            
        },
     },
       {
        breakpoint: 768,
        settings: {
           slidesToShow: 4,        
        },
     },
     {
        breakpoint: 600,
        settings: {
           slidesToShow: 3,
          
        },
     },
     {
      breakpoint: 480,
      settings: {
         slidesToShow: 2,
          
      },
    },
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 1,
        
      },
    },
    ],
};

const settingsSeason = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
   
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
       {
          breakpoint: 1200,
 
          settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
          },
       },
       {
        breakpoint: 900,
        settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
        },
     },
       {
        breakpoint: 768,
        settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
        },
     },
     {
        breakpoint: 483,
        settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
        },
     },
     {
      breakpoint: 480,
      settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
      },
   },
    ],
};


export {settings2, settings1, settingsSeason}