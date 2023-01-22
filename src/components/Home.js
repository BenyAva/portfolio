import React, { useState, useEffect } from 'react'
import TextTransition, { presets } from "react-text-transition";

const Home = (props) => {
    const TEXTS = [
        "HTML",
        "CSS",
        "React",
        "JavaScript",
        "TypeScript",
        "Python"
      ];

      const [index, setIndex] = useState(0);
      useEffect(() => {
        const intervalId = setInterval(() =>
          setIndex(index => index + 1),
          3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);

    return (
        <div className='home-d'>
            <div className='color-1 block'></div>
            <h1 className='hook'>Take a look around<span className='exclamation'>!</span></h1>
            <TextTransition className='scrolling' springConfig={presets.wobbly}>
            {TEXTS[index % TEXTS.length]}
            </TextTransition>
            <div className='color-2 block'></div>

        </div>
    )
}

export default Home



    
