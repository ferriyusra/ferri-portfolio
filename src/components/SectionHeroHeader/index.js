import React from 'react'
import landingPageImage from '../../images/icon-landing.png'
import Tada from 'react-reveal/Tada';
import Jump from 'react-reveal/Jump';
import Swing from 'react-reveal/Swing';
import AOS from 'aos';

import 'aos/dist/aos.css';
AOS.init();


export default function SectionHeroHeader() {

    return (
        <div className="section-hero container-xxl mx-auto p-0 position-relative">
            <div className="">
                <div className="main mx-auto row position-relative">

                    <div
                        className="left-column p-0 col-lg-6 d-flex flex-column align-items-lg-start justify-content-lg-center align-items-center text-lg-start text-center" >
                        <Tada>
                            <h1 className="title-font text-blue-1" >
                                Selamat datang di<br className="d-md-block d-none" />
                                personal
                                website saya.
                            </h1>
                        </Tada>
                        <Swing>
                            <p className="caption-font text-gray-1" data-aos-duration="1000">
                                Hai <span>👋</span> nama saya Ferri Yusra, biasa disapa Ferri. Saya lulusan baru dari kampus
                                saya di
                                STMIK Jakarta STI&K jurusan Sistem Informasi. <br className="d-md-block d-none" />
                                Saya memiliki minat dibidang Web Developer dan Backend Developer.
                                Saat ini saya terbuka untuk pekerjaan Jr. Website Developer atau Jr. Backend
                                Developer. <br className="d-md-block d-none" />
                            </p>
                        </Swing>
                        <a href="#" className="btn btn-get d-inline-flex text-white" data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos="fade-up">
                            Download CV
                        </a>
                    </div>
                    <div className="col-lg-6 p-0 d-flex text-center justify-content-lg-start justify-content-center d-flex">
                        <Jump>
                            <img className="hero-img" id="hero-header-4-1" src={landingPageImage} alt="feri hero" />
                        </Jump>
                    </div>
                </div>
            </div>
        </div>
    )
}