import React from 'react'
import github from '../../images/github.png'
import linkedin from '../../images/linkedin.png'
import Jump from 'react-reveal/Jump';
import RubberBand from 'react-reveal/RubberBand';
import Flip from 'react-reveal/Flip';


const myStyleFooter = {
    width: 40,
    height: 40

}

const hrStyle = {
    marginBottom: 1.5 + 'rem',
    borderColor: '#d8e7ff'
}

export default function Footer() {
    return (
        <footer className="footer-end h-100">
            <div className="main">
                <hr style={hrStyle} />
                <div className="">
                    <div
                        className="container d-flex justify-content-between align-items-center m-auto flex-lg-row flex-column-reverse gap-4 position-relative">
                        <RubberBand>
                            <nav className="text-base d-flex align-items-center gap-3 text-gray-1">
                                <h2 className="text-gray-1 m-0">Get in touch : <span>🤙</span></h2>
                            </nav>
                        </RubberBand>
                    </div>
                </div>
                <div className="">
                    <div
                        className="container d-flex justify-content-between align-items-center m-auto flex-lg-row flex-column-reverse gap-4 position-relative">
                        <Jump>
                            <nav className="text-base d-flex align-items-center gap-3 text-gray-1">
                                <p className="text-gray-1 m-0">Contact Email : feriyusra1616@gmail.com</p>
                            </nav>
                        </Jump>

                        <div className="d-flex gap-lg-4">
                            <div className="d-flex gap-3">
                                <Flip>
                                    <a href="https://github.com/ferriyusra?tab=repositories" data-aos-delay="400">
                                        <img src={github} style={myStyleFooter} />
                                    </a>
                                </Flip>
                                <Flip>
                                    <a href="https://www.linkedin.com/in/ferri-yusra-3b5ba4220/" data-aos-delay="400">
                                        <img src={linkedin} className="left-margin"
                                            style={myStyleFooter} />
                                    </a>
                                </Flip>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}