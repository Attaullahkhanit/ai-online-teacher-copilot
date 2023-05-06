import React from 'react'
import './Dashboard.css';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {GiTeacher} from 'react-icons/gi';
import { GiArmorUpgrade } from 'react-icons/gi';
import { FcIdea } from 'react-icons/fc';


function SideBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    const navigate = useNavigate()

    const goToSignin = () => {
        localStorage.removeItem('status');
        navigate('/signin')
    }
    const goToContactUs = () => {
        navigate('/contact')
    }
    
  return (
    <>
            <Link className='text-decoration-none text-white d-flex align-itemcenter py-2 ms-3 mt-2'>
                <GiTeacher className='ms-1  fs-3'/><span className='px-2 d-none d-sm-inline fs-5'>AI Teacher</span>
            </Link>
            <hr className='text-white py-0 my-0'/>
            <div className='d-flex flex-column justify-content-between menu-item'>
                <div className='py-3'>
                    <ul className='nav nav-pills flex-column'>
                        <li className='nav-item text-white  my-1'>
                            <Link to="/createplay" className='nav-link text-whiten dashboardmenulink' aria-current="page">
                            <i className='bi bi-speedometer2 text-white'></i>
                            <span className='ms-2 text-white d-none d-sm-inline  menuitemfont'>CREATE & PLAY</span>
                            </Link>
                        </li>
                        <li className='nav-item text-white  my-1'>
                            <Link to="/downloads" className='nav-link text-white dashboardmenulink' aria-current="page">
                            <i className='bi bi-house'></i>
                            <span className='ms-2 text-white d-none d-sm-inline menuitemfont'>DOWNLOADS</span>
                            </Link>
                        </li>
                        <li className='nav-item text-white  my-1'>
                            <Link to="/profile" className='nav-link text-white dashboardmenulink' aria-current="page">
                            <i className='bi bi-person-circle text-white'></i>
                            <span className='ms-2 text-white d-none d-sm-inline menuitemfont'>PROFILE</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                
                
                <div className='upgradbottom'>
                <hr className='text-white'/>
                    <ul className='nav nav-pills flex-column text-right'>
                        <li className='nav-item text-white  my-1'>
                            <Link to="/upgrade" className='nav-link text-whiten dashboardmenulink' aria-current="page">
                            <GiArmorUpgrade className='text-white'/>
                            <span className='ms-2 text-white d-none d-sm-inline menuitemfont'>PRO UPGRADE</span>
                            </Link>
                        </li>
                    
                        <li className='nav-item text-white  my-1'>
                            <button onClick = {goToContactUs} className='nav-link text-start text-white dashboardmenulink w-100' aria-current="page">
                            <FcIdea className='text-white'/>
                            <span className='ms-2 text-white d-none d-sm-inline menuitemfont'>TOOL IDEA</span>
                            </button>
                        </li>

                        <li className='nav-item text-white  my-1'>
                            <button onClick={goToSignin} className='nav-link text-start text-white dashboardmenulink w-100' aria-current="page">
                            <i className='bi bi-box-arrow-left text-white'></i>
                            <span className='ms-2 text-white d-none d-sm-inline menuitemfont'>LOGOUT</span>
                            </button>
                        </li>
                    </ul>
                </div>
    {/* content */}
    </div>
                
    </>
  )
}

export default SideBar