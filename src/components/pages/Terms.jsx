import React from 'react'
import Footer from '../common/footer/Footer'

export const Terms = () => {
  return (
    <div style={{width: '100dvw'}}>
      <div className='terms-container'>
        <h1 style={{ color: 'green' }}>Terms of Use</h1>

        <h2>1. Introduction</h2>
        <p>By accessing and using this website, you agree to be bound by these Terms of Use.</p>

        <h2>2. Use of our Website</h2>
        <p>You agree to use our website for lawful purposes and not to violate any laws or regulations.</p>

        <h2>3. General Conditions</h2>
        <p>We reserve the right to refuse service and make changes to the website without prior notice.</p>

        <h2>4. Products or Services</h2>
        <p>Purchases are subject to product availability, and prices may change without notice.</p>

        <h2>5. Links to Third-Party Websites</h2>
        <p>We are not responsible for the content or services of third-party websites linked from or to our website.</p>

        <h2>6. Use Comments, Feedback, and Other Submissions</h2>
        <p>You are responsible for any content you post on our website, and we may remove objectionable content.</p>

        <h2>7. Your Personal Information</h2>
        <p>We collect and use your personal information in accordance with our <a href="/privacy">Privacy Policy.</a></p>

        <h2>8. Errors and Omissions</h2>
        <p>We strive for accuracy on our website but may contain errors or omissions, which we reserve the right to correct.</p>
      </div>
      <Footer />
    </div>
  )
}

export default Terms
