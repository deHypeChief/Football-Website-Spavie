import { BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { ImFacebook } from "react-icons/im";
import './style.css'

export default function Footer() {
    return (
        <>
            <section className="footerTop" id="contact">
                <div className="footerBox">
                    <div className="imgfooterBox">
                        
                    </div>
                </div>
                <div className="footerBox">
                    <p className="fHeader">Our Address</p>
                    <p>@Teslim Balogun Stadium, <br />
                        Temporal Office: 3, Rafiu Ipaye Street. <br />
                        Off Agunlejika, ijeshatedo, Surulere, <br />
                        Lagos state.
                    </p>
                </div>
                <div className="footerBox">
                    <p className="fHeader">Contact Us</p>
                    <p>07020099185 <br />
                        08133561282
                    </p>
                </div>
                <div className="footerBox">
                <p className="fHeader">Email Us</p>
                    <p>
                    info@sparvifootballacademy.com
                    </p>
                </div>

            </section>
            <footer>
                <p>
                    Follow us on our social media pages for updates
                </p>
                <div className="footerSocials">
                    <ImFacebook />
                    <FiInstagram />
                    <FaTiktok />
                    <BsYoutube />
                </div>
            </footer>
        </>
    )
} 