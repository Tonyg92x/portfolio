import { useContext }       from 'react';
import { Context }          from '../App';
import profile              from '/me.png';

const Introduction = () => {
    const { theme, language } = useContext(Context);

    return (
        <div>
            {
                language === 'English' ? (
                    <div>
                        <div className={`section`}>
                            <h1 className=''>Anthony Guay</h1>
                            <div className={`img_profile_div bg-skin-secondary${theme} text-skin-secondary${theme}`}>
                                <img src={profile} className='img_profile'></img>
                            </div>
                            <div className={`content-container`}>
                                <div className={`card_box bg-skin-secondary${theme} text-skin-secondary${theme}`}>
                                    <p>Welcome to my portfolio website. Here, I show my experiences and I present my IT projects.</p>
                                    <h4 className='text-center'>Who am I?</h4>
                                    <p>I am passionate and perfectionist individual with a deep love for technologies and Football.</p>
                                    <p>My journey in football spans 15 years, during which I worked hard and stayed determined to reach my goals. I did manage to make my childhood dream be a reality: Play football for a university. This experience taught me invaluable lessons about perseverance and commitment.</p>
                                    <p>My seond passion for technology began at an early age. At five years old, I started playing video games on a computer. That early interest turned into a lifelong passion for everything tech-related.</p>
                                    <p> I’ve carried the same work ethic and dedication that fueled my football career into the world of technology. I specialize in programming, cybersecurity, system administration, and DevOps.</p>
                                    <p>I bring a unique blend of discipline and technical expertise to every project I take on, always striving for excellence.</p>
                                    <p>If you're interested in my services, feel free to reach out through the Contact section.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className={`section`}>
                            <h1 className=''>Anthony Guay</h1>
                            <div className={`img_profile_div bg-skin-secondary${theme} text-skin-secondary${theme}`}>
                                <img src={profile} className='img_profile'></img>
                            </div>
                            <div className={`content-container`}>
                                <div className={`card_box bg-skin-secondary${theme} text-skin-secondary${theme}`}>
                                    <p>Bienvenue sur mon site web portfolio. Ici, je décrit mes expériences et je présentes mes projets personnel en informatique.</p>
                                    <h4 className='text-center'>Qui suis-je?</h4>
                                    <p>Je suis quelqu'un de passionné et perfectionniste avec une profonde affection pour le football américain et les technologies. Mon parcours dans le football américain s'étend sur 15 ans, au cours desquels je me suis efforcé d'atteindre le niveau universitaire grâce à un travail acharné et à une grande détermination. Cette expérience m'a appris des leçons inestimables en matière de persévérance et d'engagement.</p>
                                    <p>Ma fascination pour les technologies a commencé à l'âge de 5 ans. C'est le moment où j'ai commencé à jouer à des jeux vidéo sur PC. Cet intérêt précoce s'est transformé en une passion de toute une vie pour tout ce qui touche à la technologie. J'ai appliqué la même éthique de travail et la même dévotion qui ont alimenté ma carrière de football pour devenir compétent en informatique. Je fais de la programmation, de la cybersécurité, de l'administration système et du DevOps.</p>
                                    <p>J'apporte un mélange unique de discipline et d'expertise technique à chaque projet que j'entreprends, en visant constamment l'excellence.</p>
                                    <p> Si mes services vous intéresse, je vous invite à me rejoindre via la section Contact.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>

    );
}

export default Introduction
