import { useContext, useState, useEffect }  from 'react';
import { Context }                          from '../App';
import linkedin                             from '/linkedin.png';
import email                                from '/email.png';

const Contact = () => {
    const { theme, language } = useContext(Context);
    const linkedinLink = "https://www.linkedin.com/in/anthony-g-75b27421b"

    return (
        <div>
            {
                language === 'English' ? (
                    <div className={`section bg-skin-primary${theme} text-skin-primary${theme}`}>
                        <h1>Get in touch</h1>
                        <div className={`contact_div`}>
                            <div className={`contact_linkedin_div bg-skin-secondary${theme} text-skin-secondary${theme}`}>
                                <a href={linkedinLink} target='_blank' rel="noopener noreferrer"  className={`contact_img_div`}>
                                    <img className='contact_img' src={linkedin}></img>
                                </a>
                            </div>
                            <div className={`contact_email_div bg-skin-secondary${theme} text-skin-secondary${theme}`}>
                                <a href="mailto:anthony.guay112@gmail.com?subject=Default%20Subject&body=Default%20text" target='_blank' rel="noopener noreferrer" className={`contact_img_div`}>
                                    <img className='contact_img' src={email}></img>
                                </a>
                                anthony.guay112@gmail.com
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={`section bg-skin-primary${theme} text-skin-primary${theme}`}>
                        <h1>Entrer en contact</h1>
                        <div className={`contact_div`}>
                            <div className={`contact_linkedin_div bg-skin-secondary${theme} text-skin-secondary${theme}`}>
                                <a href={linkedinLink} target='_blank' rel="noopener noreferrer"  className={`contact_img_div`}>
                                    <img className='contact_img' src={linkedin}></img>
                                </a>
                            </div>
                            <div className={`contact_email_div bg-skin-secondary${theme} text-skin-secondary${theme}`}>
                                <a href="mailto:anthony.guay112@gmail.com?subject=Default%20Subject&body=Default%20text" target='_blank' rel="noopener noreferrer" className={`contact_img_div`}>
                                    <img className='contact_img' src={email}></img>
                                </a>
                                anthony.guay112@gmail.com
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Contact


