import React from 'react'
import RubberBand from 'react-reveal/RubberBand';
import FadeLoader from 'react-spinners/FadeLoader'

import { useDispatch, useSelector } from 'react-redux';
import { config } from '../../config';
import layananKarir from '../../images/laravel-layanankarir.png';
import analisis from '../../images/analisis.jpg';
import gis from '../../images/webgis.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { fetchProjects } from '../../features/Project/actions';
AOS.init();

const myStyleImg = {
    backgroundColor: '#F9F8F8',
}

export default function SectionPortfolio() {

    // let dispatch = useDispatch();
    // let projects = useSelector(state => state.projects);

    // React.useEffect(() => {
    //     dispatch(fetchProjects())
    // }, [dispatch]);

    return (
        <section className="portfolio mt-5 mb-5" style={myStyleImg} id="portfolio">
            <div className="container">
                <div className="row section-skill-card">
                    <div className="section-title mt-5" >
                        <h2>Proyek Aplikasi</h2>
                    </div>
                    {/* section 1 */}
                    <div className="container mx-auto main">
                        <div className="mx-auto d-flex flex-lg-row flex-column position-relative gap-md-4 gap-0" data-aos="fade-up" data-aos-delay="400">
                            <div className="left-col flex-lg-grow-1 d-flex flex-column align-items-start text-start mt-5">
                                <h1 className="title-font">Pusat Layanan Karir Kampus</h1>
                                <p className="text-gray-1 caption-font"
                                    dangerouslySetInnerHTML={{ __html: "Website ini merupakan website Pusat Layanan Karir Kampus.<br\n                                        className=\"d-md-block d-none\" />\n                                    Website ini befungsi untuk memberikan informasi terkait kegiatan kampus, seperti\n                                    seminar, workshop, pelatihan kerja dan juga lowongan pekerjaan. Serta diwebsite ini\n                                    terdapat fitur membuat soal kuisioner untuk mahasiswa, dengan tipe soal essai\n                                    atau pilihan ganda. Dan juga terdapat info grafik terkait jumlah mahasiswa yang telah\n                                    mengisi kuisioner tersebut.<br className=\"d-md-block d-none\" />\n                                    Website ini dibuat dengan Bahasa pemograman PHP dengan menggunakan framework Laravel 7 sebagai backend dan frontend, Bootstrap 5  sebagai Framework atau library CSS\n                                    untuk membuat tampilan antarmuka pengguna. Serta MySQL Database untuk penyimpanan data." }}
                                />
                                <p className='text-gray-1 caption-font'>
                                    <a href="https://github.com/ferriyusra/e-career/issues/1" target="_blank" className="d-inline-block text-dark mr-5" rel="noopener noreferrer">
                                        Lihat di Github
                                    </a>
                                </p>
                            </div>
                            <div className="right-col flex-lg-grow-1 d-flex flex-column align-items-center text-center"
                                style={{ zIndex: 10 }}>
                                <div className="frame" style={{ marginTop: 2 + 'rem' }}>
                                    <img className="w-100 img-fluid" src={layananKarir} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end section 1 */}

                    {/* section 2 */}
                    <div className="mx-auto d-flex flex-lg-row flex-column position-relative gap-md-4 gap-0"
                        data-aos="fade-up" data-aos-delay="300">
                        <div className="right-col flex-lg-grow-1 d-flex flex-column align-items-center text-center"
                            style={{ zIndex: 10 }}>
                            <div className="frame" style={{ marginTop: 2 + 'rem' }}>
                                <img className="w-100 img-fluid" src={analisis} alt="" />
                            </div>
                        </div>

                        <div className="left-col flex-lg-grow-1 d-flex flex-column align-items-start text-start"
                            style={{ marginTop: 2 + 'rem' }}>
                            <h1 className="title-font mt-5">Aplikasi Machine Learning berbasis Desktop Analisis Sentimen untuk mengklasifikasi sebuat data tweet</h1>
                            <p className="text-gray-1 caption-font"
                                dangerouslySetInnerHTML={{ __html: "Aplikasi ini dibuat menggunakan bahasa pemograman Python <br className=\"d-md-block d-none\" /> Aplikasi ini memiliki beberapa fitur yaitu untuk melakukan pengambilan data tweet dari media sosial twitter, dapat melakukan pembersihan data tweet dengan teknik pre-processing, memberikan hasil visualisasi data dengan bentuk barchart, piechart dan wordcloud dan melakukan klasifikasi terhadap data tweet agar memiliki makna sentimen positif atau negatif secara otomatis. <br className=\"d-md-block d-none\" />" }}
                            />

                            <p className='text-gray-1 caption-font'>
                                <a href="https://github.com/ferriyusra/Analisis-Sentimen-Naive-Bayes/issues/1" target="_blank" className="d-inline-block text-dark mr-5" rel="noopener noreferrer">
                                    Lihat di Github
                                </a>
                            </p>

                        </div>
                    </div>
                    {/* end section 2 */}

                    {/* section 3 */}
                    <div className="container mx-auto main">
                        <div className="mx-auto d-flex flex-lg-row flex-column position-relative gap-md-4 gap-0" data-aos="fade-up" data-aos-delay="400">
                            <div className="left-col flex-lg-grow-1 d-flex flex-column align-items-start text-start mt-5">
                                <h1 className="title-font">Peta Penyebaran Toko Oleh-Oleh Makanan Khas Bogor</h1>
                                <p className="text-gray-1 caption-font"
                                    dangerouslySetInnerHTML={{ __html: "Website ini berbasis\n                                    Sistem Informasi Geografis<br className=\"d-md-block d-none\" />\n                                    yang berfungsi untuk memetakan Lokasi kedalam Peta.\n                                    Dalam website ini sebagai contoh kasus memetakan Peta Toko Oleh-Oleh Makanan Khas Bogor\n                                    kedalam Maps.<br className=\"d-md-block d-none\" />\n                                    Website ini menggunakan Library LeafletJs sebagai Maps.Bahasa pemograman PHP dengan menggunakan framework Codeigniter 3 {<LgCodeigniter style={{ width: 40, height: 40 }} />} sebagai backend dan frontend. Serta Bootstrap 4 {<LgBootstrap style={{ width: 30, height: 30 }} />} sebagai Framework atau library CSS\n                                    untuk membuat tampilan antarmuka pengguna. Serta MySQL Database untuk penyimpanan data {<SiMysql style={{ width: 40, height: 40 }} />} .<br\n                                        className=\"d-md-block d-none\" />\n                                    Website ini juga dapat menampilkan arah rute ketempat tujuan yang berada didalam maps\n                                    dengan posisi kita saat ini. Tetapi website ini terkadang tidak akurat apabila kita\n                                    menggunakan GPS melalui Personal Komputer untuk mendapatkan lokasi kita saat ini." }}
                                />
                                <p className='text-gray-1 caption-font'>
                                    <a href="https://github.com/ferriyusra/gis-app-leaflet/issues/1" target="_blank" className="d-inline-block text-dark mr-5" rel="noopener noreferrer">
                                        Lihat di Github
                                    </a>
                                </p>
                            </div>
                            <div className="right-col flex-lg-grow-1 d-flex flex-column align-items-center text-center"
                                style={{ zIndex: 10 }}>
                                <div className="frame" style={{ marginTop: 2 + 'rem' }}>
                                    <img className="w-100 img-fluid" src={gis} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end section 3 */}
                </div>

            </div>
        </section >
    )
}