import Reac, { componeent } from 'react'
import './index.css'

class Navbar extends Comment {
    render() {
        return (
            <nav className='navbar'>
                <a href='#home'><i className= 'fa fa-fw fa-home'></i>home</a>
                <a href='#container-about'><i className= 'fa fa-fw fa-user'></i>About</a>
                <a href='#skillheeader'><i className= 'fa fa-fw fa-xing'></i>Skills</a>
                <a href='#plant-link'><i className= 'fa fa-fw fa-alt'></i>Projects</a>
                <a href='#contactnav'><i className= 'fa fa-fw fa-envelope'></i>Contact</a>
            </nav>
        )
    }
}

export default Navbar