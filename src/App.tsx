import React from 'react';
import styles from "./components/Site.module.css";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Error404} from "./components/pages/Error404";


function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div>
                        <NavLink
                            className={({isActive}) => isActive ? styles.active : styles.navLink}
                            to={'page1'}>
                            Page1
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            className={({isActive}) => isActive ? styles.active : styles.navLink}
                            to={'page2'}>
                            Page2
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            className={({isActive}) => isActive ? styles.active : styles.navLink}
                            to={'page3'}>
                            Page3
                        </NavLink>
                    </div>
                    <a href="/page3">Page3 HTML</a>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'page1'}/>}/>
                        {/*https://yurik-00007.github.io/React-router-dom/
                        с этога адриса нас перекинет на этот
                        https://yurik-00007.github.io/React-router-dom/#/page1
                        */}
                        <Route path={'page1'} element={<PageOne/>}/>
                        {/*https://yurik-00007.github.io/React-router-dom/#/page1*/}
                        <Route path={'page2'} element={<PageTwo/>}/>
                        <Route path={'page3'} element={<PageThree/>}/>
                        <Route path={'page/error404'} element={<Error404/>}/>
                        {/*все что угодно, кроме тех которые перечислины*/}
                        <Route path={'*'} element={<Navigate to={'page/error404'}/>}/>
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}


export default App;
