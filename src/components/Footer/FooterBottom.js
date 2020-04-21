import React, {Component} from "react";

import '../../styles/Footer.css';
import img from "../../img/arrow-top1.svg";


class FooterBottom extends Component {

    render() {
        return (
            <div className='flex row footer-bottom w100'>
                <div className='footer-bottom-text'>© Datawarehouse™, 2020. All rights reserved. Company Registration
                    Number: 21479524.
                </div>
                <div className='flex row footer-bottom-img center'>
                    <svg className='footer-bottom-img' width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle className='footer-bottom-circle' opacity="0.2" cx="30" cy="30" r="30" fill="#9C69E2"/>
                        <path d="M15 26C15 20.4772 19.4772 16 25 16H35C40.5228 16 45 20.4772 45 26V30C45 35.5228 40.5228 40 35 40H15V26Z" fill="#9C69E2"/>
                        <circle cx="24" cy="28" r="2" fill="white"/>
                        <circle cx="30" cy="28" r="2" fill="white"/>
                        <circle cx="36" cy="28" r="2" fill="white"/>
                        <path d="M25 39H15V41.4676C15 43.0222 16.6959 43.9824 18.029 43.1826L25 39Z" fill="#9C69E2"/>
                    </svg>

                </div>
            </div>
        );
    }
}

export default FooterBottom;