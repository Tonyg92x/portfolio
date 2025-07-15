import { useContext }       from 'react';
import { Context }          from '../App';

const Footer = () => {
    const { theme, language } = useContext(Context);

    return (
        <div>
            {
                language === 'English' ? (
                    <footer className={`footer footer bg-skin-secondary${theme} text-skin-secondary${theme}`}>
                    </footer>
                ) : (
                    <footer className={`footer footer bg-skin-secondary${theme} text-skin-secondary${theme}`}>
                    </footer>
                )
            }
        </div>
    );
}

export default Footer
