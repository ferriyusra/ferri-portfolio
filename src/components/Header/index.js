import React, { useState } from 'react'
import FaBars from '@meronex/icons/fa/FaBars';
import SectionHeroHeader from '../SectionHeroHeader';
import landingPageImageIcon from '../../images/icon-new-ferri.png'
import { Link } from 'react-scroll'

const myStyleImg = {
    width: 80,
    height: 80,
}

export default function Header() {
    const [sideBar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sideBar);

    return (
        <section className="header-img" id="home">
            <header className="container header-nav-wrapper">
                <img src={landingPageImageIcon} className="rounded img-fluid" style={myStyleImg} />
                <nav className={`secondnav ${sideBar ? "active" : ""}`}>
                    <Link component={Link} to="home" spy={true} smooth={true}>Beranda</Link>
                    <Link component={Link} to="skills" spy={true} smooth={true}>Kemampuan</Link>
                    <Link component={Link} to="portfolio" spy={true} smooth={true}>Proyek Aplikasi</Link>
                    <Link component={Link} to="experience" spy={true} smooth={true}>Pengalaman Kerja</Link>
                    <Link component={Link} to="contact" spy={true} smooth={true}>Kontak</Link>
                </nav>
                <FaBars className={`fa fa-bars secondnav-toggler ${sideBar ? "active" : ""}`} onClick={showSidebar} />
            </header>
            <SectionHeroHeader />
        </section >
    )
}