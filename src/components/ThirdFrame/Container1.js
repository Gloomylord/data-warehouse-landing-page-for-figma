import React, {Component} from "react";

import '../../styles/ThirdFrame.css';
import img1 from '../../img/third-img1.svg'
import imgVector1 from '../../img/third-img-vector1.svg'
import arrow from '../../img/arrow-top1.svg'

class Container1 extends Component {
    render() {
        return (
            <div className='flex row container'>

                <div className='third-frame-img-container center'>
                    <img className='third-frame-img-pos' src={img1}/>
                </div>
                <div className='third-frame-container container-color-1 flex row'>
                    <div className='third-frame-img-container'>
                        <img className='third-frame-img-pos-1' src={imgVector1}/>
                    </div>
                    <div className='flex column third-frame-container-text'>
                        <div className='third-frame-container-title '>Search Data</div>
                        <div className='third-frame-container-description '>Don’t worry if your data is very
                            large,
                            the Data Warehoue provides a search engine, which is useful for making it easier
                            to find data effectively saving time.
                        </div>
                        <div className=' flex row'>
                            <div className='center third-frame-container-btn'>Learn more</div>
                            <img className='center' src={arrow}/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Container1;