import React from 'react'
import './Dashboard.css';
import SideBar from './SideBar';
import { Route, Routes } from 'react-router-dom';
import CreateAndPlay from '../Create&Play/CreateAndPlay';
import Downloads from '../Downloads/Downloads';
import Profile from '../Profile/Profile';

function Dashbaord(props) {

  

  return (
    <>
        
        <div className='container-fluid'>
          <div className='row'>
            <div className='bg-dark border-right-3 col-lg-2 col-md-2 col-auto'>
                <SideBar />
            </div>
            <div className='col-auto col-md-10 px-0 py-0 min-vh-100'>
              {props.children}
            </div>
          </div>
        </div>
    </>
  )
}

export default Dashbaord