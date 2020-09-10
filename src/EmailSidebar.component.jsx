import React,{useEffect} from 'react';
import './EmailSidebar.styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function EmailSidebar() {

    useEffect(()=>{
        AOS.init({duration:2000});
      },[]);

    return (
        <div className="emailsidebar"
            data-aos="zoom-out-up"
            data-aos-delay="1000"
            data-aos-duration="3000"
        >
            <a href="mailto:saikishore.kssk@gmail.com">saikishore.kssk@gmail.com</a>
        <div className="emailsidebar__lastline">

        </div>
        </div>
    )
}

export default EmailSidebar;
