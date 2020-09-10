import React ,{useEffect} from 'react';
import { Button } from '@material-ui/core';
import './Header.styles.css';
import {Link} from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Header() {
    
    useEffect(()=>{
        AOS.init({duration:2000});
      },[]);

    return (
        <div className="header" 
            
        >
            <div className="header__left">
                
            </div>
            <div className="header__right">
                <Link 
                    to="aboutmesection01" 
                    spy={true} 
                    smooth={true} 
                    duration={650} 
                    className='header__right__inpagelinks' 
                    activeClass='active'
                    data-aos="fade-down" 
                    data-aos-anchor-placement="top-center"
                    data-aos-delay="300" 
                    data-aos-duration="600"
                >About me</Link>
                <Link 
                    to="projectssection02"
                    spy={true} 
                    smooth={true} 
                    duration={650} 
                    className='header__right__inpagelinks' 
                    activeClass='active'
                    data-aos="fade-down" 
                    data-aos-anchor-placement="top-center"
                    data-aos-delay="500" 
                    data-aos-duration="600"
                >Work</Link>
                {/* <Link 
                    to="aboutmesection01" 
                    spy={true} 
                    smooth={true} 
                    duration={650} 
                    className='header__right__inpagelinks' 
                    activeClass='active'
                    data-aos="fade-down" 
                    data-aos-anchor-placement="top-center"
                    data-aos-delay="700" 
                    data-aos-duration="600"
                >Contact</Link> */}
                <Button variant='outlined'
                    data-aos="fade-down" 
                    data-aos-anchor-placement="top-center"
                    data-aos-delay="700" 
                    data-aos-duration="600"
                >
                    <a href={require('./assets/SaiKishore-Resume.pdf')} target="_blank" rel="noopener noreferrer" className="resume__link">
                        Resume
                    </a>
                </Button>
            </div>   
        </div>
    )
}

export default Header;

