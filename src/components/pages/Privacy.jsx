import React from 'react'
import Footer from '../common/footer/Footer'

export const Privacy = () => {
    return (
        <div style={{width: '100dvw'}}>
            <div className='privacy-container'>
                <h1 style={{ color: "green" }}>Healthy Farm Privacy Policy</h1>
                <p>This is the privacy policy of Healthy Farm. We are committed to protecting the privacy of our users. </p>
                <h2>Information We Collect</h2>
                <p>We collect information such as your name, email address, and phone number when you register for our services. </p>
                <h2>How We Use Your Information</h2>
                <p>We use your information to provide you with the services you have requested, to communicate with you, and to improve our services. </p>
                <h2>Security of Your Information</h2>
                <p>We take measures to protect your information from unauthorized access, disclosure, or alteration. </p>
                <h2>Changes to This Policy</h2>
                <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on our website. </p>
                <h2>Handling Customer Complaints and Suggestions</h2>
                <p> You may direct any questions or enquiries with respect to our privacy policy or our practices by contacting <a href="https://farmkhemisset.com/contact">us</a></p>
            </div>
            <Footer />
        </div>
    )
}

export default Privacy