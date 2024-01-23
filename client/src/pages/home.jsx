import Button from '../components/button/button'
import '../styles/home.css'
import {Link} from 'react-router-dom'

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
                </div>
            </section>

            <section className="mission">
                <div className="missionTextSection">
                    <p>Mission Statment</p>
                    <h2>Developing and scouting players for the world's top leagues and prestigious clubs.</h2>
                </div>
            </section>


            <section className="grow">
                <div className="growContent">
                    <div className="growTextContent">
                        <p>Start training with us  .  <span>Grow that potential </span></p>
                    </div>
                    <div className="growCards">

                        <div className="card">
                            <div className="dot"></div>

                            <h1 className="growText">
                                Learn
                            </h1>
                            <img src="" alt="" />
                            <div className="boxGrowText">
                                <div className="imgboxGrow"></div>
                                <p>Learn techniques</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="dot"></div>

                            <h1 className="growText">
                                Grow
                            </h1>
                            <img src="" alt="" />
                            <div className="boxGrowText">
                                <div className="imgboxGrow"></div>
                                <p>Grow your skill</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="dot"></div>

                            <h1 className="growText">
                                & Win
                            </h1>
                            <img src="" alt="" />
                            <div className="boxGrowText">
                                <div className="imgboxGrow"></div>
                                <p>Become a greate <br /> Soccer player</p>
                            </div>
                        </div>

                    </div>
                    <div className="gowbaseImg">
                        <div className="baseImgBox-grow"></div>
                    </div>
                </div>
            </section>

            <section className="enroll">
                <div className="imgSection-enroll"></div>

                <div className="text-enroll">
                    <p className="t1">Enroll in our</p>
                    <h2 className='enrollHead'>Summer <br /> Soccer <br /> Camp</h2>
                    <hr />
                    <h2 className='enrollBoy'>For Boys & Girls</h2>
                    <p>(Ages 8 - 25)</p>

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
            </section>
        </>
    )
}
