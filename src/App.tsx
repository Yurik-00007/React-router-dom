import React from 'react';
import styles from "./components/Site.module.css";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Error404} from "./components/pages/Error404";
import {S} from './components/pages/_styles'

const PATH={
    PAGE1:'/page1',
    PAGE2:'/page2',
    PAGE3:'/page3',
    ERROR404:'/page/error404'
}as const
function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper>
                        <NavLink
                            to={PATH.PAGE1}>
                            Page1
                        </NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink
                            to={PATH.PAGE2}>
                            Page2
                        </NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink
                            to={PATH.PAGE3}>
                            Page3
                        </NavLink>
                    </S.NavWrapper>
                    <a href="PATH.PAGE3">Page3 HTML</a>
{/*
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
*/}
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={PATH.PAGE1}/>}/>
                        {/*https://yurik-00007.github.io/React-router-dom/
                        с этога адриса нас перекинет на этот
                        https://yurik-00007.github.io/React-router-dom/#/page1
                        */}
                        <Route path={PATH.PAGE1} element={<PageOne/>}/>
                        {/*https://yurik-00007.github.io/React-router-dom/#/page1*/}
                        <Route path={PATH.PAGE2} element={<PageTwo/>}/>
                        <Route path={PATH.PAGE3} element={<PageThree/>}/>
                        <Route path={'PATH.ERROR404'} element={<Error404/>}/>
                        {/*все что угодно, кроме тех которые перечислины*/}
                        <Route path={'*'} element={<Navigate to={PATH.ERROR404}/>}/>
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;

