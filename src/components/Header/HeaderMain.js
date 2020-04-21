import React, {Component} from "react";

import '../../styles/Header.css';
import Img from '../../img/header-main.svg';

class HeaderMain extends Component {
    render() {
        return (
            <div className='flex row header-main w100 center'>
                <div className='flex column main-text'>
                    <div className='title'>Save your data storage here.</div>
                    <div className='main-description'>Data Warehouse is a data storage area that has been
                        tested for security, so you can store your data here safely but not be
                        afraid of being stolen by others.
                    </div>
                    <button className='flex header-button header-button-text'>Learn more</button>
                </div>
                <div className='header-img'><img className='header-img-pos' src={Img}/></div>
            </div>
        );
    }
}

export default HeaderMain;