import React, {Component} from "react";
import Header from "./Header/Header";

import '../styles/App.css';

import SecondFrame from "./SecondFrame";
import ThirdFrame from "./ThirdFrame/ThirdFrame";
import FourthFrame from "./FourthFrame/FourthFrame";
import Footer from "./Footer/Footer";

class App extends Component {
    render() {
        return (
            <div className='flex column w100'>
                <div className='flex column w100 main-container center'>
                    <Header/>
                    <SecondFrame/>
                    <ThirdFrame/>
                    <FourthFrame/>
                </div>
                <div className='w100 line'/>
                <div className='flex column w100 main-container center'>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;