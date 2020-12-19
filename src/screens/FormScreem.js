import React, { useState } from 'react'
import { MDBInput, MDBBtn, MDBContainer, MDBIcon, MDBCard, MDBRow, MDBCol, MDBNotification } from 'mdbreact'
import CountryData from '../components/country'

const FormScreem = ({ history }) => {
    const [firstName, setFirstName] = useState()
    const [email, setEmail] = useState();
    const [linkedin, setLinkedin] = useState();
    const [number, setNumber] = useState();
    const [country, setCountry] = useState();
    const [skill, setSkill] = useState()
    const [experience, setExperience] = useState();
    const [about, setAbout] = useState()
    const onSubmitHandler = (e) => {
        e.preventDefault()
        e.target.className += " was-validated";
        if (firstName && email && linkedin && number && country && skill && experience && about) {
            const arr = {
                firstName: firstName,
                email: email,
                linkedin: linkedin,
                number: number,
                country: country,
                skill: skill,
                experience: experience,
                about: about

            }
            const exist = localStorage.getItem('data')
            if (exist) {
                let prevData = JSON.parse(localStorage.getItem('data'))
                prevData.push(arr)
                localStorage.setItem('data', JSON.stringify(prevData))
            }
            else {
                let prevData = []
                prevData.push(arr)
                localStorage.setItem('data', JSON.stringify(prevData))
            }
            history.push('/data')
        }


    }
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="2"></MDBCol>
                <MDBCol md="8" className="card mt-3 p-0">
                    <h2 className="blue lighten-2 text-white text-center p-4">Enter Your Data to get a intership</h2>
                    <form onSubmit={onSubmitHandler} className="px-5 pb-5 needs-validation" noValidate>
                        <MDBRow>
                            <MDBCol>
                                <MDBInput label="Enter your Firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} outline required />
                            </MDBCol>
                            <MDBCol>
                                <MDBInput label="Enter your Email Id" type="email" value={email} onChange={(e) => setEmail(e.target.value)} outline required />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol> <MDBInput label="Enter your LinkedIn id" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} outline required /></MDBCol>
                        </MDBRow>
                        <MDBRow><MDBCol>
                            <div>
                                <select className="browser-default custom-select md-form" value={country} onChange={(e) => setCountry(e.target.value)} required>
                                    <option value="">Select your Country</option>
                                    {CountryData.map(x => <option key={x.code} value={x.name}>{x.name}</option>)}
                                </select>
                            </div>
                        </MDBCol></MDBRow>
                        <MDBRow>
                            <MDBCol><MDBInput label="Enter your Number" type="number" value={number} onChange={(e) => setNumber(e.target.value)} outline required /></MDBCol>
                            <MDBCol><MDBInput label="Enter your Skills" type="text" value={skill} onChange={(e) => setSkill(e.target.value)} outline required /></MDBCol>
                        </MDBRow>
                        <MDBRow><MDBCol>
                            <div>
                                <select className="browser-default custom-select md-form" required value={experience} onChange={(e) => setExperience(e.target.value)} >
                                    <option value="">Select the number of Experience</option>
                                    <option value="Under 1 year">Under 1 year</option>
                                    <option value="1-2 years">1-2 years</option>
                                    <option value="2-3 years">2-3 years</option>
                                    <option value="Over 3 Years">Over 3 Years</option>
                                </select>
                            </div>
                        </MDBCol></MDBRow>
                        <MDBRow></MDBRow>




                        <MDBInput type="textarea" label="Tell us about urself" outline value={about} onChange={(e) => setAbout(e.target.value)} required />
                        <MDBBtn type="submit" color="blue" size="lg">
                            Submit
                    <MDBIcon far icon="paper-plane" className="ml-1" /></MDBBtn>
                    </form>
                </MDBCol>
                <MDBCol md="2"></MDBCol>
            </MDBRow>

        </MDBContainer>
    )
}

export default FormScreem
