import React from 'react'
import './Footer.css'
import { Icon } from 'react-animated-fa'
import { Link } from 'react-router-dom';
import {RiFacebookFill} from 'react-icons/ri'
import { BsTwitter } from 'react-icons/bs';
import { AiFillGithub, AiOutlineGoogle, AiOutlineInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Footer() {
    return (
        <>
            <footer className="bg-light text-center text-white">
                <div className="container pb-0">
                    <section className="mb-4">
                        <Link
                            className="btn text-white btn-floating shadow rounded-circle m-1"
                            style={{backgroundColor: '#3b5998'}}
                            to="#!"
                            role="button"
                        ><RiFacebookFill/></Link>
                        <Link
                            className="btn text-white btn-floating shadow rounded-circle m-1"
                            style={{backgroundColor: '#55acee'}}
                            to="#!"
                            role="button"
                        ><BsTwitter/></Link>
                        <Link
                            className="btn text-white btn-floating shadow rounded-circle m-1"
                            style={{backgroundColor: '#dd4b39'}}
                            to="#!"
                            role="button"
                        ><AiOutlineGoogle/></Link>
                        <Link
                            className="btn text-white btn-floating shadow rounded-circle m-1"
                            style={{backgroundColor: '#ac2bac'}}
                            to="#!"
                            role="button"
                        ><AiOutlineInstagram/></Link>
                        <Link
                            className="btn text-white btn-floating shadow rounded-circle m-1"
                            style={{backgroundColor: '#0082ca'}}
                            to="#!"
                            role="button"
                        ><FaLinkedinIn/></Link>
                        <Link
                            className="btn text-white btn-floating shadow rounded-circle m-1"
                            style={{backgroundColor: '#333333'}}
                            to="#!"
                            role="button"
                        ><AiFillGithub /></Link>

                    </section>
                </div>
                <div className="text-center d-flex flex-row justify-content-between py-lg-3 px-lg-5 py-sm-3 footerbottomtext" style={{backgroundColor: '#000000'}}>
                    <div>
                        © 2023 WebRDev:
                        <Link className="text-primary text-decoration-none px-3   " to="#!"> All Right Reserved</Link>
                     </div>
                     <div>
                        <Link className="text-primary text-decoration-none px-4" to="#!"> Terms of use</Link>
                        <Link className="text-primary text-decoration-none" to="#!"> Privacy Policy</Link>
                     </div>
                </div>
            </footer>
        </>
    )
}

export default Footer