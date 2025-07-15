import { useContext }       from 'react';
import { Context }          from '../App';
import { Exp }              from '../classes/Exp';

const Education = ({exp_en, exp_fr}) => {
    const { theme, language } = useContext(Context);
    const imagePathEn = '/src/public/' + exp_en.img;
    const imagePathFn = '/src/public/' + exp_fr.img;

    return (
        <div className={`section bg-skin-primary${theme} text-skin-primary${theme}`}>
            {
                language === 'English' ? (
                    <div>
                        <img className='img_education' src={imagePathEn}></img>
                        <p>Name: {exp_en.name}</p>
                        <p>Field: {exp_en.field}</p>
                        <p>Start Year: {exp_en.start_year}</p>
                        <p>End Year: {exp_en.end_year}</p>
                    </div>
                ) : (
                    <div>
                        <img className='img_education' src={imagePathFn}></img>
                        <p>Nom: {exp_fr.name}</p>
                        <p>Domaine: {exp_fr.field}</p>
                        <p>Année de début: {exp_fr.start_year}</p>
                        <p>Année de fin:: {exp_fr.end_year}</p>
                    </div>
                )
            }
        </div>
    )
}

export default Education
