import { useContext }       from 'react';
import { Context }          from '../App';
import { Exp }              from '../classes/Exp';
import Xp                   from './Xp';


const Experience = () => {
    const { theme, language } = useContext(Context);

    const education_xp_fr        = [
        new Exp('42 Québec', 'Programmation', 2021, 2022, ['Formation en programmation informatique', 'Prix Voxotron lors de la piscine - Prix occtroyé à une personne suite à un vote anonyme par tous les paires'], '/42.png'),
        new Exp('Université Laval', 'Baccalauréat en science de l\'informatique', 2020, 2021, ['Non diplomé, départ pour 42 Québec'], '/laval.jpeg'),
        new Exp('Université de Sherbrooke', 'Certificat en administration des affaires', 2018, 2020, ['Étudiant athlète - Vert et Or Football'], '/udes.png'),
        new Exp('Cégep de Limoilou', 'Science humaine', 2014, 2017, ['Concentration en psychologie', 'Étudiant athlèthe - Titans de Limoilou'], '/limoilou.png')
    ];

    const work_xp_fr   = [
        new Exp('CyberQuébec - Centre Collégial de Transfert des Technologies en Cyber Sécurité', 'Analyste spécialisé en informatique', 2023, 'Présent', ['Gestion complète d\'une solution infonuagique de type CyberRange', 'Consultation sur de l\'architecture logiciel sécuritaire', 'Architecture et maintient de l\'infrastructure du CyberRange', 'Protection de l\'environnement informatique', 'Développement de contenue dans le CyberRange', 'Développement d\'application web pour améliorer l\'expérience des utilisateurs', 'Support technique aux enseignants du CyberRange'], '/cq.png'),
        new Exp('Titans - Cégep de Limoilou', 'Football', 2023, 'Présent', ['Entraîneur de ligne défensive'], '/titans.png'),
        new Exp('Centaures - École secondaire de la Courvilloise', 'Football', 2023, '2024', ['Entraîneur de ligne défensive', 'Consultation sur les stratégies défensives', 'Don de temps à la communautée de Beauport'], '/centaures.jpeg'),
        new Exp('Korem', 'Administrateur Système - Sécurité opérationelle', 2023, 2023, ['Surveillance de l\'environnement', 'Gestion des vulnérabilités', 'Implémentation d\'outils'], '/korem.jpg')
    ];

    const education_xp_en        = [
        new Exp('42 Québec', 'Programming', 2021, 2022, [
            'Programming school',
            'Winner of the Voxotron prize, awarded by peers'
        ], '/42.png'),
        
        new Exp('Laval University', 'Bachelor in Computer Science', 2020, 2021, [
            'Left the program to join 42 Québec',
        ], '/laval.jpeg'),
        
        new Exp('Sherbrooke University', 'Certificate in Business Administration', 2018, 2020, [
            'Student-athlete – Vert et Or Football team'
        ], '/udes.png'),
        
        new Exp('Limoilou College', 'Social Sciences', 2014, 2017, [
            'Psychology concentration',
            'Student-athlete – Limoilou Titans Football team'
        ], '/limoilou.png')
    ];

    const work_xp_en   = [
        new Exp('CyberQuébec - College Technology Transfer Center in Cybersecurity', 'Specialized IT Analyst', 2023, 'Present', [
            'Full management of a cloud-based CyberRange solution',
            'Consulting on secure software architecture',
            'Architecture and maintenance of the CyberRange infrastructure',
            'Protection of the IT environment',
            'Content development within the CyberRange',
            'Web application development to enhance user experience',
            'Technical support for CyberRange instructors'
        ], '/cq.png'),
        
        new Exp('Titans - Cégep de Limoilou', 'Football', 2023, 'Present', [
            'Defensive line coach'
        ], '/titans.png'),
        
        new Exp('Centaures - Courvilloise High School', 'Football', 2023, '2024', [
            'Defensive line coach',
            'Consulting on defensive strategies',
            'Volunteering in the Beauport community'
        ], '/centaures.jpeg'),
        
        new Exp('Korem', 'System Administrator - Operational Security', 2023, 2023, [
            'Environment monitoring',
            'Vulnerability management',
            'Implementation of security tools'
        ], '/korem.jpg')
    ];

    return (
        <div>
            {
                language === 'English' ? (
                    <div className={`section bg-skin-primary${theme} text-skin-primary${theme}`}>
                            <h1>Experience</h1>
                        <div className={`xp_container bg-skin-secondary${theme} text-skin-secondary${theme}`}>
                            <div className={`xp_container_title_div`}>
                                <h2>Work experience</h2>
                            </div>
                            {
                                work_xp_en.map((work_xp_en, index) => (
                                    <Xp exp_en={work_xp_en} exp_fr={work_xp_fr} key={index}/>
                                ))
                            }
                        </div>
                        <div className={`xp_container bg-skin-secondary${theme} text-skin-secondary${theme}`}>
                            <div className={`xp_container_title_div`}>
                                <h2>Education</h2>
                            </div>
                            {
                                education_xp_en.map((education_xp_en, index) => (
                                    <Xp exp_en={education_xp_en} exp_fr={education_xp_fr} key={index}/>
                                ))
                            }
                        </div>
                    </div>
                ) : (
                    <div className={`section bg-skin-primary${theme} text-skin-primary${theme}`}>
                        <h1>Expérience</h1>
                        <div className={`xp_container bg-skin-secondary${theme} text-skin-secondary${theme}`}>
                            <div className={`xp_container_title_div`}>
                                <h2>Expérience de travail</h2>
                            </div>
                            {
                                work_xp_fr.map((work_xp_fr, index) => (
                                    <Xp exp_en={work_xp_en} exp_fr={work_xp_fr} key={index + '_xp'}/>
                                ))
                            }
                        </div>
                        <div className={`xp_container bg-skin-secondary${theme} text-skin-secondary${theme}`}>
                            <div className={`xp_container_title_div`}>
                                <h2>Éducation</h2>
                            </div>
                            {
                                education_xp_fr.map((education_xp_fr, index) => (
                                    <Xp exp_en={education_xp_en} exp_fr={education_xp_fr} key={index + '_ed'}/>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </div>

    );
}

export default Experience
