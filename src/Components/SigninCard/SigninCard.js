import React from 'react';
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from 'react-icons/fa';
import { Divider } from '@mui/material';
import { getFileSrcFromPublicimg } from '../../utils';
import { useState } from 'react';
import { parse } from 'popper/farms/saucelabs';
import { useNavigate } from 'react-router-dom/dist';

{/* <img src= {getFileSrcFromPublicFolder("icons/girl-icon.PNG")} alt="backgroundimg" /> */ }

function SigninCard(props) {
    const [loader, setLoader] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');


    // const signinObjData =  {
    //        email: email,
    //        password: password
    // }
    const navigation = useNavigate()

    const signindt = () => {
        setLoader(true)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            email: email,
            password: password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3000/signin", requestOptions)
            .then(response => response.json())
            .then(result => {
                 localStorage.setItem('status', result.statu)
                localStorage.setItem('loginResponse', JSON.stringify(result))
                setLoader(false);
                if (result.statu == true) {
                    navigation("/profile")
                } else {
                    setMessage(result.message)
                }
            })
            .catch(error => console.log('error', error))
    }

    return (
        <>
            <form className='my-5 py-3'>
                <div className='row mx-0'>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='row mx-0 mt-4'>
                    <input type="password " className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="row  mt-2">
                    <div className="col d-flex justify-content-end">
                        <label className="form-check-label" for="form2Example31" style={{ color: '#bbb' }}> Recovered Passward ? </label>
                    </div>
                </div>
                {loader ?
                    <button type="button" className="btn btn-primary btn-block mt-5 mb-4 w-100 py-2 shadow fw-bold">
                        Sign in <img src={getFileSrcFromPublicimg('loader.svg')} alt='aboutimg' style={{ height: "21px" }} />
                    </button> :
                    <button type="button" className="btn btn-primary btn-block mt-5 mb-4 w-100 py-2 shadow fw-bold" onClick={signindt}>
                        Sign in
                    </button>
                }
                {message && <div style={{ color: "red", fontSize: '12px', textTransform: 'capitalize' }}>{message} please try again*</div>}

                <Divider className="py-3" style={{ color: '#bbb' }}>Or continue</Divider>
                <div className="text-center d-flex w-100 justify-content-between mt-4">

                    <button type="button" className="shadow btn btn-link btn-floating  px-4 rounded" role="button">
                        <FcGoogle size={25} />
                    </button>
                    <button type="button" className="shadow btn btn-link btn-floating  px-4" role="button">
                        <FaApple className='text-dark' size={25} />
                    </button>
                    <button type="button" className="shadow btn btn-link btn-floating  px-4" role="button">
                        <BsFacebook style={{ color: 'blue' }} size={25} />
                    </button>
                </div>
            </form>
        </>
    )
}

export default SigninCard