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
                    </div>
                </section>


                <section className="about">
                    <div className="aboutWrap">
                    <h2>WHAT IS SPARVI ACADEMY?</h2>
                    <p>SPARVI's global initiative to support, promote and bolster SPARVI Academy football around the world.2                        A commitment to the present to build the football of the future</p>
                
                    </div>
                </section>
            </main>
        </>
    )
}