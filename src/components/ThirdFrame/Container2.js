import React, {Component} from "react";

import '../../styles/ThirdFrame.css';
import img2 from '../../img/third-img2.svg'
import imgVector2 from '../../img/third-img-vector2.svg'
import arrow from '../../img/arrow-top1.svg'

class Container2 extends Component {
    render() {
        return (
            <div className='flex row container'>

                <div className='third-frame-img-container center'>
                    <img className='third-frame-img-pos' src={img2}/>
                </div>
                <div className='third-frame-container container-color-2 flex row'>
                    <div className='third-frame-img-container'>
                        <img className='third-frame-img-pos-2' src={imgVector2}/>
                    </div>
                    <div className='flex column third-frame-container-text'>
                        <div className='third-frame-container-title '>24 Hours Access</div>
                        <div className='third-frame-container-description '>Access is given 24 hours a full morning to
                            night and meet again in the morning, giving you comfort when you need data when urgent.
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

export default Container2;