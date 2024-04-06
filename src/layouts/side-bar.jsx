import React from "react";
import Menu from "../components/menu";

import Contacts from '../assets/icons/Contacts.svg';
import Email from '../assets/icons/Email.svg';
import LinkedIn from '../assets/icons/LinkedIn.svg';
import About from '../assets/icons/Info.svg';
import Home from '../assets/icons/Home.svg';
import Category from '../assets/icons/Category.svg';
import Briefcase from '../assets/icons/Briefcase.svg';
import Logo from "../assets/images/logo.png";

export default function SideBar(){
    const categories = [
        { label: 'For Students', link: '/offers?type=students' },
        { label: 'For Business', link: '/offers?type=business' },
        { label: 'Custom', link: '/offers?type=custom' },
    ];
    const portfolio = [
        { label: 'Web Projects', link: '/web-projects' },
        { label: 'Game Projects', link: '/game-projects' },
        { label: 'Other Projects', link: '/other-projects' },
    ];

    return(
        <section className="side-bar">
            <header>
                <a href="/web-portfolio"><img src={Logo} alt="logo" /></a>
            </header>
            <div className="side-bar-menu">
                <Menu parent="Home" parentLink="/web-portfolio" parentIcon={Home}/>
                <Menu parent="Offers" child={categories} parentIcon={Category}/>
                <Menu parent="Portfolio" child={portfolio} parentIcon={Briefcase}/>
            </div>
            <footer>
                <div className="social-links">
                    <a href=""><img src={LinkedIn} alt="linkedin-icon" />LinkedIn</a>
                    <a href=""><img src={Contacts} alt="phone-icon" />Phone</a>
                    <a href=""><img src={Email} alt="email-icon" />Email</a>
                </div>
                <a href="/web-portfolio/faq"><img src={About} alt="about-icon" />FAQ</a>
                <a href="/web-portfolio/about"><img src={About} alt="about-icon" />About Me</a>
                <a href="/web-portfolio/policy"><img src={About} alt="about-icon" />Policy</a>
            </footer>
        </section>
    )
}