import React ,{useEffect} from 'react';
import './ProjectCardRight.styles.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import AOS from 'aos';
import 'aos/dist/aos.css';


function ProjectCardRight({deployedlink,projectname,projectdescription,projecttechnologies,githublink,imgsrc,key}) {

    useEffect(()=>{
        AOS.init({duration:2000});
      },[]);

    return (
        <div className="projectcardright" 
            data-aos="fade-up" 
            data-aos-once="false"
            key={key}
        >
                    
                    <div className="projectcardright__left">
                        <h4>Featured Project</h4>
                        <h5><a href={deployedlink}>{projectname}</a></h5>
                        <div className="projectcardright__left__description">
                            <p>
                                {projectdescription}
                            </p>
                        </div>
                        <div className="projectcardright__left__technologies">
                            {
                                projecttechnologies.map(tech=><p>{tech}</p>)
                            }
                        </div>
                        <div className="projectcardright__left__links">
                            <a href={githublink} rel="noopener noreferrer" target="_blank">
                                <GitHubIcon className="projectcardright__left__links__icons__1" size="large" />
                            </a>
                            <a href={deployedlink} rel="noopener noreferrer" target="_blank">
                                <LinkIcon className="projectcardright__left__links__icons__2" size="large"/>
                            </a>
                        </div>
                    </div>

                    <div className="projectcardright__right">
                        <a href={deployedlink} target="_blank" rel="noopener noreferrer">
                            <img src={require(`${imgsrc}`)} alt={projectname}/>
                        </a>
                    </div>

        </div>
    )
}

export default ProjectCardRight
