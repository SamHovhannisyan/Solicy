import React from 'react';
import {Outlet} from "react-router-dom";
import Footer from '../Footer';
import Header from '../Header';
import css from './layout.module.css';

function Layout() {
  return (
    <div className={css.main}>
        <div className={css.children}>
            <Header/>
            <div className={css.divOutlet}>
                <Outlet />
            </div>
            <Footer />
        </div>
    </div>
  )
}

export default Layout;