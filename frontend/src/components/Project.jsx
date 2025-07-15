import { useContext, useState, useEffect }  from 'react';
import { Context }                          from '../App';

const Project = ({projectEn, projectFr}) => {
    const { theme, language }           = useContext(Context);
    const imagePathEn                   = projectEn.img;
    const imagePathFr                   = projectFr.img;
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const hideImageClass = windowWidth < 1000 ? 'hide-img' : '';

    return (
        <div className={`section bg-skin-secondary${theme} text-skin-secondary${theme}`}>
            {
                language === 'English' ? (
                    <div className={`proj_div`}>
                        <div className={'proj_content'}>
                            <div className={'proj_header'}>
                                <h2 className='xp_text'>{projectEn.name}</h2>
                                {projectEn.link != 'none' && <a href={projectEn.link} target='_blank' rel="noopener noreferrer" className='xp_text'>Link</a>}
                            </div>
                            <div className={'proj_body'}>
                                <h4 className='xp_text'>{projectEn.topic}</h4>
                                <p/>
                                <p className='xp_text'>{projectEn.description}</p>
                            </div>
                        </div>
                        <div className={`proj_img_div ${hideImageClass}`}>
                            <img className='proj_img' src={imagePathEn}></img>
                        </div>
                    </div>
                ) : (
                    <div className={`proj_div`}>
                        <div className={'proj_content'}>
                            <div className={'proj_header'}>
                                <h2 className='xp_text'>{projectFr.name}</h2>
                                {projectFr.link != 'none' && <a href={projectFr.link} target='_blank' rel="noopener noreferrer" className='xp_text'>Liens</a>}
                            </div>
                            <div className={'proj_body'}>
                                <h4 className='xp_text'>{projectFr.topic}</h4>
                                <p/>
                                <p className='xp_text'>{projectFr.description}</p>
                            </div>
                        </div>
                        <div className={`proj_img_div ${hideImageClass}`}>
                            <img className='proj_img' src={imagePathFr}></img>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Project
