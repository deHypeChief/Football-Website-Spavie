import Button from '../components/button/button'
import '../styles/enroll.css'
import axios from 'axios';
import enrollHeroImg from '../assets/images/img13.png'
import ballImg from '../assets/images/img12.png'

import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
// import { Notify_Success } from '../components/Pop-notify/notify';

const postFormData = async (formData) => {
    try {
        const response = await axios.post('https://spavie-api.vercel.app/api/user/register', formData, {
            withCredentials: true,  // Include credentials
            headers: {
                'Content-Type': 'application/json',  // Set your content type and other headers
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

export default function Enroll() {

    const mutation = useMutation(postFormData);
    const NavTo = useNavigate()

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
            alert("Your account has been created")
            NavTo("/")

        } catch (error) {
            // Handle error
            console.error('Error submitting form:', error.message);
            alert("Their was an error creating your account")

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
                                    <p>Legal Name</p>
                                    <input placeholder='Fullname' type="text" name="name" id="" required />
                                </div>
                                <div className="inputWrap">
                                    <p>Email</p>
                                    <input placeholder='Email' type="text" name="email" id="" required />
                                </div>
                                <div className="inputWrap">
                                    <p>Phone Number</p>
                                    <input placeholder='Phone Number' type="text" name="phoneNumber" id="" required />
                                </div>
                            </div>


                            <div className="form-group">
                                <div className="inputWrap">
                                    <p>Home Address</p>
                                    <input placeholder='Home Address' type="text" name="homeAddress" id="" required />
                                </div>
                                <div className="inputWrap">
                                    <p>State</p>
                                    <input placeholder='State' type="text" name="state" id="" required />
                                </div>
                                <div className="inputWrap">
                                    <p>Nationality</p>
                                    <input placeholder='Nationality' type="text" name="nationality" id="" required />
                                </div>
                                <div className="inputWrap">
                                    <p>Birth Date</p>
                                    <input placeholder='Birth Date' type="text" name="dateOfBirth" id="" required />
                                </div>
                                <div className="inputWrap">
                                    <p>Langues</p>
                                    <input placeholder='Langues' type="text" name="langues" id="" required />
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