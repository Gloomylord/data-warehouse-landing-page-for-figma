import React, {Component} from "react";

import '../../styles/ThirdFrame.css';
import img1 from '../../img/third-img1.svg'
import imgVector1 from '../../img/third-img-vector1.svg'
import arrow from '../../img/arrow-top1.svg'
import Container1 from "./Container1";
import Container2 from "./Container2";
import Container3 from "./Container3";
import Container4 from "./Container4";

class ThirdFrame extends Component {
    render() {
        return (
            <div className='third-frame flex column w100 center'>
                <div className='flex column main-text center'>
                    <div className='third-frame-title center'>Features</div>
                    <div className='third-frame-text center'>Some of the features and advantages
                        that we provide for those of you who store data in this Data Warehouse.
                    </div>
                </div>

                <div className='third-frame-main flex row w100'>
                    <Container1/>
                    <Container2/>
                    <Container3/>
                    <Container4/>
                </div>


            </div>
        );
    }
}

export default ThirdFrame;