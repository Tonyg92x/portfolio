import { useContext }       from 'react';
import { Context }          from '../App';
import { Link }             from 'react-router-dom';
import { useState }         from 'react';
import menu                 from '/menu.svg'
import Menu                 from './Menu';

function Navbar() {
    const { theme, language }       = useContext(Context);
    const sectionEn                 = ['Experience', 'Skills', 'Projects', 'Contact'];
    const sectionFr                 = ['Expérience', 'Habileté', 'Projet', 'Contact'];
    const [openMenu, setOpenMenu]   = useState(false);

    return (
        <div>
            {
                language === 'English' ? (
                    <nav className={`nav bg-skin-secondary${theme} text-skin-secondary${theme}`}>
                        <Link to='/' className={`site-title `}>
                            <h2>Anthony Guay</h2>
                        </Link>
                        <ul className='nav-element-div'>
                            {
                                sectionEn.map((sectionEn, index) => (
                                    <li key={`${sectionEn}`} className={`nav-element`}>
                                        <Link className='nav-element-title' to={`/${sectionEn}`}>{sectionEn[0].toUpperCase() + sectionEn.slice(1)}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className='menu_div'>
                            <img className='menu_logo' src={menu} onClick={() => setOpenMenu((prev) => !prev)}></img>
                        </div>
                        {
                            openMenu && (
                                <Menu openMenu={openMenu} setOpenMenu={setOpenMenu}/>
                            )
                        }
                </nav>
                ) : (
                    <nav className={`nav bg-skin-secondary${theme} text-skin-secondary${theme}`}>
                        <Link to='/' className={`site-title bg-skin-third${theme} text-skin-third${theme}`}>
                            <h2>Anthony Guay</h2>
                        </Link>
                        <ul className='nav-element-div'>
                            {sectionEn.map((sectionEn, index) => (
                            <li key={`${sectionFr[index]}`} className={`nav-element`}>
                                <Link className='nav-element-title' to={`/${sectionEn}`}>{sectionFr[index][0].toUpperCase() + sectionFr[index].slice(1)}</Link>
                            </li>))}
                        </ul>
                        <div className='menu_div'>
                            <img className='menu_logo' src={menu} onClick={() => setOpenMenu((prev) => !prev)}></img>
                        </div>
                        {
                            openMenu && (
                                <Menu openMenu={openMenu} setOpenMenu={setOpenMenu}/>
                            )
                        }
                </nav>
                )
            }
        </div>

    );
}

export default Navbar
