import React from 'react'
import AOS from 'aos';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';

import 'aos/dist/aos.css';
AOS.init();

export default function SectionExperience() {
    return (
        <section id="experience" className="portfolio mt-5">
            <div className="container-xxl mt-5" data-aos="fade-bottom" data-aos-delay="600">
                <div className="section-title mt-5">
                    <h2>Pengalaman Kerja</h2>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-6 d-block text-center" data-aos="zoom-in" data-aos-delay="100">
                        <Timeline
                            mode="alternate"
                            items={[
                                {
                                    dot: (
                                        <ClockCircleOutlined
                                            style={{
                                                fontSize: '16px',
                                            }}
                                        />
                                    ),
                                    children: `PT Jojonomic Indonesia Oktober 2021 - Januari 2022`,
                                },
                                {
                                    children: 'Membuat API service untuk aplikasi website dari Bank CIMB Niaga menggunakan Lumen Micro- Framework.',
                                    color: 'green',
                                },
                                {
                                    children: 'Berkolaborasi dengan System Analyst terkait detail request yang dibutuhkan dan response yang diberikan terhadap API request yang akan dibuat',
                                    color: 'green',
                                },
                                {
                                    children: 'Melakukan Bug Fixing code.',
                                    color: 'green',
                                },
                                {
                                    dot: (
                                        <ClockCircleOutlined
                                            style={{
                                                fontSize: '16px',
                                            }}
                                        />
                                    ),
                                    children: 'PT Moladin Digital Indonesia Maret 2022 - Februari 2023',
                                },
                                {
                                    children: 'Membuat API service menggunakan NodeJs dengan Framework Express dan Go-Lang dengan database MySQL, PostgreSQL atau MongoDB.',
                                    color: 'green',
                                },
                                {
                                    children: 'Membuat API service untuk mengatasi Production Issue menggunakan Framework Express dan MySQL Database.',
                                    color: 'green',
                                },
                                {
                                    children: 'Membuat Unit Testing menggunakan Library Mocha Chai dan Jest untuk Express.',
                                    color: 'green',
                                },
                                {
                                    children: 'Event Driven Programming untuk Publish Message Event menggunakan Message Broker Kafka dengan library KafkaJs.',
                                    color: 'green',
                                },
                                {
                                    children: 'Melakukan Code Review Terkait Pull Request yang diberikan.',
                                    color: 'green',
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </section >
    )
}