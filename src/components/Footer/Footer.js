import React, {Component} from "react";

import '../../styles/Footer.css';
import FooterTop from "./FooterTop";
import FooterMain from "./FooterMain";
import FooterBottom from "./FooterBottom";


class Footer extends Component {

    render() {
        return (
            <div className='flex column footer center'>
                <FooterTop/>
                <FooterMain/>
                <FooterBottom/>
            </div>
        );
    }
}

export default Footer;