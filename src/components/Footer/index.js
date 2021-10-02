import React from 'react'
import LgGithubOctocat from '@meronex/icons/lg/LgGithubOctocat';
import AiFillLinkedin from '@meronex/icons/ai/AiFillLinkedin';
import GrReactjs from '@meronex/icons/gr/GrReactjs';
import LgBootstrap from '@meronex/icons/lg/LgBootstrap';


import Jump from 'react-reveal/Jump';
import Flip from 'react-reveal/Flip';


export default function Footer() {
    return (
        <footer className="footer-end h-100" id="contact">
            <div className="footer-item container-xxl mx-auto position-relative p-0">
                <div className="border-color info-footer">
                    <div>
                        <hr className="hr" />
                    </div>
                    <div className="mx-auto d-flex flex-column flex-lg-row align-items-center footer-info-space gap-4">
                        <div className="d-flex title-font font-medium align-items-center gap-2">
                            <Jump>
                                <a href="https://github.com/ferriyusra" target="_blank" rel="noopener noreferrer">
                                    <LgGithubOctocat style={{ width: 50, height: 50 }}></LgGithubOctocat>
                                </a>
                            </Jump>
                            <Jump>
                                <a href="https://www.linkedin.com/in/ferri-yusra-3b5ba4220/" target="_blank" rel="noopener noreferrer">
                                    <AiFillLinkedin style={{ width: 50, height: 50 }}></AiFillLinkedin>
                                </a>
                            </Jump>
                        </div>
                        <nav className="mx-auto d-flex flex-wrap align-items-center justify-content-center gap-2">
                            <Flip>
                                <div className="footer-link" style={{ textDecoration: "none" }}>Get in touch</div>
                                <span>🤙</span>
                                <div className="footer-link" style={{ textDecoration: "none" }}>Email : feriyusra1616@gmail.com</div>
                            </Flip>
                        </nav>
                        <nav className="d-flex flex-lg-row flex-column align-items-center justify-content-center">
                            <Jump>
                                <p style={{ margin: 0 }}>© 2021 Ferri Yusra | Build with : <GrReactjs style={{ width: 30, height: 30 }} /> | <LgBootstrap style={{ width: 30, height: 30 }} /> </p>
                            </Jump>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}