import '../styles/about.css'
import enrollHeroImg from '../assets/images/img13.png'

export default function About() {
    return (
        <>
            <main>
                <section className="hero-a">

                    <div className="heroOverlay-a">
                        <div className="textContent-a">
                            <h1>ABOUT SPARVI ACADEMY:</h1>
                            <h3>A COMMITMENT TO GRASSROOTS FOOTBALL</h3>
                        </div>
                        <img src={enrollHeroImg} alt="" />
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
            </main>
        </>
    )
}