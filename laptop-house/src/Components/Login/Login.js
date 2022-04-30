import React from 'react';
import { useNavigate } from 'react-router-dom';
import google from '../../Images/social/google.png';

const Login = () => {
    const navigate = useNavigate();
    const navigateToSignup = () =>{
        navigate('/signup');
    }
    return (
        <div className='flex items-center justify-center mt-20'>
            <div className='shadow-lg m-10 p-10 sm:w-96 md:w-96 lg:96 2xl:96 rounded border border-zinc-400'>
                <h2 className='text-3xl text-center font-bold mb-6'>Login</h2>
                <form>
                    <div className='mx-auto w-80  mb-5'>
                    <input type="email"  className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900  border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="email" required/>
                    </div>
                    <div className='mx-auto w-80  mb-5'>
                    <input type="password" id="floating_filled" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900  border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="password" required/>
                    </div>
                    <div className='text-sm text-center mb-10 mt-4'><p>forgot your password? <span className='underline text-sky-500 cursor-pointer'>Reset Password</span></p></div>
                    <div className='flex justify-center'>
                    <input type='submit' className="text-white bg-blue-700 font-medium rounded-lg text-sm px-32 py-2.5 text-center mb-3" value="Login" />
                    </div>
                </form>
                <div className='flex items-center '>
                    <div className='border border-b-1  border-gray-200 mb-2 w-44 mx-auto mt-3'></div>
                    <span className='ml-2 mr-2 text-sm font-semibold'>OR</span>
                    <div className='border border-b-1  border-gray-200 mb-2 w-44 mx-auto mt-3'></div>
                </div>
                <br/>
                <button  className='flex items-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200'>
                    <img style={{ width: "25px", height: "25px" }} src={google} alt="" />
                    <span className=' pl-20'>Continue with Google</span>
                </button>
                <div className='text-sm text-center mb-10 mt-4'><p>Don't have an account? <span onClick={navigateToSignup} className='underline text-sky-500 cursor-pointer'>Create an account</span></p></div>
            </div>
        </div>
    );
};

export default Login;