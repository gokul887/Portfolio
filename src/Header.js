import React from 'react'
import {Link} from 'react-scroll'
class Header extends React.Component{
    render() {
        return (
        <header className="header">
        <nav className='nav'>
            <div className='navbar'>
                <a href="/">Home</a>
                <a href="/"><Link to="about" smooth={true}>About</Link></a>
                <a href="/"><Link to="skills" smooth={true}>Software</Link></a>
                <a href="/"><Link to="projects" smooth={true}>Projects</Link></a>
                <a href="/"><Link to="contact" smooth={true}>Contact</Link></a>
            </div>
        </nav>
        <div className="intro">
            <h1>Hi <br />I am Gokul Sivadasan</h1>
            <h3>Software Engineering Student</h3>
        </div>
        </header>
    );
    }
}
 
export default Header;