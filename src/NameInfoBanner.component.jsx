import React,{useEffect} from 'react';
import './NameInfoBanner.styles.css';
import {Button} from '@material-ui/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

function NameInfoBanner() {

    useEffect(()=>{
        AOS.init({duration:2000});
      },[]);
    
    return (
        <div className="nameinfobanner"
            // data-aos="fade-up" 
            // data-aos-anchor-placement="top-center"
        >
            <h3 data-aos="fade-up" data-aos-duration="600">Hi, my name is </h3>
            <h2 data-aos="fade-up" data-aos-delay="200" data-aos-duration="600">Sai Kishore.</h2>
            <h1 data-aos="fade-up" data-aos-delay="400" data-aos-duration="600">I build things for the web.</h1>

            <div className="nameinfobanner__summarycontainer"
                data-aos="fade-up" 
                data-aos-delay="450" 
                data-aos-duration="600"
            >
                <p>I'm a Computer Science graduate specializing in building exceptional websites, applications, and everything in between.
                </p>
            </div>

            <div className="nameinfobanner__buttoncontainer"
                data-aos="fade-up" 
                data-aos-delay="500" 
                data-aos-duration="600">
                <Button variant='outlined' size="large"><a href="mailto:saikishore.kssk@gmail.com" className="mailto">Get in Touch</a></Button>
            </div>
        </div>
    )
}

export default NameInfoBanner;
