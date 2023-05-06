import React from 'react'
import { FcPlus } from 'react-icons/fc'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom';
import { getFileSrcFromPublicimg } from '../../utils';
import './About.css';

function About() {
  return (
    <>
      <Navbar/>
      <section className='mb-4 mt-5'>
        <div className='container'>
          <div>
            <h4>At Teacher Copilot, we are proud to say that our AI platform is developed</h4>
          </div>
          <div className='row py-5'>
            <div className='col-lg-5 col-md-12 col-sm-12'>
              <div className='card px-lg-5 py-lg-5 px-sm-2  border-0'>
                <h3 className='fw-bold'>About Us</h3>
                <p>
                  At Teacher Copilot, we are proud to say that our AI platform is developed by teachers for teachers. Our team of experienced educators understands the unique challenges that come with teaching and creating effective lesson plans, quizzes, and writing prompts. That's why we're committed to developing and improving our platform to better serve the needs of teachers and their students. Our mission is to provide high-quality resources and tools that save teachers time and help them focus on what really matters - fostering a love of learning and building relationships with their students. We believe that by leveraging the power of AI, we can make a meaningful impact on the education system. Join us today and let our AI platform help you transform your teaching and achieve better outcomes for your students!"
                </p>
              </div>
            </div>
            <div className='col-lg-7 col-md-12 col-sm-12'>
              <div>
                <div className=" pt-4 pb-2">
                    <h6 className='fw-bold fs-3'></h6>
                </div>
                <div className='mt-5'>
                  <img src={getFileSrcFromPublicimg('aiteacherabout.webp')} alt='aboutimg' className='w-100'/>
                </div>
                </div>
            </div>
          </div>
        </div>
        </section>
        <Footer/>
    </>
  )
}

export default About