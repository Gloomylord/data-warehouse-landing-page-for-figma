import React, {Component} from "react";
import cn from 'classnames'
import '../../styles/FourthFrame.css';

class Container extends Component {
    state = {
        containerNumber: this.props.item.index,
    };

    changeContainer = () => {
        if(Math.abs(this.props.containerNumber-this.state.containerNumber) <= 1) {
            this.props.changeContainer(this.state.containerNumber);
        }
    };

    render() {
        let {name, img, underName, text, index} = this.props.item;
        let num = this.state.containerNumber;
        let chose = num === index;
        return (
            <div ref={this.containerRef} className={cn('flex row fourth-frame-container', {
                'container-chose': chose,
                'num1': this.props.containerNumber==1 && num == 1,
                'num2': this.props.containerNumber==2 && num == 1,
                'num3': this.props.containerNumber==3 && num == 1,
                'num4': this.props.containerNumber==4 && num == 1,
            })}
            style={{
                opacity: Math.abs(this.props.containerNumber - index) > 1 && 0,
                cursor: Math.abs(this.props.containerNumber - index) <= 1 && 'pointer'
            }}
            onClick={this.changeContainer}
            >
                <div className='fourth-frame-img-container'>
                    <img className={'fourth-frame-img'+ index} src={img}/>
                </div>
                <div className='flex column'>
                    <div className='fourth-frame-container-title'>
                        {name}
                    </div>
                    <div className='fourth-frame-container-title-under'>
                        {underName}
                    </div>
                    <div className='fourth-frame-container-description'>
                        {text}
                    </div>
                </div>
            </div>
        );
    }
}

export default Container;