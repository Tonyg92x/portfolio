import { useContext }       from 'react';
import { Context }          from '../App';

const Skills = () => {
    const   { theme, language } = useContext(Context);
    const   progSkillsEn        = ['C', 'C++', 'Python', 'Js / Ts / React / Tailwindcss', 'Bash / Powershell / Ansible'];
    const   sysSkillsEn         = ['Identity management', 'Networking', 'Redundant Infrastructure', 'Network Architecture', 'Automation', 'Secure configuration for os: Linux / Windows / Mac'];
    const   cyberSkillsEn       = ['Junior pentester', 'Threath Intel', 'Developping a SIEM / SOC architecture with open source tools', 'Access management', 'Vulnerabilities management'];
    const   devOpsSkillsEn      = ['Gitlab CI / CD', 'Terraform', 'Ansible', 'Docker / Pod', 'Docker Swarm'];

    const   progSkillsFr        = ['C', 'C++', 'Python', 'Js / Ts / React / Tailwindcss', 'HTML / CSS', 'Bash / Powershell'];
    const   sysSkillsFr         = ['Gestion d\'identité', 'Réseautique', 'Infrastructure redondante', 'Architecture réseau', 'Automatisation', 'Configuration sécuritaire des OS: Linux / Windows / Mac'];
    const   cyberSkillsFr       = ['Pentesteur junior', 'Développer des architectures SIEM / SOC', 'Gestion des accès', 'Gestion des vulnérabilités', 'Programmation sécuritaire'];
    const   devOpsSkillsFr      = ['Gitlab CI / CD', 'Terraform', 'Ansible', 'Docker / Pod', 'Docker Swarm'];

    return (
        <div>
            {
                language === 'English' ? (
                    <div className={`skill_div bg-skin-primary${theme} text-skin-primary${theme}`}>
                        <h1 className='skill_title'>Skills</h1>
                        <div className={'skill_page'}>
                            <div className={'card_row'}>
                                <div className={`skill_card bg-skin-secondary${theme} text-skin-secondary${theme}`}>
                                    <div className={`card_header`}>
                                        <h2>
                                            Programming
                                        </h2>
                                    </div>
                                    <div className={`card_body`}>
                                            {progSkillsEn.map((progSkils, index) => (
                                                <p key={index} className='xp_text xp_bullet m-1'>{progSkils}</p>
                                            ))}
                                    </div>
                                </div>
                                <div className={`skill_card bg-skin-secondary${theme} text-skin-secondary${theme}`}>
                                    <div className={`card_header`}>
                                        <h2 >System Administration</h2>
                                    </div>
                                    <div className={`card_body`}>
                                            {sysSkillsEn.map((progSkils, index) => (
                                                <p key={index} className='xp_text xp_bullet m-1'>{progSkils}</p>
                                            ))}
                                    </div>
                                </div>
                            </div>
                            <div className={'card_row'}>
                                <div className={`skill_card bg-skin-secondary${theme} text-skin-secondary${theme}`}>
                                    <div className={`card_header`}>
                                        <h2 >Cyber Security</h2>
                                    </div>
                                    <div className={`card_body`}>
                                            {cyberSkillsEn.map((progSkils, index) => (
                                                <p key={index} className='xp_text xp_bullet m-1'>{progSkils}</p>
                                            ))}
                                    </div>
                                </div>
                                <div className={`skill_card bg-skin-secondary${theme} text-skin-secondary${theme}`}>
                                    <div className={`card_header`}>
                                        <h2 >Dev Ops</h2>
                                    </div>
                                    <div className={`card_body`}>
                                            {devOpsSkillsEn.map((progSkils, index) => (
                                                <p key={index} className='xp_text xp_bullet m-1'>{progSkils}</p>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={`skill_div bg-skin-primary${theme} text-skin-primary${theme}`}>
                        <h1>Habileté</h1>
                        <div className={'skill_page'}>
                            <div className={'card_row'}>
                                <div className={`skill_card bg-skin-secondary${theme} text-skin-secondary${theme}`}>
                                    <div className={`card_header`}>
                                        <h2>
                                            Programmation
                                        </h2>
                                    </div>
                                    <div className={`card_body`}>
                                            {progSkillsFr.map((progSkils, index) => (
                                                <p key={index} className='xp_text xp_bullet m-1'>{progSkils}</p>
                                            ))}
                                    </div>
                                </div>
                                <div className={`skill_card bg-skin-secondary${theme} text-skin-secondary${theme}`}>
                                    <div className={`card_header`}>
                                        <h2 >Administrateur Système</h2>
                                    </div>
                                    <div className={`card_body`}>
                                            {sysSkillsFr.map((progSkils, index) => (
                                                <p key={index} className='xp_text xp_bullet m-1'>{progSkils}</p>
                                            ))}
                                    </div>
                                </div>
                            </div>
                            <div className={'card_row'}>
                                <div className={`skill_card bg-skin-secondary${theme} text-skin-secondary${theme}`}>
                                    <div className={`card_header`}>
                                        <h2 >Cyber Sécurité</h2>
                                    </div>
                                    <div className={`card_body`}>
                                            {cyberSkillsFr.map((progSkils, index) => (
                                                <p key={index} className='xp_text xp_bullet m-1'>{progSkils}</p>
                                            ))}
                                    </div>
                                </div>
                                <div className={`skill_card bg-skin-secondary${theme} text-skin-secondary${theme}`}>
                                    <div className={`card_header`}>
                                        <h2 >DevOps</h2>
                                    </div>
                                    <div className={`card_body`}>
                                            {devOpsSkillsFr.map((progSkils, index) => (
                                                <p key={index} className='xp_text xp_bullet m-1'>{progSkils}</p>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Skills
