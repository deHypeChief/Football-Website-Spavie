import Button from '../components/button/button'
import '../styles/enroll.css'
import axios from 'axios';
import enrollHeroImg from '../assets/images/img13.png'
import ballImg from '../assets/images/img12.png'

import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import { Notify_Success } from '../components/Pop-notify/notify';

// https://spavie-api.vercel.app
const postFormData = async (formData) => {
        return await axios.post('https://spavie-api.vercel.app/api/user/register', formData, {
            withCredentials: true,  // Include credentials
            orign: window.location.origin,
            headers: {
                'Content-Type': 'application/json',  // Set your content type and other headers
            },
        });
};

export default function Enroll() {
    const NavTo = useNavigate()
    const [loading, setLoading] = useState()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        homeAddress: '',
        state: '',
        nationality: '',
        dateOfBirth: '',
        langues: '',
        medicalCondition: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const f_KEY = 'FLWPUBK_TEST-cebd8bc19f2ed4821dc70bd98e3499c1-X'
    const config = {
        public_key: f_KEY,
        tx_ref: Date.now(),
        amount: 20000,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
            email: formData.email,
            phone_number: formData.phoneNumber,
            name: formData.name,
        },
        customizations: {
            title: "Appication Fee",
            description: 'Sparvi Football Appication Fee',
        },
    }

    const handleFlutterPayment = useFlutterwave(config);

    const handleSubmit =  (e) => {
        e.preventDefault();        
        setLoading(true)
        alert("You will be redirected to the payment page")
        console.log(formData);

        handleFlutterPayment({
            callback: (response) => {
                console.log(response);
                if (response.status == "successful") {
                    alert("your payment was "+response.status +". Check your email for the recipt")    

                    postFormData(formData)
                    .then(()=>{
                        console.log('Form submitted successfully!');
                        alert("Your account has been created")
                        NavTo("/")
                    }).catch((error)=>{
                        console.error('Error submitting form:', error.message);
                        alert("Their was an error creating your account")
                    }).finally(()=>{
                        setLoading(false)
                    })
                } else {
                    alert("Error making payment")
                }
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: (e) => {
                console.log(e);
                setLoading(false)
            },
        });
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
                    <br />

                    <form onSubmit={handleSubmit}>
                        <p className="topFormText">
                            Kindly complete the required information, and we will respond to your application shortly. <br/>
                            You would need to pay a fee of 20000 Naira as an appication fee
                        </p>

                        <div className="divForm">
                            <div className="form-group">
                                <div className="inputWrap">
                                    <p>Legal Name</p>
                                    <input placeholder='Fullname' value={formData.name} type="text" onChange={handleChange} name="name" id="" required />
                                </div>
                                <div className="inputWrap">
                                    <p>Email</p>
                                    <input placeholder='Email' value={formData.email} type="text" onChange={handleChange} name="email" id="" required />
                                </div>
                                <div className="inputWrap">
                                    <p>Phone Number</p>
                                    <input placeholder='Phone Number' value={formData.phoneNumber} type="text" onChange={handleChange} name="phoneNumber" id="" required />
                                </div>
                            </div>


                            <div className="form-group">
                                <div className="inputWrap">
                                    <p>Home Address</p>
                                    <input placeholder='Home Address' value={formData.homeAddress} type="text" onChange={handleChange} name="homeAddress" id="" required />
                                </div>
                                <div className="inputWrap">
                                    <p>State</p>
                                    <input placeholder='State' value={formData.state} type="text" onChange={handleChange} name="state" id="" required />
                                </div>
                                <div className="inputWrap">
                                    <p>Nationality</p>
                                    <select
                                        value={formData.nationality}
                                        onChange={handleChange}
                                        name='nationality'
                                    >

                                        <option value="">Select Nationality</option>
                                        <option value="afghan">Afghan</option>
                                        <option value="albanian">Albanian</option>
                                        <option value="algerian">Algerian</option>
                                        <option value="american">American</option>
                                        <option value="andorran">Andorran</option>
                                        <option value="angolan">Angolan</option>
                                        <option value="argentinean">Argentinean</option>
                                        <option value="australian">Australian</option>
                                        <option value="austrian">Austrian</option>
                                        <option value="azerbaijani">Azerbaijani</option>
                                        <option value="bahamian">Bahamian</option>
                                        <option value="bahraini">Bahraini</option>
                                        <option value="bangladeshi">Bangladeshi</option>
                                        <option value="barbadian">Barbadian</option>
                                        <option value="belarusian">Belarusian</option>
                                        <option value="belgian">Belgian</option>
                                        <option value="belizean">Belizean</option>
                                        <option value="beninese">Beninese</option>
                                        <option value="bhutanese">Bhutanese</option>
                                        <option value="bolivian">Bolivian</option>
                                        <option value="bosnian">Bosnian</option>
                                        <option value="brazilian">Brazilian</option>
                                        <option value="british">British</option>
                                        <option value="bruneian">Bruneian</option>
                                        <option value="bulgarian">Bulgarian</option>
                                        <option value="burkinabe">Burkinabe</option>
                                        <option value="burundian">Burundian</option>
                                        <option value="cambodian">Cambodian</option>
                                        <option value="cameroonian">Cameroonian</option>
                                        <option value="canadian">Canadian</option>
                                        <option value="cape verdean">Cape Verdean</option>
                                        <option value="central african">Central African</option>
                                        <option value="chadian">Chadian</option>
                                        <option value="chilean">Chilean</option>
                                        <option value="chinese">Chinese</option>
                                        <option value="colombian">Colombian</option>
                                        <option value="comoran">Comoran</option>
                                        <option value="congolese">Congolese</option>
                                        <option value="costa rican">Costa Rican</option>
                                        <option value="croatian">Croatian</option>
                                        <option value="cuban">Cuban</option>
                                        <option value="cypriot">Cypriot</option>
                                        <option value="czech">Czech</option>
                                        <option value="danish">Danish</option>
                                        <option value="djibouti">Djibouti</option>
                                        <option value="dominican">Dominican</option>
                                        <option value="dutch">Dutch</option>
                                        <option value="east timorese">East Timorese</option>
                                        <option value="ecuadorean">Ecuadorean</option>
                                        <option value="egyptian">Egyptian</option>
                                        <option value="emirian">Emirian</option>
                                        <option value="equatorial guinean">Equatorial Guinean</option>
                                        <option value="eritrean">Eritrean</option>
                                        <option value="estonian">Estonian</option>
                                        <option value="ethiopian">Ethiopian</option>
                                        <option value="fijian">Fijian</option>
                                        <option value="filipino">Filipino</option>
                                        <option value="finnish">Finnish</option>
                                        <option value="french">French</option>
                                        <option value="gabonese">Gabonese</option>
                                        <option value="gambian">Gambian</option>
                                        <option value="georgian">Georgian</option>
                                        <option value="german">German</option>
                                        <option value="ghanaian">Ghanaian</option>
                                        <option value="greek">Greek</option>
                                        <option value="grenadian">Grenadian</option>
                                        <option value="guatemalan">Guatemalan</option>
                                        <option value="guinea-bissauan">Guinea-Bissauan</option>
                                        <option value="guinean">Guinean</option>
                                        <option value="guyanese">Guyanese</option>
                                        <option value="haitian">Haitian</option>
                                        <option value="herzegovinian">Herzegovinian</option>
                                        <option value="honduran">Honduran</option>
                                        <option value="hungarian">Hungarian</option>
                                        <option value="icelander">Icelander</option>
                                        <option value="indian">Indian</option>
                                        <option value="indonesian">Indonesian</option>
                                        <option value="iranian">Iranian</option>
                                        <option value="iraqi">Iraqi</option>
                                        <option value="irish">Irish</option>
                                        <option value="israeli">Israeli</option>
                                        <option value="italian">Italian</option>
                                        <option value="ivorian">Ivorian</option>
                                        <option value="jamaican">Jamaican</option>
                                        <option value="japanese">Japanese</option>
                                        <option value="jordanian">Jordanian</option>
                                        <option value="kazakhstani">Kazakhstani</option>
                                        <option value="kenyan">Kenyan</option>
                                        <option value="kittian and nevisian">Kittian and Nevisian</option>
                                        <option value="kuwaiti">Kuwaiti</option>
                                        <option value="kyrgyz">Kyrgyz</option>
                                        <option value="laotian">Laotian</option>
                                        <option value="latvian">Latvian</option>
                                        <option value="lebanese">Lebanese</option>
                                        <option value="liberian">Liberian</option>
                                        <option value="libyan">Libyan</option>
                                        <option value="liechtensteiner">Liechtensteiner</option>
                                        <option value="lithuanian">Lithuanian</option>
                                        <option value="luxembourger">Luxembourger</option>
                                        <option value="macedonian">Macedonian</option>
                                        <option value="malagasy">Malagasy</option>
                                        <option value="malawian">Malawian</option>
                                        <option value="malaysian">Malaysian</option>
                                        <option value="maldivan">Maldivan</option>
                                        <option value="malian">Malian</option>
                                        <option value="maltese">Maltese</option>
                                        <option value="marshallese">Marshallese</option>
                                        <option value="mauritanian">Mauritanian</option>
                                        <option value="mauritian">Mauritian</option>
                                        <option value="mexican">Mexican</option>
                                        <option value="micronesian">Micronesian</option>
                                        <option value="moldovan">Moldovan</option>
                                        <option value="monacan">Monacan</option>
                                        <option value="mongolian">Mongolian</option>
                                        <option value="moroccan">Moroccan</option>
                                        <option value="mosotho">Mosotho</option>
                                        <option value="motswana">Motswana</option>
                                        <option value="mozambican">Mozambican</option>
                                        <option value="namibian">Namibian</option>
                                        <option value="nauruan">Nauruan</option>
                                        <option value="nepalese">Nepalese</option>
                                        <option value="new zealander">New Zealander</option>
                                        <option value="ni-vanuatu">Ni-Vanuatu</option>
                                        <option value="nicaraguan">Nicaraguan</option>
                                        <option value="nigerien">Nigerien</option>
                                        <option value="north korean">North Korean</option>
                                        <option value="northern irish">Northern Irish</option>
                                        <option value="norwegian">Norwegian</option>
                                        <option value="omani">Omani</option>
                                        <option value="pakistani">Pakistani</option>
                                        <option value="palauan">Palauan</option>
                                        <option value="panamanian">Panamanian</option>
                                        <option value="papua new guinean">Papua New Guinean</option>
                                        <option value="paraguayan">Paraguayan</option>
                                        <option value="peruvian">Peruvian</option>
                                        <option value="polish">Polish</option>
                                        <option value="portuguese">Portuguese</option>
                                        <option value="qatari">Qatari</option>
                                        <option value="romanian">Romanian</option>
                                        <option value="russian">Russian</option>
                                        <option value="rwandan">Rwandan</option>
                                        <option value="saint lucian">Saint Lucian</option>
                                        <option value="salvadoran">Salvadoran</option>
                                        <option value="samoan">Samoan</option>
                                        <option value="san marinese">San Marinese</option>
                                        <option value="sao tomean">Sao Tomean</option>
                                        <option value="saudi">Saudi</option>
                                        <option value="scottish">Scottish</option>
                                        <option value="senegalese">Senegalese</option>
                                        <option value="serbian">Serbian</option>
                                        <option value="seychellois">Seychellois</option>
                                        <option value="sierra leonean">Sierra Leonean</option>
                                        <option value="singaporean">Singaporean</option>
                                        <option value="slovakian">Slovakian</option>
                                        <option value="slovenian">Slovenian</option>
                                        <option value="solomon islander">Solomon Islander</option>
                                        <option value="somali">Somali</option>
                                        <option value="south african">South African</option>
                                        <option value="south korean">South Korean</option>
                                        <option value="spanish">Spanish</option>
                                        <option value="sri lankan">Sri Lankan</option>
                                        <option value="sudanese">Sudanese</option>
                                        <option value="surinamer">Surinamer</option>
                                        <option value="swazi">Swazi</option>
                                        <option value="swedish">Swedish</option>
                                        <option value="swiss">Swiss</option>
                                        <option value="syrian">Syrian</option>
                                        <option value="taiwanese">Taiwanese</option>
                                        <option value="tajik">Tajik</option>
                                        <option value="tanzanian">Tanzanian</option>
                                        <option value="thai">Thai</option>
                                        <option value="togolese">Togolese</option>
                                        <option value="tongan">Tongan</option>
                                        <option value="trinidadian or tobagonian">Trinidadian or Tobagonian</option>
                                        <option value="tunisian">Tunisian</option>
                                        <option value="turkish">Turkish</option>
                                        <option value="tuvaluan">Tuvaluan</option>
                                        <option value="ugandan">Ugandan</option>
                                        <option value="ukrainian">Ukrainian</option>
                                        <option value="uruguayan">Uruguayan</option>
                                        <option value="uzbekistani">Uzbekistani</option>
                                        <option value="venezuelan">Venezuelan</option>
                                        <option value="vietnamese">Vietnamese</option>
                                        <option value="welsh">Welsh</option>
                                        <option value="yemenite">Yemenite</option>
                                        <option value="zambian">Zambian</option>
                                        <option value="zimbabwean">Zimbabwean</option>
                                    </select>
                                </div>
                                <div className="inputWrap">
                                    <p>Birth Date</p>
                                    <input placeholder='Birth Date' value={formData.dateOfBirth} type="date" onChange={handleChange} name="dateOfBirth" id="" required />
                                </div>
                                <div className="inputWrap">
                                    <p>Langues</p>
                                    <select
                                        value={formData.langues}
                                        name='langues'
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Language</option>
                                        <option value="english">English</option>
                                        <option value="spanish">Spanish</option>
                                        <option value="french">French</option>
                                        <option value="arabic">Arabic</option>
                                    </select>
                                </div>
                            </div>


                            <div className="form-group">
                                <div className="inputWrap">
                                    <p>Any known medical conditions [if 'YES' write the condition]</p>
                                    <input placeholder='Any Medical Condition' value={formData.medicalCondition} type="text" onChange={handleChange} name="medicalCondition" id="" required />
                                </div>
                            </div>

                        </div>
                        <button type="submit" disabled={loading}>
                            {loading ? "loading..." : "Procced"} 
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}