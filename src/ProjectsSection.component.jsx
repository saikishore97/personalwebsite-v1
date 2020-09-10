import React,{useEffect} from 'react';
import './ProjectsSection.styles.css';
import ProjectCard from './ProjectCard.component';
import ProjectCardRight from './ProjectCardRight.component';
import AOS from 'aos';
import 'aos/dist/aos.css';


function ProjectsSection() {

    useEffect(()=>{
        AOS.init({duration:2000});
      },[]);

    return (
        <div className="projectssection" 
            id="projectssection02" 
            data-aos="fade-up"
            // data-aos-once="false"
        >
            <h3>Some Things I've Built</h3>
            <div className="projects__container">
                <ProjectCard deployedlink = "https://hulu-clone-70d3d.web.app/"
                            projectname="HuluClone"
                            projectdescription="A visualization of Hulu's Home page
                            to naviagte through movies updated dynamically based on genre."
                            projecttechnologies={['React','TMDB API','Firebase-Hosting','React-flip-move']}
                            githublink="https://github.com/saikishore97/HuluClone"
                            imgsrc="./assets/HuluClone.jpg"
                            key="1"
                />
                <ProjectCardRight deployedlink = "https://spotify-clone-338bc.web.app/"
                            projectname="Spotify-Webplayer"
                            projectdescription="A web app for visualizing Spotify Webplayer with personalized data. 
                            View your playlists and detailed audio information about each track and more."
                            projecttechnologies={['React','Spotify API','Firebase-Hosting']}
                            githublink="https://github.com/saikishore97/Spotify-Clone"
                            imgsrc="./assets/SpotifyClone.png"
                            key="2"

                />
                <ProjectCard deployedlink = "https://facebook-clone-c8a59.web.app/"
                            projectname="Facebook-HomePage"
                            projectdescription="A web app to visualize your facebook home page with real time data
                            .Create posts and view posts by everyone on the feed by logging in to your Google account."
                            projecttechnologies={['React','Firebase']}
                            githublink="https://github.com/saikishore97/Facebook-Clone"
                            imgsrc="./assets/FBClone.png"
                            key="3"

                />
                <ProjectCardRight deployedlink = "https://airbnb-clone-ee712.web.app/"
                            projectname="Airbnb-Clone"
                            projectdescription="A clear visualization of Airbnb's HomePage and SearchPage. 
                             Choose the dates, select number of guests and browse through different stay options."
                            projecttechnologies={['React','Firebase','React-Date-Picker']}
                            githublink="https://github.com/saikishore97/Airbnb-Clone"
                            imgsrc="./assets/AirbnbClone.png"
                            key="4"

                />
                <ProjectCard deployedlink = "https://tiktok-clone-3de57.web.app/"
                            projectname="TikTok-Clone"
                            projectdescription="A visualization of TikTok Video player. Scroll through the videos and play and pause."
                            projecttechnologies={['React','Firebase','MongoDb','Node.js','React-ticker']}
                            githublink="https://github.com/saikishore97/TikTok-Clone"
                            imgsrc="./assets/TikTokClone.png"
                            key="5"
                />
                <ProjectCardRight deployedlink = "https://whatsapp-clone-6891c.web.app/"
                            projectname="Whatsapp-Web"
                            projectdescription="A visualization of Whatsapp Web with real time data.
                            Create rooms, send and view messages from the rooms by logging in to your Google Account."
                            projecttechnologies={['React.js','Firebase']}
                            githublink="https://github.com/saikishore97/Whatsapp-Clone"
                            imgsrc="./assets/WhatsappClone.png"
                            key="6"
                />
                <ProjectCard deployedlink = "https://crwn-kssk-live.herokuapp.com/"
                            projectname="Clothing - App"
                            projectdescription="An E-commerce Clothing App to browse through different collections,
                             select items of your choice and add them to the cart and process payments.
                             You can sign up with your google account or email and password to become a registered member.
                             Cart items will be saved for your next visit."
                            projecttechnologies={['React','Firebase','Redux','React-Router']}
                            githublink="https://github.com/saikishore97/CrwnClothing"
                            imgsrc="./assets/ClothingApp.png"
                            key="7"
                />

            </div>
        </div>
    )
}

export default ProjectsSection;
