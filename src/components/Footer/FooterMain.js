import React, {Component} from "react";

import '../../styles/Footer.css';


class FooterMain extends Component {

    render() {
        return (
            <div className='flex row footer-main w100 footer-change-column'>
                <div className='flex column footer-change-row'>
                    <div className='flex row'>
                        <div className='flex row center'>
                            <div className='circle-top'/>
                            <div className='ellipse-top'/>
                        </div>
                        <div className='footer-main-title1'>DataWarehouse</div>
                    </div>
                    <div className='flex column'>
                        <div className='footer-main-text left-text start'>
                            Warehouse Society, 234 Bahagia Ave Street PRBW 29281
                        </div>
                        <div className='footer-main-text left-text-under'>
                            info@warehouse.project 1-232-3434 (Main)
                        </div>
                    </div>
                </div>
                <div className='flex column footer-main-block footer-change-row'>
                    <div className='footer-main-text footer-title'>About</div>
                    <a href='#' className='footer-main-text footer-btn'>Profile</a>
                    <a href='#' className='footer-main-text footer-btn'>Features</a>
                    <a href='#' className='footer-main-text footer-btn'>Careers</a>
                    <a href='#' className='footer-main-text footer-btn'>DW News</a>
                </div>
                <div className='flex column footer-main-block footer-change-row'>
                    <div className='footer-main-text footer-title'>Help</div>
                    <a href='#' className='footer-main-text footer-btn'>Support</a>
                    <a href='#' className='footer-main-text footer-btn'>Sing up</a>
                    <a href='#' className='footer-main-text footer-btn'>Guide</a>
                    <a href='#' className='footer-main-text footer-btn'>Reports</a>
                    <a href='#' className='footer-main-text footer-btn'>Q&A</a>
                </div>
                <div className='flex column footer-change-row'>
                    <div className='footer-main-text footer-title center'>Social Media</div>
                    <div className='flex row'>
                        <div className='flex row footer-main-img-container'>
                            <svg className='footer-main-img' width="50" height="50" viewBox="0 0 50 50" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle className='footer-main-img-color' opacity="0.1" cx="25" cy="25" r="25"
                                        fill="#212353"/>
                                <path
                                    d="M26.37 35.4882V25.2429H29.2041L29.5796 21.7123H26.37L26.3749 19.9452C26.3749 19.0244 26.4625 18.531 27.7879 18.531H29.5596V15H26.7251C23.3205 15 22.1222 16.7127 22.1222 19.593V21.7127H20V25.2433H22.1222V35.4882H26.37Z"
                                    fill="white"/>
                            </svg>
                            <svg className='footer-main-img' width="50" height="50" viewBox="0 0 50 50" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle className='footer-main-img-color' opacity="0.1" cx="25" cy="25" r="25"
                                        fill="#212353"/>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M24.9095 21.6592L24.8699 21.0076C24.7511 19.3187 25.7938 17.7761 27.4438 17.1777C28.051 16.9649 29.0805 16.9383 29.7537 17.1245C30.0176 17.2043 30.5193 17.4702 30.8756 17.7096L31.5224 18.1485L32.2351 17.9224C32.6311 17.8027 33.1591 17.6032 33.3966 17.4702C33.621 17.3506 33.819 17.284 33.819 17.324C33.819 17.55 33.3307 18.3213 32.9215 18.7468C32.3671 19.3453 32.5255 19.3985 33.6475 18.9995C34.3206 18.7734 34.3338 18.7734 34.2018 19.0261C34.1226 19.1591 33.7134 19.6245 33.2778 20.0501C32.5387 20.7815 32.4991 20.8613 32.4991 21.473C32.4991 22.4172 32.0503 24.3853 31.6015 25.4624C30.77 27.4838 28.9881 29.5715 27.2062 30.6221C24.6984 32.0982 21.3589 32.4705 18.5475 31.6062C17.6103 31.3136 16 30.5689 16 30.436C16 30.396 16.4883 30.3428 17.0824 30.3296C18.3231 30.303 19.5638 29.9572 20.6197 29.3455L21.3326 28.92L20.5141 28.6407C19.3526 28.2417 18.3099 27.3242 18.0459 26.4598C17.9667 26.1805 17.9931 26.1672 18.7322 26.1672L19.4978 26.1539L18.851 25.8481C18.0855 25.4624 17.3859 24.8108 17.0427 24.1459C16.7919 23.6672 16.4752 22.457 16.5676 22.364C16.5939 22.3241 16.8712 22.4038 17.188 22.5102C18.0987 22.8427 18.2175 22.7629 17.6895 22.2044C16.6995 21.1937 16.396 19.691 16.8712 18.2681L17.0956 17.6298L17.9667 18.4942C19.7486 20.2362 21.8473 21.2735 24.2496 21.5794L24.9095 21.6592Z"
                                      fill="white"/>
                            </svg>
                            <svg className='footer-main-img' width="50" height="50" viewBox="0 0 50 50" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle className='footer-main-img-color' opacity="0.1" cx="25" cy="25" r="25"
                                        fill="#212353"/>
                                <path
                                    d="M25.0018 20.8978C22.7316 20.8978 20.9005 22.7293 20.9005 25C20.9005 27.2707 22.7316 29.1022 25.0018 29.1022C27.2719 29.1022 29.1031 27.2707 29.1031 25C29.1031 22.7293 27.2719 20.8978 25.0018 20.8978ZM25.0018 27.667C23.5347 27.667 22.3354 26.4709 22.3354 25C22.3354 23.5291 23.5312 22.333 25.0018 22.333C26.4724 22.333 27.6682 23.5291 27.6682 25C27.6682 26.4709 26.4688 27.667 25.0018 27.667V27.667ZM30.2274 20.73C30.2274 21.262 29.7991 21.6868 29.2708 21.6868C28.739 21.6868 28.3142 21.2584 28.3142 20.73C28.3142 20.2016 28.7426 19.7732 29.2708 19.7732C29.7991 19.7732 30.2274 20.2016 30.2274 20.73ZM32.9438 21.7011C32.8831 20.4194 32.5904 19.2841 31.6516 18.3487C30.7165 17.4133 29.5814 17.1205 28.2999 17.0562C26.9793 16.9813 23.0207 16.9813 21.7001 17.0562C20.4222 17.1169 19.2871 17.4097 18.3484 18.3451C17.4096 19.2805 17.1205 20.4158 17.0562 21.6975C16.9813 23.0185 16.9813 26.9779 17.0562 28.2989C17.1169 29.5806 17.4096 30.7159 18.3484 31.6513C19.2871 32.5867 20.4186 32.8795 21.7001 32.9438C23.0207 33.0187 26.9793 33.0187 28.2999 32.9438C29.5814 32.8831 30.7165 32.5903 31.6516 31.6513C32.5868 30.7159 32.8795 29.5806 32.9438 28.2989C33.0187 26.9779 33.0187 23.0221 32.9438 21.7011V21.7011ZM31.2376 29.7163C30.9592 30.416 30.4202 30.9551 29.717 31.2372C28.664 31.6549 26.1654 31.5585 25.0018 31.5585C23.8381 31.5585 21.336 31.6513 20.2866 31.2372C19.5869 30.9587 19.048 30.4196 18.766 29.7163C18.3484 28.6631 18.4447 26.1639 18.4447 25C18.4447 23.8361 18.3519 21.3334 18.766 20.2837C19.0444 19.584 19.5834 19.0449 20.2866 18.7628C21.3395 18.3451 23.8381 18.4415 25.0018 18.4415C26.1654 18.4415 28.6676 18.3487 29.717 18.7628C30.4166 19.0413 30.9556 19.5804 31.2376 20.2837C31.6552 21.3369 31.5588 23.8361 31.5588 25C31.5588 26.1639 31.6552 28.6666 31.2376 29.7163Z"
                                    fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterMain;