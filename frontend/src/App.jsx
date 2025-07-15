import { useState, createContext, useEffect }       from    'react';
import { BrowserRouter as Router, Route, Routes }   from    'react-router-dom';
import Contact                                      from    './components/Contact';
import Experience                                   from    './components/Experiences';
import Introduction                                 from    './components/Introduction';
import Projects                                      from    './components/Projects';
import Skills                                       from    './components/Skills';
import Navbar                                       from    './components/Navbar';
import Footer                                       from    './components/Footer';
import Cookies                                      from    'js-cookie';

export const Context = createContext();

export function App() {
    const [theme, setTheme]         = useState(() => {return Cookies.get('theme') || 'Dark';});
    const [language, setLanguage]   = useState(() => {return Cookies.get('language') || 'English';});

    useEffect(() => {Cookies.set('theme',       theme,      { expires: 7 });}, [theme]);
    useEffect(() => {Cookies.set('language',    language,   { expires: 7 });}, [language]);

    //  Definition needed to use it in tailwindcss
    //  Definition needed to use it below
    const possibilities = [
        //  ----------  Text    ----------  //

        //  Light Theme
        "text-skin-primaryLight",
        "text-skin-secondaryLight",
        "text-skin-thirdLight",

        //  Dark Theme
        "text-skin-primaryDark",
        "text-skin-secondaryDark",
        "text-skin-thirdDark",

        //  ----------  Background  ----------  //

        //  Light Theme
        "bg-skin-primaryLight",
        "bg-skin-secondaryLight",
        "bg-skin-thirdLight",

        //  Dark Theme
        "bg-skin-primaryDark",
        "bg-skin-secondaryDark",
        "bg-skin-thirdDark",
    ]


    return (
        <div className={`bg-skin-primary${theme} text-skin-primary${theme} app`}>
            <Context.Provider value={{ theme, setTheme, language, setLanguage }}>
                <Router>
                    <Navbar/>
                    <div className='content'>
                        <Routes >
                            <Route path='/'             element={<Introduction/>    } />
                            <Route path='/experience'   element={<Experience/>      } />
                            <Route path='/projects'      element={<Projects/>         } />
                            <Route path='/skills'       element={<Skills/>          } />
                            <Route path='/contact'      element={<Contact/>         } />
                        </Routes>
                    </div>
                    <Footer/>
                </Router>
            </Context.Provider>
        </div>
    )
}

export default App
