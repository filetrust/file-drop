import React from 'react'
import logo from '../../logo.svg';

export default function Header({ toggleMenu, toggleModal } = { }) {
    return (
        <div className="app-footer">
            <div className="app-footer-inner">
                <section className="app-footer-left">
                    <div className="logo"><a href="https://glasswallsolutions.com/" target="blank" ><img src={logo} alt="Logo" height="100" /></a></div>
                    <span className="copyright">© Copyright 2020 - Glasswall Solutions Ltd. All Rights Reserved</span>
                    <div className="social-menu">
                        <a href="https://twitter.com/GlasswallGlobal" target="_blank" rel="noopener noreferrer">
                            <div className="social-icon twitter"></div>
                        </a>
                        <a href="https://www.linkedin.com/company/glasswall-solutions-limited/" target="_blank" rel="noopener noreferrer">
                            <div className="social-icon linkedin"></div>
                        </a>
                        <a href="https://medium.com/glasswall-engineering" target="_blank" rel="noopener noreferrer">
                            <div className="social-icon medium"></div>
                        </a>
                        <a href="https://www.youtube.com/channel/UCfBGg3aM-LqawBCmbToVuCQ" target="_blank" rel="noopener noreferrer">
                            <div className="social-icon youtube"></div>
                        </a>
                    </div>
                </section>
                <div className="app-footer-menu">
                    <div className="app-footer-menu-title">
                        <a href="https://glasswallsolutions.com/technology/">Technology</a>
                    </div>
                    <ul>
                        <li><a href="https://glasswallsolutions.com/technology/">d-FIRST</a></li>
                    </ul>
                </div>
                <div className="app-footer-menu">
                    <div className="app-footer-menu-title">
                        <a href="https://glasswallsolutions.com/products/">Products</a>
                    </div>
                    <ul>
                        <li><a href="https://glasswallsolutions.com/products/#sdk">SDK</a></li>
                        <li><a href="https://glasswallsolutions.com/products/#email">Email</a></li>
                        <li><a href="https://glasswallsolutions.com/products/#cloud">Cloud</a></li>
                        <li><a href="https://glasswallsolutions.com/products/#appliances">Appliances</a></li>
                        <li><a href="https://glasswallsolutions.com/pricing">Pricing</a></li>
                    </ul>
                </div>
                <div className="app-footer-menu">
                    <div className="app-footer-menu-title">
                        <a href="https://glasswallsolutions.com/resources/">Resources</a>
                    </div>
                    <ul>
                        <li><a href="https://glasswallsolutions.com/ceo-blog/">CEO BLog</a></li>
                        <li><a href="https://glasswallsolutions.com/customer-success-stories/">Success Stories</a></li>
                        <li><a href="https://glasswallsolutions.com/threat-intelligence/">Threat Intelligence</a></li>
                        <li><a href="https://medium.com/glasswall-engineering">Tech Blog</a></li>
                    </ul>
                </div>
                <div className="app-footer-menu">
                    <div className="app-footer-menu-title">
                        <a href="https://glasswallsolutions.com/company/">About Us</a>
                    </div>
                    <ul>
                        <li><a href="https://glasswallsolutions.com/company/">Company</a></li>
                        <li><a href="https://glasswallsolutions.com/partners/">Partners</a></li>
                        <li><a href="https://glasswallsolutions.com/contact/">Contact</a></li>
                        <li><a href="https://support.glasswallsolutions.com/support/login">Support</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
