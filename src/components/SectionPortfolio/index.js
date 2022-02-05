import React from 'react'
import RubberBand from 'react-reveal/RubberBand';
import FadeLoader from 'react-spinners/FadeLoader'

import { useDispatch, useSelector } from 'react-redux';
import { config } from '../../config';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { fetchProjects } from '../../features/Project/actions';
AOS.init();

const myStyleImg = {
    backgroundColor: '#F9F8F8',
}



export default function SectionPortfolio() {

    let dispatch = useDispatch();
    let projects = useSelector(state => state.projects);

    React.useEffect(() => {
        dispatch(fetchProjects())
    }, [dispatch]);

    return (
        <section className="portfolio mt-5 mb-5" style={myStyleImg} id="portfolio">
            <div className="container">
                <div className="row section-skill-card">
                    <div className="section-title mt-5" >
                        <h2>Proyek Aplikasi</h2>
                    </div>
                    <div className="container mx-auto main">

                        {projects.status === 'process' && !projects.data.length ? <div className="flex justify-center text-center mb-4">
                            <FadeLoader
                                color="#3743e3"
                                className="mb-4"
                            />
                        </div> : null}


                        {projects.data.map((project, index) => {
                            if (index % 2 === 0) {
                                return <div key={index} className="mx-auto d-flex flex-lg-row flex-column position-relative gap-md-4 gap-0" data-aos="fade-up" data-aos-delay="400">
                                    <div className="left-col flex-lg-grow-1 d-flex flex-column align-items-start text-start mt-5">
                                        <h1 className="title-font">{project.title}</h1>
                                        <p className="text-gray-1 caption-font"
                                            dangerouslySetInnerHTML={{ __html: project.description }}
                                        />
                                        <p className='text-gray-1 caption-font'>
                                            {project.github_link ? <a href={project.github_link} target="_blank" className="d-inline-block text-dark mr-5" rel="noopener noreferrer">
                                                Lihat di Github
                                            </a> : ""}
                                        </p>

                                        {project.web_link ? <RubberBand>
                                            <div className="d-inline-block align-items-start d-lg-flex justify-content-start mb-5 ml-5">
                                                <a href={project.web_link} target="_blank" className="btn btn-get text-white" rel="noopener noreferrer">
                                                    Lihat Aplikasi
                                                </a>
                                            </div>
                                        </RubberBand> : ""}

                                    </div>
                                    <div className="right-col flex-lg-grow-1 d-flex flex-column align-items-center text-center"
                                        style={{ zIndex: 10 }}>
                                        <div className="frame" style={{ marginTop: 2 + 'rem' }}>
                                            <img className="w-100 img-fluid" src={`${config.api_host}/${project.image_url}`} alt={project.title} />
                                        </div>
                                    </div>
                                </div>
                            } else {
                                return <div key={index} className="mx-auto d-flex flex-lg-row flex-column position-relative gap-md-4 gap-0"
                                    data-aos="fade-up" data-aos-delay="300">
                                    <div className="right-col flex-lg-grow-1 d-flex flex-column align-items-center text-center"
                                        style={{ zIndex: 10 }}>
                                        <div className="frame" style={{ marginTop: 2 + 'rem' }}>
                                            <img className="w-100 img-fluid" src={`${config.api_host}/${project.image_url}`} alt={project.title} />
                                        </div>
                                    </div>

                                    <div className="left-col flex-lg-grow-1 d-flex flex-column align-items-start text-start"
                                        style={{ marginTop: 2 + 'rem' }}>
                                        <h1 className="title-font mt-5">{project.title}</h1>
                                        <p className="text-gray-1 caption-font"
                                            dangerouslySetInnerHTML={{ __html: project.description }}
                                        />

                                        <p className='text-gray-1 caption-font'>
                                            {project.github_link ? <a href={project.github_link} target="_blank" className="d-inline-block text-dark mr-5" rel="noopener noreferrer">
                                                Lihat di Github
                                            </a> : ""}
                                        </p>

                                        {project.web_link ? <RubberBand>
                                            <div className="d-inline-block align-items-start d-lg-flex justify-content-start mb-5">
                                                <a href={project.web_link} target="_blank" className="btn btn-get d-inline-flex text-white" rel="noopener noreferrer">
                                                    Lihat Aplikasi
                                                </a>
                                            </div>
                                        </RubberBand> : ""}


                                    </div>
                                </div>
                            }

                        })}



                    </div>
                </div>

            </div>
        </section >
    )
}