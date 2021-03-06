import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import google from '../../Images/social/google.png';
import auth from '../Firebase/Firebase.init';
import Loading from '../Loading/Loading';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passRef = useRef('');
    const location = useLocation();
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
        auth
      );
    const from = location.state?.from?.pathname || '/';
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [signInWithGoogle, googleuser, googleLoading, googleError] = useSignInWithGoogle(auth);
    if(user){
        // navigate(from, {replace: true});
    }

    let errorElement;
    const navigateToSignup = () =>{
        navigate('/signup');
    }

    if (error) {
        errorElement = <p className="text-red-400">Error: {error?.message}</p>;
      }
    if(googleuser){
        navigate('/');
    }
    if(googleLoading || loading || sending){
        return <Loading/>
    }

    const resetPassword = async() =>{
        const email = emailRef.current.value;

        await sendPasswordResetEmail(email);

        toast('Email Sent');
    }

    const handleLogin = async event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        await signInWithEmailAndPassword(email, password);
        const {data} = await axios.post('https://protected-sea-98781.herokuapp.com/inventorypage', {email});
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, {replace: true});
    }
    return (
        <div className='flex items-center justify-center mt-20'>
            <div className='shadow-lg m-10 p-10 sm:w-96 md:w-96 lg:96 2xl:96 rounded border border-zinc-400'>
                <h2 className='text-3xl text-center font-bold mb-6'>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className='mx-auto w-80  mb-5'>
                    <input 
                    ref={emailRef}
                    type="email"  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900  border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="email" required/>
                    </div>
                    <div className='mx-auto w-80  mb-5'>
                    <input 
                    ref={passRef}
                    type="password" id="floating_filled" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900  border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="password" required/>
                    </div>
                    <div className='text-sm text-center mb-10 mt-4'><p>forgot your password? <span 
                    onClick={resetPassword} className='underline text-sky-500 cursor-pointer'>Reset Password</span></p></div>
                    <div className='flex justify-center'>
                    <input type='submit' className="text-white bg-blue-700 font-medium rounded-lg text-sm px-32 py-2.5 text-center mb-3" value="Login" />
                    </div>
                    {errorElement}
                </form>
                <div className='flex items-center '>
                    <div className='border border-b-1  border-gray-200 mb-2 w-44 mx-auto mt-3'></div>
                    <span className='ml-2 mr-2 text-sm font-semibold'>OR</span>
                    <div className='border border-b-1  border-gray-200 mb-2 w-44 mx-auto mt-3'></div>
                </div>
                <br/>
                <button onClick={() => signInWithGoogle()} className='flex items-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200'>
                    <img style={{ width: "25px", height: "25px" }} src={google} alt="" />
                    <span className=' pl-20'>Continue with Google</span>
                </button>
                <div className='text-sm text-center mb-10 mt-4'><p>Don't have an account? <span onClick={navigateToSignup} className='underline text-sky-500 cursor-pointer'>Create an account</span></p></div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Login;