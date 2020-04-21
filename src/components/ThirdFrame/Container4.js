import React, {Component} from "react";

import '../../styles/ThirdFrame.css';
import img4 from '../../img/third-img4.svg'
import imgVector4 from '../../img/third-img-vector4.svg'
import arrow from '../../img/arrow-top1.svg'

class Container4 extends Component {
    render() {
        return (
            <div className='flex row container'>

                <div className='third-frame-img-container center'>
                    <img className='third-frame-img-pos' src={img4}/>
                </div>
                <div className='third-frame-container container-color-4 flex row'>
                    <div className='third-frame-img-container'>
                        <img className='third-frame-img-pos-4' src={imgVector4}/>
                    </div>
                    <div className='flex column third-frame-container-text'>
                        <div className='third-frame-container-title '>Security Code</div>
                        <div className='third-frame-container-description '>Data Security is one of our best facilities.
                            Allows for your files to be safer. The file can be secured with a code or password that you
                            created, so only you can open the file.
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

export default Container4;