import React, {Component} from "react";

import '../../styles/FourthFrame.css';
import img1 from '../../img/bdb57d02f4.jpg';
import img2 from '../../img/e29311e74d29e2ed2a822d62c737878e.jpg';
import img3 from '../../img/depositphotos_3814372-stock-photo-two-asian-young-executives.jpg';
import img4 from '../../img/e9d789fd2b2d2713aae3aa78b8c39c5d.jpg';
import Circle from "./Circle";
import Container from "./Container";

let mass = [
    {
        img: img1,
        name: 'John Fang',
        underName: 'wordfaang.com',
        text: 'Suspendisse ultrices at diam lectus\n' +
            'nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar\n' +
            'aenean nam laoreet nulla.',
        index: 1
    },
    {
        img: img2,
        name: 'Jeny Doe',
        underName: 'UX Engineer',
        text: 'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor',
        index: 2
    },
    {
        img: img3,
        name: 'William',
        underName: 'Web Designer',
        text: 'Suspendisse ultrices at diam lectus\n' +
            'nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar\n' +
            'aenean nam laoreet nulla.',
        index: 3
    },
    {
        img: img4,
        name: 'Jill',
        underName: 'wordfaang.com',
        text: 'Suspendisse ultrices at diam lectus\n' +
            'nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar\n' +
            'aenean nam laoreet nulla.',
        index: 4
    },
];

class FourthFrame extends Component {
    state = {
        containerNumber: 1,
        mass: mass,
    };

    changeContainer = (num) => {
        this.setState({
            containerNumber: num,
        })
    };

    render() {
        return (
            <div className='flex column fourth-frame center'>
                <div className='fourth-frame-title'>Testimonials</div>
                <div className='flex row start '>
                    {this.state.mass.map((item) =>
                        <Container
                            key={item.index}
                            item={item}
                            containerNumber={this.state.containerNumber}
                            changeContainer={this.changeContainer}
                    />)}

                </div>

                <div className='flex row circle-container'>
                    {this.state.mass.map((item) =>
                        <Circle key={item.index}
                                number={item.index}
                                containerNumber={this.state.containerNumber}
                                changeContainer={this.changeContainer}/>
                    )}
                </div>

            </div>
        );
    }
}

export default FourthFrame;