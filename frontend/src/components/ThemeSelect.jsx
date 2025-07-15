import { useContext }       from 'react';
import { Context }          from '../App';

const ThemeSelect = () => {
    const { theme, setTheme, language } = useContext(Context);
    const themes = [ 'Light', 'Dark' ];

    return (
        <div>
            {
                language === 'English' ? (
                    <div className={`select_div`}>
                        <h4>Theme:</h4>
                        <select className={`bg-skin-secondary${theme} text-skin-secondary${theme} text-md`} value={theme} onChange={(e) => setTheme(e.target.value)}>
                            {themes.map((theme) => {return <option key={theme} value={theme}>{theme}</option>;})}
                        </select>
                    </div>
                ) : (
                    <div className={`select_div`}>
                        <h4>Thème:</h4>
                        <select className={`bg-skin-secondary${theme} text-skin-secondary${theme} text-md`} value={theme} onChange={(e) => setTheme(e.target.value)}>
                            {themes.map((theme) => {return <option key={theme} value={theme}>{theme}</option>;})}
                        </select>
                    </div>
                )
            }
        </div>

    )
}

export default ThemeSelect
