import Button from '../components/button/button'
import '../styles/enroll.css'
export default function Enroll() {
    return (
        <>
            <section className="hero-e">

                <div className="heroOverlay-e">
                    <div className="textContent-e">
                        <h1>Enroll in our <br />program today</h1>
                    </div>
                </div>
            </section>
            <section className="joinus">
                <h3>
                    Join Us
                </h3>

                <form>
                    <p className="topFormText">
                    Send us an email with everything you <br />
                     need to know and we will contact <br />
                      you as soon as possible.
                    </p>

                    <div className="divForm">
                        <div className="form-group">
                            <div className="inputWrap">
                                <p>Player Name</p>
                                <input placeholder='Player Name' type="text" name="" id="" />
                            </div>
                            <div className="inputWrap">
                                <p>Player Surname</p>
                                <input placeholder='Player Surname' type="text" name="" id="" />
                            </div>
                            <div className="inputWrap">
                                <p>Player nationality</p>
                                <input placeholder='Player nationality' type="text" name="" id="" />
                            </div>
                            <div className="inputWrap">
                                <p>State of residence</p>
                                <input placeholder='State of residence' type="text" name="" id="" />
                            </div>
                            <div className="inputWrap">
                                <p>Player date of birth</p>
                                <input placeholder='Player date of birth' type="text" name="" id="" />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="inputWrap">
                                <p>Name</p>
                                <input placeholder='Name' type="text" name="" id="" />
                            </div>
                            <div className="inputWrap">
                                <p>Contact  Email</p>
                                <input placeholder='Your Email' type="text" name="" id="" />
                            </div>
                            <div className="inputWrap">
                                <p>Telephone</p>
                                <input placeholder='Your Phon Number' type="tel" name="" id="" />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="inputWrap">
                                <p>How did you find us</p>
                                <select name="" id="">
                                    <option value="">
                                        From a friend
                                    </option>
                                    <option value="">
                                        From an Ad
                                    </option>
                                    <option value="">
                                        From a Show on tv
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <Button>Submit</Button>
                </form>
            </section>
        </>
    )
}