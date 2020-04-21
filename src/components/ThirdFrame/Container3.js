import React, {Component} from "react";

import '../../styles/ThirdFrame.css';
import img3 from '../../img/third-img3.svg'
import imgVector3 from '../../img/third-img-vector3.svg'
import arrow from '../../img/arrow-top1.svg'

class Container3 extends Component {
    render() {
        return (
            <div className='flex row container'>

                <div className='third-frame-img-container center'>
                    <img className='third-frame-img-pos' src={img3}/>
                </div>
                <div className='third-frame-container container-color-3 flex row'>
                    <div className='third-frame-img-container'>
                        <img className='third-frame-img-pos-3' src={imgVector3}/>
                    </div>
                    <div className='flex column third-frame-container-text'>
                        <div className='third-frame-container-title '>Print Out</div>
                        <div className='third-frame-container-description '>Print out service gives you convenience if
                            someday you need print data, just edit it all and just print it.
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

export default Container3;