import React from 'react'
import Navbar from './Navbar'
import '../css/style.css'
import Footer from './Footer'
import Places from './Places'

function Home() {
    return (
        <div class="main">
            <div class="container">
                <Navbar />
                <div class="row">
                    <div class="col">
                        <h1>Sahara</h1>
                        <p>
                            The Sahara Desert is one of the most iconic and vast desert
                            landscapes on Earth, covering much of North Africa and spanning
                            approximately 3.6 million square miles (9.2 million square
                            kilometers).
                        </p>
                        <button type="button">Explore</button>
                    </div>
                </div>
            </div>
            <Places/>
            <Footer/>
        </div>

    )
}

export default Home
