import React, { Component } from "react";

import '../styles/SecondFrame.css';
import img from '../img/second-frame-img.svg';
class SecondFrame extends Component {
    render() {
        return (
            <div className='flex row second-frame center'>
                <div className='second-frame-img-container center'>
                    <img className='second-frame-img-size w100' src={img}/>
                </div>
                <div className='flex column center second-frame-text'>
                    <div className='second-frame-title'>We are a high-level data storage bank</div>
                    <div className='second-frame-description'>The place to store various data
                        that you can access at any time through the internet and where you can
                        carry it. This very flexible storage area has a high level of security.
                        To enter into your own data you must enter the password that you created
                        when you registered in this Data Warehouse.</div>
                </div>

            </div>
        );
    }
}

export default SecondFrame;