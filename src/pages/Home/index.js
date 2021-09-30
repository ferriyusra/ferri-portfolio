import React from 'react'

import Header from '../../components/Header'
import SectionSkill from '../../components/SectionSkill'
import SectionPortfolio from '../../components/SectionPortfolio'
import Footer from '../../components/Footer'
import { Helmet } from 'react-helmet'

const TITLE = 'Ferri Yusra Portfolio'

export default function Home() {
    return (
        <div>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <Header />
            <SectionSkill />
            <SectionPortfolio />
            <Footer />
        </div>
    )
}