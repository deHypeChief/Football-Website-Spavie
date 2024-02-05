import { BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { ImFacebook } from "react-icons/im";

import tourVid from '../../assets/tourVideo.mp4'
import './style.css'
import logo from "../../assets/icons/Black Logo Png.png"
export default function Footer() {
    return (
        <>
            <section className="footerInfo">
                <div className="footerMap">
                    <h2>
                        Our Facility
                    </h2>
                    <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9848.686686784577!2d3.3222053080679355!3d6.500244290061358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8ebcf1bdec27%3A0x81c7a8d542513587!2sLawanson%2C%20Lagos!5e0!3m2!1sen!2sng!4v1707041393325!5m2!1sen!2sng" 
                    style={{
                        border: 0
                    }} 
                    allowFullScreen="" loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="footerLine"></div>
                </div>

                <div className="footerTour">
                    <h2>
                        Take A Tour
                    </h2>
                    <div className="map">
                        <video src={tourVid} controls></video>
                    </div>
                </div>
            </section>
            <section className="footerTop" id="contact">
                <div className="footerBox">
                    <div className="imgfooterBox">
                        <img src={logo} alt="" />
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