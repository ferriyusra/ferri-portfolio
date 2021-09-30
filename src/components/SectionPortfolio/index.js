import React from 'react'
// import Wrapper from '../Wrapper'

import layananKarir from '../../images/laravel-layanankarir.png'
import webGis from '../../images/webgis.png'
import resep from '../../images/resep-phpnative.png'

import LgPhp from '@meronex/icons/lg/LgPhp';
import SiMysql from '@meronex/icons/si/SiMysql';
import LgBootstrap from '@meronex/icons/lg/LgBootstrap';
import LgCodeigniter from '@meronex/icons/lg/LgCodeigniter';
import LgLaravel from '@meronex/icons/lg/LgLaravel';
import RubberBand from 'react-reveal/RubberBand';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const myStyleImg = {
    backgroundColor: '#F9F8F8',
}


export default function SectionPortfolio() {
    return (
        <section className="portfolio mt-5" style={myStyleImg}>
            <div className="container">
                <div className="row section-skill-card">
                    <div className="section-title mt-5" >
                        <h2>Portfolio</h2>
                    </div>
                    <div className="container mx-auto main">
                        <div className="mx-auto d-flex flex-lg-row flex-column position-relative gap-md-4 gap-0" data-aos="fade-up" data-aos-delay="100"
                        >
                            <div className="left-col flex-lg-grow-1 d-flex flex-column align-items-start text-start">
                                <h1 className="title-font">Website Resep Masakan Khas Sumatera Barat</h1>
                                <p className="text-gray-1 caption-font">
                                    Website ini merupakan website resep masakan<br className="d-md-block d-none" />
                                    khas Sumatera Barat.<br className="d-md-block d-none" />
                                    Website ini digunakan dengan PHP Native {<LgPhp style={{ width: 40, height: 40 }} />} sebagai backend dan frontend, Bootstrap 4 {<LgBootstrap style={{ width: 30, height: 30 }} />} sebagai Framework atau library CSS
                                    untuk membuat tampilan antarmuka pengguna dan MySQL Database untuk  penyimpanan data {<SiMysql style={{ width: 40, height: 40 }} />}.<br className="d-md-block d-none" />
                                    Website ini dapat melihat informasi dari Resep Masakan Khas Sumatera Barat, diwebsite
                                    ini dapat login serta memberikan komentar terkait video dan resep yang diberikan.
                                </p>
                                <RubberBand>
                                    <div className="d-inline-block align-items-start d-lg-flex justify-content-start">
                                        <a href="" className="btn btn-get d-inline-flex text-white mb-5">
                                            Lihat Aplikasi
                                        </a>
                                    </div>
                                </RubberBand>
                            </div>

                            <div className="right-col flex-lg-grow-1 d-flex flex-column align-items-center text-center"
                                style={{ zIndex: 10 }}>
                                <div className="frame" style={{ marginTop: 1 + 'rem' }}>
                                    <img className="w-100 img-fluid" src={resep} />
                                </div>
                            </div>
                        </div>

                        <div className="mx-auto d-flex flex-lg-row flex-column position-relative gap-md-4 gap-0"
                            data-aos="fade-up" data-aos-delay="200">
                            <div className="right-col flex-lg-grow-1 d-flex flex-column align-items-center text-center"
                                style={{ zIndex: 10 }}>
                                <div className="frame" style={{ marginTop: 2 + 'rem' }}>
                                    <img className="w-100 img-fluid" src={webGis} />
                                </div>
                            </div>

                            <div className="left-col flex-lg-grow-1 d-flex flex-column align-items-end"
                                style={{ marginTop: 2 + 'rem' }}>
                                <h1 className="title-font mt-5 text-end">Peta Penyebaran Toko Oleh-Oleh Makanan Khas Bogor</h1>
                                <p className="text-gray-1 caption-font text-end">
                                    Website ini berbasis
                                    Sistem Informasi Geografis<br className="d-md-block d-none" />
                                    yang berfungsi untuk memetakan Lokasi kedalam Peta.
                                    Dalam website ini sebagai contoh kasus memetakan Peta Toko Oleh-Oleh Makanan Khas Bogor
                                    kedalam Maps.<br className="d-md-block d-none" />
                                    Website ini menggunakan Library LeafletJs <span className="badge rounded-pill bg-light text-dark badge-outline">
                                        <svg width="60" height="60" viewBox="0 0 512 136" xmlns="http://www.w3.org/2000/svg"
                                            preserveAspectRatio="xMidYMid">
                                            <defs>
                                                <linearGradient x1="-6.234%" y1="45.374%" x2="103.068%" y2="58.975%" id="a">
                                                    <stop stopColor="#8AC443" offset="0%" />
                                                    <stop stopColor="#75B843" offset="100%" />
                                                </linearGradient>
                                                <linearGradient x1="-10.801%" y1="43.538%" x2="110.996%" y2="56.986%"
                                                    id="b">
                                                    <stop stopColor="#75B843" offset="0%" />
                                                    <stop stopColor="#4B9744" offset="100%" />
                                                </linearGradient>
                                                <linearGradient x1="108.51%" y1="41.458%" x2="-3.274%" y2="65.747%" id="c">
                                                    <stop stopColor="#C1DB74" offset="0%" />
                                                    <stop stopColor="#ACD259" offset="100%" />
                                                </linearGradient>
                                                <linearGradient x1="129.073%" y1="38.386%" x2="-25.413%" y2="61.919%"
                                                    id="d">
                                                    <stop stopColor="#ACD259" offset="0%" />
                                                    <stop stopColor="#8AC443" offset="100%" />
                                                </linearGradient>
                                            </defs>
                                            <path
                                                d="M347.7 88.3c-2 1.3-4.1 2-6.1 2-1.5 0-2.7-.6-3.7-1.8-.9-1.2-1.4-2.7-1.4-4.6 0-2.8.7-6.5 2.1-11.2l4-13.6 9.4-.7 2-9.3-8.5.5 6.3-21-16.2 3.3-5.7 18.9-5.8.2-1.9 9.5 4.6-.2-2.6 9.2c-1.2 4.1-2.1 7.7-2.6 10.9-4.8 4.9-8.4 8-10.8 9.4-2.4 1.4-5 2.1-7.6 2.1-6.8 0-11-3.9-12.6-11.8 17.7-5.2 26.6-12 26.6-20.3 0-3.1-1.1-5.7-3.4-7.6-2.3-1.9-5.3-2.9-9-2.9-7.2 0-13.8 3.5-19.7 10.4-5.4 6.3-8.3 13.2-8.8 20.9-4.9 4.8-8.6 8-11 9.5-2.5 1.6-4.8 2.4-7 2.4-2.1 0-3.9-1-5.1-3.1-1.3-2.1-1.9-4.8-1.9-8.3 0-1.6.2-4.5.5-8.6 8.1-8.7 14-17 17.8-24.7 3.8-7.7 5.7-15.7 5.7-23.9 0-2.9-.4-5.2-1.1-6.9-.7-1.7-1.7-2.6-2.9-2.6-.2 0-.6.1-1.1.2L254.8 20c-5.2 10-9.7 20.9-13.4 32.8-3.3 10.7-5.1 20.1-5.4 28-6.4 7.7-12.3 11.5-17.7 11.5-3.9 0-6.9-2.1-8.9-6.3l5.1-25.3c8.3-7.7 13.9-14.1 16.9-19.3 3-5.2 4.5-10.7 4.5-16.3 0-3.3-.5-5.9-1.5-7.9s-2.2-3-3.7-3c-.2 0-1.7.4-4.5 1.1-2.8.7-5.5 1.5-8 2.2-2.5.8-4 1.6-4.7 2.5-.6.9-2.2 4.2-4.7 10.1-2.5 5.9-4.4 11.2-5.7 16.1-1.4 4.8-3.2 12.7-5.3 23.5l-10.1 10.5v-.1c-3.4 3.4-6.1 6-8 7.6-1.9 1.7-3.6 2.5-5.2 2.5-2.5 0-3.7-1.7-3.7-5.2 0-3.3 1.4-9.4 4.1-18.3l5.3-17.7h-3.4l-12.4 6.8c-2-4.6-5.5-7-10.6-7-4 0-8.6 1.7-13.8 5.1-5.2 3.4-9.5 7.8-12.8 13.3-2.6 4.3-4.2 8.7-4.7 13.3-4.6 4.6-8.1 7.7-10.5 9.1-2.4 1.4-5 2.1-7.6 2.1-6.8 0-11-3.9-12.6-11.8 17.7-5.2 26.6-12 26.6-20.3 0-3.1-1.1-5.7-3.4-7.6-2.3-1.9-5.3-2.9-9-2.9-7.2 0-13.8 3.5-19.7 10.4-5.4 6.3-8.3 13.3-8.8 21-5.9 6.5-12.1 9.8-18.6 9.8-3.4 0-7.4-.9-12.1-2.7-4.7-1.8-8.3-3-10.8-3.7-2.5-.6-5.5-.8-8.9-.6 5.3-5.5 8.8-11.1 10.8-16.8 1.9-5.7 3.3-12.2 4.1-19.6.8-7.4 1.6-12.7 2.3-16 .7-3.3 2-6.1 3.8-8.5 1.8-2.4 4.4-3.6 7.7-3.6 2.7 0 4.9 1 6.5 3 1.6 2 2.4 4.7 2.4 8.2 0 4.5-1 8.4-3.1 11.7-2.1 3.3-4.5 4.9-7.2 4.9-1.7 0-3-.6-4.1-1.9-.5 1.7-.7 3.1-.7 4.4 0 2.4.7 4.3 2.2 5.7 1.5 1.4 3.4 2.1 6 2.1 4.9 0 9.2-2.4 12.9-7.1 3.7-4.8 5.6-10.3 5.6-16.6 0-5.5-1.8-10-5.4-13.5-3.6-3.5-8.1-5.3-13.7-5.3-8.1 0-15.6 4-22.5 12.1-6.9 8-10.7 19.2-11.4 33.4-.4 6.9-.9 11.8-1.5 14.8s-2.1 6.1-4.4 9.2c-5.5.9-9.7 2.5-12.7 4.8s-4.5 5-4.5 8.1c0 1.5.5 2.7 1.5 3.7S4 102 5.5 102c4.4 0 9.3-3 14.8-8.9 2.9.8 6.3 2.1 10.2 3.9 3.8 1.8 7.1 3 9.8 3.8 2.7.7 5.5 1.1 8.4 1.1 10 0 19.7-4.8 29.3-14.5.7 3.7 2.2 6.9 4.7 9.4 3.4 3.5 7.8 5.3 13.3 5.3 4.9 0 9.4-1.2 13.5-3.6 3.9-2.3 8.3-5.9 13.2-10.6.4 3.5 1.6 6.6 3.5 9.2 2.5 3.3 5.5 5 9 5 3.6 0 7.1-1.4 10.6-4.1 3.4-2.7 7.1-7 11.2-12.8-.4 11.2 2.6 16.9 9 16.9 2.5 0 5.2-.9 8-2.8s7.4-5.8 13.8-12l4.1-4.5c1.1 3.1 1.9 5 2.4 5.8-3.2 17.6-5.4 31.9-6.7 43 5.9-1.2 10.9-2 15.1-2.6 1.3-10.3 2.8-19.8 4.5-28.7 2.7 1.2 4.8 1.7 6.3 1.7 3.2 0 6.9-1.3 11-3.8 4-2.5 8-6 12.1-10.5.5 3.7 1.7 6.8 3.7 9.3 2.6 3.3 6.1 5 10.4 5 3.7 0 7.7-1.2 11.8-3.6 4.1-2.4 8.9-6.1 14.4-11.2.7 3.8 2.2 6.9 4.7 9.5 3.4 3.5 7.8 5.3 13.3 5.3 4.9 0 9.4-1.2 13.5-3.6 3.9-2.3 8.3-5.9 13.2-10.6.2 4 1.3 7.3 3.2 9.8 2.2 2.9 5 4.4 8.4 4.4 3.3 0 6.9-1.2 10.6-3.6 3.7-2.4 8.1-6.1 13.2-11.2v-7c-4.3 4-7.3 6.8-9.3 8.1zm-85.9-56.1c2.8-7.4 5-11.1 6.5-11.1.7 0 1.2.5 1.7 1.4.4.9.7 2.1.7 3.6 0 5.1-1.6 11.2-4.8 18.2-3.2 7.1-7.3 13.4-12.5 19.1 2.7-13.4 5.5-23.8 8.4-31.2zm-39.1-4.8c1.8-4.6 3.6-7 5.4-7 .9 0 1.7.5 2.3 1.6.6 1.1.9 2.5.9 4.2 0 4-1.3 8.4-4 13.1-2.7 4.7-6.4 9.2-11.1 13.3 2.5-12.2 4.7-20.6 6.5-25.2zM102.5 54c2.8 0 4.2 1.9 4.2 5.8 0 7.8-5.2 13.2-15.5 16.1 0-6.5 1.2-11.8 3.6-15.8 2.4-4 5-6.1 7.7-6.1zm52.2 26.1c-3.6 6.9-7.4 10.3-11.4 10.3-1.7 0-3-.7-4.1-2-1.1-1.3-1.6-3.1-1.6-5.3 0-5.8 1.8-12.1 5.4-18.9 3.6-6.9 7.4-10.3 11.5-10.3 1.7 0 3 .6 4.1 1.9 1 1.3 1.5 3 1.5 5.3-.1 5.8-1.9 12.1-5.4 19zM301.3 54c2.8 0 4.2 1.9 4.2 5.8 0 7.8-5.2 13.2-15.5 16.1 0-6.5 1.2-11.8 3.6-15.8 2.5-4.1 5.1-6.1 7.7-6.1z"
                                                fill="#70706F" />
                                            <path
                                                d="M377.4 54.3c1.3 1.5 26 9.7 34.5 19.7 8.6 10 12.3 18.9 11.1 27.5-1.2 8.6-6.5 8.4-8.7 11.6-2.3 3.1-5.5 7-11.5 6.6-8-.5-16.2-4.5-22.1-18.3-5.9-13.8-5.5-26.8-5-34 .4-7.3 1.7-13.1 1.7-13.1z"
                                                fill="url(#a)" />
                                            <path d="M378.1 56.6l37 55.2-1.7 1.9-35.3-57.1z" fill="url(#b)" />
                                            <path
                                                d="M236.4 133.3l.3-2.4c9.9-5.3 22.1-7.3 32.1-12.4 3 1.3 4.3-.6 7.5-.4 1.2 1-1.5 2.4 1.7 2.2 7.1.9 14.1-.4 21.1-1 7.4-.6 14.7.1 22-.4 2.3-.1 5.9-3.3 8.7-1.7 1.3 2.3-4.2 2.5-2.7 5.1 14.5 3.4 50.8 17.8 57 2.1.1 1-1.1 2.8.6 2.6 12.2-5.5 33-17.3 36.7-20.4 4-3.4 9.4-3.3 14.6-4.5 9.5-2.2 19.6-4.4 27.8-9.2 5.1 3.5 15.7 5.3 21.3 4 5.9-1.3 15.1-11.1 20-14.6 1.9-1.4 4.8-4 6.8-2.5-1.4 1 .2 3.8-1.5 3.3-.9-1.7-2.7.3-4-.1-4.9 4.1-10.1 7.9-15.1 11.8-2.4 1.4 2.3 2.9-.5 3.4-13 2.6-32.9-3.9-41.1 5.1-13 4.5-25.3 5.6-38.1 12.5-7.4 4-16.4 11.2-24.1 15-1.3.6-3.2.9-4.7 1.8-1.9 1.1-2.3 2.6-3.9 2.9-3.9.8-12-1.2-17.2-1.9-17-2.5-35.2-9.4-51.3-10.3-6.4-.3-13.9.7-21.1 1-15.3.7-24.8 1.1-37.1 5.2-4.8 1.7-12.6 6.2-15.8 3.8z"
                                                fill="#3D3D3C" />
                                            <path
                                                d="M472.6 0c-1.7 2.8-40.9 23-52.6 41.9-11.8 19-15.1 33.9-10.8 47.9 4.3 14 12.4 13.4 17 18s10.9 10.2 21 8c13.2-3 25.9-11.8 32.2-36.4 6.3-24.6 2.2-46.2-.5-58.1C476.2 9.4 472.6 0 472.6 0z"
                                                fill="url(#c)" />
                                            <path d="M471.9 4.2L424.4 106l2.8 2.8L471.9 4.2z" fill="url(#d)" />
                                        </svg>
                                    </span> sebagai Maps,
                                    Bahasa pemograman PHP {<LgPhp style={{ width: 40, height: 40 }} />} dengan menggunakan framework Codeigniter 3 {<LgCodeigniter style={{ width: 40, height: 40 }} />} sebagai backend dan frontend. Serta Bootstrap 4 {<LgBootstrap style={{ width: 30, height: 30 }} />} sebagai Framework atau library CSS
                                    untuk membuat tampilan antarmuka pengguna. Serta MySQL Database untuk penyimpanan data {<SiMysql style={{ width: 40, height: 40 }} />} .<br
                                        className="d-md-block d-none" />
                                    Website ini juga dapat menampilkan arah rute ketempat tujuan yang berada didalam maps
                                    dengan posisi kita saat ini. Tetapi website ini terkadang tidak akurat apabila kita
                                    menggunakan GPS melalui Personal Komputer untuk mendapatkan lokasi kita saat ini.
                                </p>
                                <RubberBand>
                                    <div className="d-inline-block align-items-start d-lg-flex justify-content-start">
                                        <a href="" className="btn btn-get d-inline-flex text-white mb-5">
                                            Lihat Aplikasi
                                        </a>
                                    </div>
                                </RubberBand>
                            </div>
                        </div>

                        <div className="mx-auto d-flex flex-lg-row flex-column position-relative gap-md-4 gap-0" data-aos="fade-up" data-aos-delay="300">
                            <div className="left-col flex-lg-grow-1 d-flex flex-column align-items-start text-start mt-5">
                                <h1 className="title-font mt-5">Pusat Layanan Karir Kampus</h1>
                                <p className="text-gray-1 caption-font">
                                    Website ini merupakan website Pusat Layanan Karir Kampus.<br
                                        className="d-md-block d-none" />
                                    Website ini befungsi untuk memberikan informasi terkait kegiatana kampus, seperti
                                    seminar, workshop, pelatihan kerja dan juga lowongan pekerjaan. Serta diwebsite ini
                                    terdapat fitur membuat soal kuisioner untuk mahasiswa, dengan tipe soal essai
                                    atau pilihan ganda. Dan juga terdapat info grafik terkait jumlah mahasiswa yang telah
                                    mengisi kuisioner tersebut.<br className="d-md-block d-none" />
                                    Website ini dibuat dengan Bahasa pemograman PHP {<LgPhp style={{ width: 40, height: 40 }} />} dengan menggunakan framework Laravel 7 <LgLaravel style={{ width: 40, height: 40 }} /> sebagai backend dan frontend, Bootstrap 5 {<LgBootstrap style={{ width: 30, height: 30 }} />} sebagai Framework atau library CSS
                                    untuk membuat tampilan antarmuka pengguna. Serta MySQL Database untuk penyimpanan data {<SiMysql style={{ width: 40, height: 40 }} />} .<br
                                        className="d-md-block d-none" />
                                </p>
                                <RubberBand>
                                    <div className="d-inline-block align-items-start d-lg-flex justify-content-start">
                                        <a href="" className="btn btn-get d-inline-flex text-white mb-5">
                                            Lihat Aplikasi
                                        </a>
                                    </div>
                                </RubberBand>
                            </div>
                            <div className="right-col flex-lg-grow-1 d-flex flex-column align-items-center text-center"
                                style={{ zIndex: 10 }}>
                                <div className="frame" style={{ marginTop: 2 + 'rem' }}>
                                    <img className="w-100 img-fluid" src={layananKarir} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}