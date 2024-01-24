import './style.css'
import Button from '../button/button.jsx'
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/White Logo Png.png'

export default function Navbar() {
    return (
        <nav>
            <div className="navWrap">
                <Link to={'/'}>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                </Link>
                <div className="info">
                    <h3>Sparvi Football Academy</h3>
                    <div className="other">
                        <Link to={'/enroll'}>
                            <Button>Enroll</Button>
                        </Link>
                        <a href="#contact">
                            <Button type={'bttn-secondary'}>Contact Us</Button>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}