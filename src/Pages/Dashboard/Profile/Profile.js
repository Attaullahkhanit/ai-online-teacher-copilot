import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import './Profile.css';
import Dashbaord from '../Dashboard/Dashboard';
import {Link} from "react-router-dom";
import { getFileSrcFromPublicimg } from '../../../utils'; 

function Profile() {
  return (
    <>
      <Dashbaord> 
    <section className='min-vh-100' style={{ backgroundColor: '#f0f8ff' }}>
      <div className='container-fluid'>
        <div className='fw-bold fs-5 py-2'>My Profile</div>
        <div className='row'>
          <div className='col-12'>
            <div className='card bg-white border-0 rounded w-200 my-3 p-3'>
              <div className='row'>
                <div className='col-lg-3 border-right'>
                  <div>
                    <h6>Billing</h6>
                  </div>
                  <div className='text-secondary pt-2' style={{fontSize: '14px'}}>Current Plan</div>
                  <h4 className='text-primary'>Free Plan</h4>

                  <div className='text-secondary pt-2' style={{fontSize: '14px'}}>Next Billing Date</div>
                  <h6>N/A</h6>

                  <div className='text-secondary pt-2' style={{fontSize: '14px'}}>Monthly Charge</div>
                  <h6>$0.00/Month</h6>
                </div>
                <div className='col-lg-9'>
                  <div>
                    <h6>Personal Details</h6>
                  </div>
                <div className='text-secondary' style={{fontSize: '14px'}}>Edit</div>
                  <hr className='m-0'></hr>
                  <input type="text" className="form-control my-4" id="nameid" placeholder="Davin Smith" value="Davin Smith" required/>
                  <input type="email" className="form-control my-4" id="emailid" placeholder="Davin@gmail.com" value="DavinSmith@gmail.com" required/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 
      </Dashbaord>
    </>
  )
}

export default Profile