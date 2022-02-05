import React from 'react'
import AOS from 'aos';
import MdWork from '@meronex/icons/md/MdWork';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import 'aos/dist/aos.css';
AOS.init();

export default function SectionExperience() {
    const myStyleImg = {
        backgroundColor: '#F9F8F8',
    }
    return (
        <section id="experience" className="portfolio mt-5">
            <div className="container-xxl mt-5" data-aos="fade-bottom" data-aos-delay="600">
                <div className="section-title mt-5">
                    <h2>Pengalaman Kerja</h2>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-6 d-block text-center" data-aos="zoom-in" data-aos-delay="100">
                        <VerticalTimeline lineColor='#4d4e4f' layout='1-column-left'>
                            <VerticalTimelineElement
                                className="vertical-timeline-element-work"
                                contentStyle={{ background: '#707173', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7spx solid  #3743e3' }}
                                iconStyle={{ background: '#4d4e4f', color: '#fff' }}
                                icon={<MdWork />}
                                position="left"
                            >
                                <h3 className="vertical-timeline-element-title">PT Jojonomic Indonesia</h3>
                                <h4 className="vertical-timeline-element-subtitle">Backend Developer</h4>
                                <p>
                                    Oktober 2021 - Januari 2022
                                </p>
                            </VerticalTimelineElement>

                        </VerticalTimeline>
                    </div>


                </div>
            </div>
        </section >
    )
}