import Button from '../components/button/button'
import '../styles/enroll.css'
import axios from 'axios';
import enrollHeroImg from '../assets/images/img13.png'
import ballImg from '../assets/images/img12.png'

import { useMutation } from 'react-query';

const postFormData = async (formData) => {
    try {
        const response = await axios.post('http://localhost:3000/api/user/register', formData);
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

export default function Enroll() {

    const mutation = useMutation(postFormData);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = {};

        formData.forEach((value, key) => {
            data[key] = value;
        });
        console.log(data);

        try {
            await mutation.mutateAsync(data);
            // Form submitted successfully
            console.log('Form submitted successfully!');
        } catch (error) {
            // Handle error
            console.error('Error submitting form:', error.message);
        }
    };


    return (
        <>
            <section className="hero-e">

                <div className="heroOverlay-e">
                    <div className="textContent-e">
                        <h1>Enroll in our <br />program today</h1>
                    </div>
                    <img src={enrollHeroImg} alt="" />
                </div>
            </section>
            <section className="joinus">
                <img src={ballImg} alt="" className="ballerEnroll" />
                <div className="Join-form">
                    <h3>
                        Join Us
                    </h3>

                    <form onSubmit={handleSubmit}>
                        <p className="topFormText">
                            Send us an email with everything you <br />
                            need to know and we will contact <br />
                            you as soon as possible.
                        </p>

                        <div className="divForm">
                            <div className="form-group">
                                <div className="inputWrap">
                                    <p>Player Name</p>
                                    <input placeholder='Player Name' type="text" name="name" id="" required />
                                </div>
                                <div className="inputWrap">
                                    <p>Player Surname</p>
                                    <input placeholder='Player Surname' type="text" name="surname" id="" required />
                                </div>
                                <div className="inputWrap">
                                    <p>Player nationality</p>
                                    <input placeholder='Player nationality' type="text" name="nationality" id="" required />
                                </div>
                                <div className="inputWrap">
                                    <p>State of residence</p>
                                    <input placeholder='State of residence' type="text" name="residence" id="" required />
                                </div>
                                <div className="inputWrap">
                                    <p>Player date of birth</p>
                                    <input placeholder='Player date of birth' type="date" name="dateOfBirth" id="" required />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="inputWrap">
                                    <p>Contact  Email</p>
                                    <input placeholder='Your Email' type="text" name="email" id="" required />
                                </div>
                                <div className="inputWrap">
                                    <p>Telephone</p>
                                    <input placeholder='Your Phone Number' type="tel" name="phoneNo" id="" required />
                                </div>
                                <div className="inputWrap">
                                    <p>How did you find us</p>
                                    <input placeholder='How did you find us' type="text" name="foundUs" id="" required />
                                </div>
                            </div>
                        </div>
                        <button type="submit" disabled={mutation.isLoading}>
                            {mutation.isLoading ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}