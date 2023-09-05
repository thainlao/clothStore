import React, {useEffect, useState} from "react";
import './styles/mainbody.css';
import './styles/header.css';

const Screen1 = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= 1) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
    <div className="screen1">

    <div className={`header ${scrolled ? 'scrolled' : ''}`}>
      <h2 className='header_main_text'>THAINLAO</h2>
      <p className='header_subtext'>коллекции</p>
      <p style={{marginRight: '20px'}} className='header_subtext'>магазин</p>
    </div>

            <img className="img_screen1" src="https://images.hdqwalls.com/download/2023-kendall-jenner-own-denim-fall-cu-1920x1080.jpg"/>

            <h1 className="text_section1">WOMAN</h1>
        </div>
    )
}

export default Screen1