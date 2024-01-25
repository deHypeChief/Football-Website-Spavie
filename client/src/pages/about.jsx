import '../styles/about.css'
import enrollHeroImg from '../assets/images/img13.png'

export default function About() {
    return (
        <>
            <main>
                <section className="hero-e">

                    <div className="heroOverlay-e">
                        <div className="textContent-e">
                            <h1>About Us</h1>
                        </div>
                        <img src={enrollHeroImg} alt="" />
                    </div>
                </section>
            </main>
        </>
    )
}