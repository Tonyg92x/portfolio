import { useContext, useEffect, useRef }       from 'react';
import { Context }          from '../App';
import ThemeSelect          from './ThemeSelect';
import LanguageSelect       from './LanguageSelect';

const Menu = ({setOpenMenu}) => {
    const { theme, language } = useContext(Context);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenMenu(false); // Close the menu
            }
        };

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);

        // Clean up the event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setOpenMenu]);

    return (
        <div>
            {
                language === 'English' ? (
                    <div ref={menuRef} className={`menu bg-skin-secondary${theme} text-skin-secondary${theme}`}>
                        <div className={`menu_body`}>
                            <ThemeSelect/>
                            <LanguageSelect/>
                            <div className='menu_button_div'>
                                <button className={`menu_button bg-skin-third${theme} text-skin-third${theme}`} onClick={() => setOpenMenu((prev) => !prev)}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div ref={menuRef} className={`menu bg-skin-secondary${theme} text-skin-secondary${theme}`}>
                        <div className={`menu_body`}>
                            <ThemeSelect/>
                            <LanguageSelect/>
                            <div className='menu_button_div'>
                                <button className={`menu_button bg-skin-third${theme} text-skin-third${theme}`} onClick={() => setOpenMenu((prev) => !prev)}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>

    )
}

export default Menu
