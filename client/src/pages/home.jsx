import Button from '../components/button/button'
import img1 from '../assets/images/img3.png'
import img2 from '../assets/images/img5.png'
import img3 from '../assets/images/img4.png'


import ico1 from '../assets/images/img9.png'
import ico2 from '../assets/images/img11.png'
import ico3 from '../assets/images/img10.png'
import enrollImg from '../assets/images/Group 13441.png'
import heroImg from '../assets/images/img1.png'
import '../styles/home.css'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <section className="hero">

                <div className="heroOverlay">
                    <div className="textContent">
                        <p>Enroll in our</p>
                        <h1>Summer <br /> Soccer Camp</h1>
                        <Link to={'/enroll'}><Button type={'bttn-alt'}>Enroll today!</Button></Link>
                    </div>
                    
                    <img src={heroImg} alt="" />
                    <div className="spaTop">
                        <h1 className="spText">Sparvi</h1>
                        <h1 className="spText">Sparvi</h1>
                    </div>
                </div>
            </section>

            <section className="mission">
                <div className="missionTextSection">
                    <p className='green-span'>Mission Statment</p>
                    <h2>Developing and scouting players for the world's top leagues and prestigious clubs.</h2>
                </div>
                <div className="missImg"></div>
            </section>

            <section className="grow">
                <div className="growContent">
                    <div className="growTextContent">
                        <p>Start training with us  . <span className='green-span'>Grow that potential </span></p>
                    </div>

            <div className="divMLine"></div>


                    <div className="growCards">

                        <div className="m-card">
                            <div className="dot"></div>

                            <h1 className="growText">
                                Learn
                            </h1>
                            <div className="boxGrowText">
                                <div className="imgboxGrow boxGrow">
                                    <img src={img1} alt="" />
                                </div>
                                <div className="textGrowBox">
                                    <div className="growIG">
                                        <img src={ico1} alt="" />
                                    </div>
                                    <p>Learn techniques</p>
                                </div>
                            </div>
                        </div>
                        <div className="m-card">
                            <div className="dot"></div>

                            <h1 className="growText mi">
                                Grow
                            </h1>
                            <div className="boxGrowText">
                                <div className="imgboxGrow">
                                    <img src={img2} alt="" />
                                </div>
                                <div className="textGrowBox">
                                    <div className="growIG">
                                        <img src={ico2} alt="" />
                                    </div>
                                    <p>Grow your skill</p>
                                </div>
                            </div>
                        </div>
                        <div className="m-card">
                            <div className="dot grn"></div>

                            <h1 className="growText dotAchive">
                                & Win
                            </h1>
                            <div className="boxGrowText">
                                <div className="imgboxGrow">
                                    <img src={img3} alt="" />
                                </div>
                                <div className="textGrowBox">
                                    <div className="growIG">
                                        <img src={ico3} alt="" />
                                    </div>
                                    <p>Become a great <br /> Soccer player</p>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="gowbaseImg">
                        <div className="baseImgBox-grow"></div>
                    </div>
                </div>
            </section>

            <section className="enroll">
                <div className="enrollOverlay">
                    <div className="imgSection-enroll">
                        <img src={enrollImg} alt="" />
                    </div>

                    <div className="text-enroll">
                        <p className="t1">Enroll in our</p>
                        <h2 className='enrollHead'>Summer <br /> Soccer <br /> Camp</h2>
                        <hr />
                        <h2 className='enrollBoy'>For Boys & Girls</h2>
                        <p className='t2'>(Ages 8 - 25)</p>

                        <div className="enrollButtom">
                            <p className='enrollDate'>17 -26 <br />
                                MAY 2024</p>
                            <Link to={'/enroll'}><Button type={'bttn-alt'}>Enroll today!</Button></Link>
                            <p className='erollReq'>
                                Some documents will be <br />
                                requested from the candidate in <br />
                                order to move forward with the <br />
                                Admission process:
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="infoSec">
                <div className="ourTeam">
                    <h2>Teams</h2>
                    <div className="cardWrap">
                        <div className="card">
                            <div className="cardImg"></div>
                            <div className="boxLine"></div>
                            <p className="cardBoldB">Card Name</p>
                            <p className="cardBold">Team Role</p>
                        </div>
                        <div className="card">
                            <div className="cardImg"></div>
                            <div className="boxLine"></div>
                            <p className="cardBoldB">Card Name</p>
                            <p className="cardBold">Team Role</p>
                        </div>
                        <div className="card">
                            <div className="cardImg"></div>
                            <div className="boxLine"></div>
                            <p className="cardBoldB">Card Name</p>
                            <p className="cardBold">Team Role</p>
                        </div>
                        <div className="card">
                            <div className="cardImg"></div>
                            <div className="boxLine"></div>
                            <p className="cardBoldB">Card Name</p>
                            <p className="cardBold">Team Role</p>
                        </div>
                    </div>
                </div>
                <div className="awards">
                    <div className="awBg">
                        <div className="awardsWrap">
                            <div className="awTop">
                                <h2>Player Rating</h2>

                                <div className="awLine">
                                </div>
                            </div>
                            <div className="awPhotos">
                                <div className="awCard">
                                    <div className="awCard-Img"></div>
                                    <p>CMAV Awwards for <br /> sports 2023</p>
                                </div>
                                <div className="awCard">
                                    <div className="awCard-Img"></div>
                                    <p>CMAV Awwards for <br /> sports 2023</p>
                                </div>
                                <div className="awCard">
                                    <div className="awCard-Img"></div>
                                    <p>CMAV Awwards for <br /> sports 2023</p>
                                </div>
                                <div className="awCard">
                                    <div className="awCard-Img"></div>
                                    <p>CMAV Awwards for <br /> sports 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
