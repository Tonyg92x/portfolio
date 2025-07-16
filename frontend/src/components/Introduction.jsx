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
                                    <p className='text-center'>Welcome to my portfolio website. Here, I show my experiences and I present my IT projects.</p>
                                    <h4 className='text-center'>Who am I?</h4>
                                    <p className='text-center'>I am passionate and perfectionist individual with a deep love for technologies and Football.</p>
                                    <p className='text-center'>My journey in football spans 15 years, during which I worked hard and stayed determined to reach my goals. I did manage to make my childhood dream be a reality: Play football for a university. This experience taught me invaluable lessons about perseverance and commitment.</p>
                                    <p className='text-center'>My seond passion for technology began at an early age. At five years old, I started playing video games on a computer. That early interest turned into a lifelong passion for everything tech-related.</p>
                                    <p className='text-center'> I’ve carried the same work ethic and dedication that fueled my football career into the world of technology. I specialize in programming, cybersecurity, system administration, and DevOps.</p>
                                    <p className='text-center'>I bring a unique blend of discipline and technical expertise to every project I take on, always striving for excellence.</p>
                                    <p className='text-center'>If you're interested in my services, feel free to reach out through the Contact section.</p>
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
                                    <p className='text-center'>Bienvenue sur mon portfolio. Vous y trouverez un aperçu de mes expériences et de mes projets personnels en informatique.</p>
                                    <h4 className='text-center'>Qui suis-je?</h4>
                                    <p className='text-center'>Je suis une personne passionnée et perfectionniste, avec une profonde affection pour le football américain et les technologies. Mon parcours dans le football s’étend sur 15 ans, au cours desquels j’ai travaillé sans relâche pour atteindre le niveau universitaire, grâce à ma détermination et à mon engagement. Cette expérience m’a inculqué des valeurs solides de persévérance et de discipline.</p>
                                    <p className='text-center'>Ma fascination pour les technologies a commencé à l’âge de 5 ans, lorsque j’ai découvert les jeux vidéo sur PC. Ce premier contact a éveillé en moi une passion durable pour tout ce qui touche à l’informatique. J’ai ensuite appliqué la même rigueur que dans ma carrière sportive pour développer mes compétences en programmation, cybersécurité, administration système et DevOps.</p>
                                    <p className='text-center'>J’apporte un mélange unique de discipline et d’expertise technique à chaque projet, en visant constamment l’excellence.</p>
                                    <p className='text-center'>Si mes services vous intéressent, je vous invite à me contacter via la section <strong>Contact</strong>.</p>
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
