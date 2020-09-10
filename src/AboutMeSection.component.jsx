import React,{useEffect}  from 'react';
import './AboutMeSection.styles.css';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import AOS from 'aos';
import 'aos/dist/aos.css';


function AboutMeSection() {

    useEffect(()=>{
        AOS.init({duration:2000});
      },[]);

    return (
        <div className="aboutmesection" 
            id="aboutmesection01" 
            data-aos="fade-up" 
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
        >
            <h3>About Me</h3>
            <div className="aboutme__detailscontainer">
                <div className="aboutme__details__left">
                    <div className="aboutme__details__left__top">
                        <p>Hello! I'm Kishore, a Computer Science graduate.</p>
                        <p>I enjoy creating things that live on the internet, whether that be websites, applications,
                             or anything in between with keen attention to details.
                            My goal is to always build products that provide pixel-perfect, performant experiences.
                            I believe anything can be overcome through commitment and hardwork.
                            Always up for learning new things.
                        </p>
                        <p>Currently graduating from <a target="_blank" rel="noopener noreferrer" href="https://www.binghamton.edu/computer-science/graduate-programs/"> Binghamton University</a> where I work on a wide variety of interesting and meaningful projects on a daily basis.</p>
                        <p>Here are a few technologies I've been working with recently:</p>
                    </div>
                    <div className="aboutme__details__left__bottom">
                        <div className="aboutme__details__left__bottom__item">
                            <ArrowRightIcon className="arrow__icon"/>
                            <p>JavaScript (ES6+)</p>
                        </div>
                        <div className="aboutme__details__left__bottom__item">
                            <ArrowRightIcon className="arrow__icon"/>
                            <p>HTML & (S)CSS</p>
                        </div>
                        <div className="aboutme__details__left__bottom__item">
                            <ArrowRightIcon className="arrow__icon"/>
                            <p>React</p>
                        </div>
                        <div className="aboutme__details__left__bottom__item">
                            <ArrowRightIcon className="arrow__icon"/>
                            <p>Java</p>
                        </div>
                        <div className="aboutme__details__left__bottom__item">
                            <ArrowRightIcon className="arrow__icon"/>
                            <p>WordPress</p>
                        </div>
                    </div>
                </div>
                <div className="aboutme__details__right">
                    <a href="https://github.com/saikishore97">
                        <div className="img__container">
                            <img src={require('./assets/002.jpg')} alt="profilepic"></img>
                        </div>
                    </a>    
                </div>
            </div>
        </div>
    )
}

export default AboutMeSection;
