import React ,{useEffect} from 'react';
import './Sidebar.styles.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Sidebar() {

    useEffect(()=>{
        AOS.init({duration:2000});
      },[]);

    return (
        <div className="sidebar"
            data-aos="zoom-out-up"
            data-aos-delay="1000"
            data-aos-duration="3000"
        >
            <div className="sidebar__option">
                <a href="https://github.com/saikishore97" rel="noopener noreferrer" target="_blank"><GitHubIcon/></a>
            </div>
            <div className="sidebar__option">
                <a href="https://www.linkedin.com/in/sai-kishore-7b756199/" rel="noopener noreferrer" target="_blank"><LinkedInIcon/></a>
            </div>
            <div className="sidebar__option">
                <a href="mailto:saikishore.kssk@gmail.com" rel="noopener noreferrer" target="_blank"><EmailIcon/></a>
            </div>
            <div className="sidebar__option">
               <a href="https://www.instagram.com/iamkssk/?hl=en" rel="noopener noreferrer" target="_blank"><InstagramIcon/></a>
            </div>
            <div className="sidebar__option">
                <a href="https://twitter.com/Kishore_kssk" rel="noopener noreferrer" target="_blank"><TwitterIcon/></a>
            </div>
            <div className="sidebar__option--last">

            </div>
        </div>
    )
}

export default Sidebar;
