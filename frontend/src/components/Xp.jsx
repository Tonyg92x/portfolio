import { useContext, useState, useEffect }  from 'react';
import { Context }                          from '../App';

const Xp = ({exp_en, exp_fr}) => {
    const { theme, language } = useContext(Context);
    const imagePathEn = exp_en.img;
    const imagePathFr = exp_fr.img;
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const hideImageClass = windowWidth < 1000 ? 'hide-img' : '';

    return (
        <div className={`section bg-skin-third${theme} text-skin-third${theme}`}>
            {
                language === 'English' ? (
                    <div className={`xp_div`}>
                        <div className={`xp_content`}>
                            <div className={'xp_header'}>
                                <h2 className='xp_text'>{exp_en.name}</h2>
                                <p className='xp_text'>{exp_en.start_year} - {exp_en.end_year}</p>
                            </div>
                            <div className={`xp_body`}>
                                <h4 className='xp_text'>{exp_en.field}</h4>
                                <div className='xp_bullet_div'>
                                    {exp_en.bullet_point.map((bullet_point, index) => (
                                        <p key={index} className='xp_text xp_bullet'>{bullet_point}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={`xp_img_div ${hideImageClass}`}>
                            <img className='xp_img rounded-lg' src={imagePathEn}></img>
                        </div>
                    </div>
                ) : (
                    <div className={`xp_div`}>
                        <div className={`xp_content`}>
                            <div className={'xp_header'}>
                                <h2 className='xp_text'>{exp_fr.name}</h2>
                                <p className='xp_text'>{exp_fr.start_year} - {exp_fr.end_year}</p>
                            </div>
                            <div className={`xp_body`}>
                                <h4 className='xp_text'>{exp_fr.field}</h4>
                                <div className='xp_bullet_div'>
                                    {exp_fr.bullet_point.map((bullet_point, index) => (
                                        <p key={index} className='xp_text xp_bullet'>{bullet_point}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={`xp_img_div ${hideImageClass}`}>
                            <img className='xp_img' src={imagePathFr}></img>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Xp
