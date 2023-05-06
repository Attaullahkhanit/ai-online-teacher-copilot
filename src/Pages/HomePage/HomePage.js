import React from 'react'
import VideoPlayer from '../../Components/VideoPlayer/VideoPlayer'
import SigninCard from '../../Components/SigninCard/SigninCard'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

function HomePage() {
  return (
    <>
      <Navbar/>
      <section className='mb-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <VideoPlayer />

            </div>
            <div className='col-lg-4'>
              <SigninCard />
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default HomePage