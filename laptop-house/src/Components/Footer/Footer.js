import React from 'react';
import facebook from '../../Images/social/facebook.png';
import instagram from '../../Images/social/instagram.png';
import twitter from '../../Images/social/twitter.png'
import './Footer.css';

const Footer = () => {
    return (
        <footer className='mt-20'>
            <div className=''>
            <div className='h-full grid grid-cols-1 md:grid-cols-2 footer-bg'>
                <div className='text-white py-5 px-5'>
                    <h3 className='footer-heading'>Laptop House</h3>
                    <br/>
                    About us
                    <br/>
                    FAQs
                    <br/>
                    Terms & Conditions
                    <br/>
                    Delivery & Collections
                    <br/>
                    Privacy Policy
                </div>
                <div className='text-white-400 py-5 px-5 mt-2 mx-auto'>
                    <h3 className='footer-info'>Follow us on</h3>
                    <div>
                        <img src={facebook} alt=""></img>
                        <img className='' src={instagram} alt=""></img>
                        <img className='' src={twitter} alt=""></img>
                    </div>
                </div>
            </div>
        </div>
        </footer>
    );
};

export default Footer;