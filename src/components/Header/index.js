import React, { useState } from 'react'
import FaBars from '@meronex/icons/fa/FaBars';
import SectionHeroHeader from '../SectionHeroHeader';
import landingPageImageIcon from '../../images/icon.png'

const myStyleImg = {
    width: 80,
    height: 80,
}

export default function Header() {
    const [sideBar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sideBar);

    return (
        <section className="header-img">
            <header className="container header-nav-wrapper">
                <img src={landingPageImageIcon} className="rounded img-fluid" style={myStyleImg} />
                <nav className={`secondnav ${sideBar ? "active" : ""}`}>
                    <a href="#">Beranda</a>
                    <a href="#">Kemampuan</a>
                    <a href="#">Portfolio Projek</a>
                    <a href="#">Kontak</a>
                </nav>
                <FaBars className={`fa fa-bars secondnav-toggler ${sideBar ? "active" : ""}`} onClick={showSidebar} />
            </header>
            <SectionHeroHeader />
        </section >
    )
}