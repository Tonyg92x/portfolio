import { useContext }       from 'react';
import { Context }          from '../App';

const LanguageSelect = () => {
    const { theme, setTheme, language, setLanguage } = useContext(Context);
    const languages = ['English', 'Français'];

    return (
        <div>
            {
                language === 'English' ? (
                    <div className={`select_div`}>
                        <h4>Language:</h4>
                        <select className={`bg-skin-secondary${theme} text-skin-secondary${theme}`} value={language} onChange={(e) => setLanguage(e.target.value)}>
                            {languages.map((language) => {return <option key={language} value={language}>{language}</option>;})}
                        </select>
                    </div>
                ) : (
                    <div className={`select_div`}>
                        <h4>Langue:</h4>
                        <select className={`bg-skin-secondary${theme} text-skin-secondary${theme}`} value={language} onChange={(e) => setLanguage(e.target.value)}>
                            {languages.map((language) => {return <option key={language} value={language}>{language}</option>;})}
                        </select>
                    </div>
                )
            }
        </div>

    )
}

export default LanguageSelect
