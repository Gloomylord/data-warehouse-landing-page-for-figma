import React, {Component} from "react";

import '../../styles/Footer.css';
import img from "../../img/arrow-top1.svg";


class FooterTop extends Component {

    render() {
        return (
            <div className='flex row footer-top w100 footer-change-column'>
                <div className='flex column'>
                    <div className='footer-top-title '>Try for free!</div>
                    <div className='footer-top-text'>Get limited 1 week free try our features!</div>
                </div>
                <div className='flex row buttons footer-change-column'>
                    <button className='flex footer-button header-button-text center'>Learn more</button>
                    <button className='flex row top-header-btn center'>
                        <div className='top-header-text-right center'>Request Demo</div>
                        <div className=' flex center header-img-top-right'>
                            <img className='header-img-top center' src={img}/>
                        </div>
                    </button>
                </div>
            </div>
        );
    }
}

export default FooterTop;