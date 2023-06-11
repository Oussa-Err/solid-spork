import React from 'react'
import { Navbar, Hero, Footer, About, Us } from '../common'

function Home() {

    return (
        <div className='app_container'>
            <Navbar />
            <div className='hero__section'>
                <Hero />
            </div>
            <Us />
            <About />
            <Footer />
        </div>
    )
}

export default Home