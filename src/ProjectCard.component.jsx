import React,{useEffect} from 'react';
import './ProjectCard.styles.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import AOS from 'aos';
import 'aos/dist/aos.css';


function ProjectCard({deployedlink,projectname,projectdescription,projecttechnologies,githublink,imgsrc,key}) {

    useEffect(()=>{
        AOS.init({duration:2000});
      },[]);


    return (
                <div className="project__card" 
                    data-aos="fade-up" 
                    data-aos-once="false"
                    key={key}
                >
                    <div className="project__card__left">
                        <a href={deployedlink} target="_blank" rel="noopener noreferrer">
                            <img src={require(`${imgsrc}`)} alt={projectname}/>
                        </a>
                    </div>

                    <div className="project__card__right">
                        <h4>Featured Project</h4>
                        <h5><a href={deployedlink}>{projectname}</a></h5>
                        <div className="project__card__description">
                            <p>
                                {projectdescription}
                            </p>
                        </div>
                        <div className="project__card__technologies">
                            {
                                projecttechnologies.map(tech=><p>{tech}</p>)
                            }
                        </div>
                        <div className="project__card__links">
                            <a href={githublink} rel="noopener noreferrer" target="_blank">
                                <GitHubIcon className="project__card__links__icons__1" size="large" />
                            </a>
                            <a href={deployedlink} rel="noopener noreferrer" target="_blank">
                                <LinkIcon className="project__card__links__icons__2" size="large"/>
                            </a>
                        </div>
                    </div>

                </div>
    );

}

export default ProjectCard;
