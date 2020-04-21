import React, { Component } from "react";

import '../../styles/Header.css';
import img from '../../img/arrow-top1.svg'
class HeaderTop extends Component {
    render() {
        return (
            <div className='flex row header-top center'>
                <div className='flex row center'>
                    <div className='circle-top'/>
                    <div className='ellipse-top'/>
                </div>
                <div className='flex row center top-header-text-container'>
                    <div className='top-header-text'>About</div>
                    <div className='top-header-text'>Help</div>
                    <div className='top-header-text'>Features</div>
                    <div className='top-header-text'>Signup</div>
                </div>
                <button className='flex row top-header-btn center'>
                    <div className='top-header-text-right center'>Request Demo</div>
                    <div className='flex center header-img-top-right'>
                        <img className='header-img-top center' src={img}/>
                    </div>
                </button>
            </div>
        );
    }
}

export default HeaderTop;