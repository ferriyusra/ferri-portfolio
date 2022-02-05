import React from 'react'

import Header from '../../components/Header'
import SectionSkill from '../../components/SectionSkill'
import SectionPortfolio from '../../components/SectionPortfolio'
import SectionExperience from '../../components/SectionExperience'
import Footer from '../../components/Footer'
import { Helmet } from 'react-helmet'
import ScrollTop from "react-scrolltop-button";

import OiArrowTop from '@meronex/icons/oi/OiArrowTop';

import AOS from 'aos';
import 'aos/dist/aos.css';

const TITLE = 'Ferri Yusra Portfolio';

AOS.init();

const myStyleImg = {
    backgroundColor: '#F9F8F8',
}

export default function Home() {

    return (
        <div>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <Header />
            <SectionSkill />
            <SectionPortfolio />
            <SectionExperience />
            <Footer />
            <ScrollTop
                data-aos-duration="1000"
                data-aos="fade-up"
                text="Kembali keatas"
                distance={1500}
                breakpoint={768}
                style={{ backgroundColor: "#3743e3", fontFamily: "Poppins" }}
                className="btn btn-get d-inline-flex text-white"
                speed={1500}
                target={75}
                icon={<OiArrowTop />}
            />
        </div>
    )
}