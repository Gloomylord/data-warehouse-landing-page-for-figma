import React, { Component } from "react";

import '../../styles/Header.css';
import HeaderTop from "./HeaderTop";
import HeaderMain from "./HeaderMain";

class Header extends Component {
    render() {
        return (
            <>
                <HeaderTop/>
                <HeaderMain/>
            </>
        );
    }
}

export default Header;