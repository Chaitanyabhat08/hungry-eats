import './Footer.css';
import googlePlay from '../../../public/images/Google_Play-Logo.wine.png';
import appStore from '../../../public/images/app-store-png-logo-33107.png';
const http = require('http');

const Footer = () => {
  console.log('heyeyeyyeyey');
  return (
    <div className="main-footer">
        <div style={{"display":"flex","justifyContent":"space-evenly",padding:'30px'}}>
        <div>
            <h5 className='contentheaders'>COMPANY</h5>
              <li>About us</li>
              <li>Team</li> 
              <li>Careers</li> 
              <li>Personal portofolio</li> 
        </div>
        <div>
          <h5 className='contentheaders'>
            CONTACT
            </h5>
            <li>Help & Support</li>
            <li>Partner with me</li>
            <li>Ride with us</li>
          </div>
          <div>
          <h5 className='contentheaders'>
            LEGAL
            </h5>
            <li>Terms & Conditions</li>
            <li> Refund & Cancellation</li>
            <li>Privacy Policy</li>
            <li> Cookie Policy</li>
            <li> Offer Terms</li>
            <li> Phishing & Fraud</li>
          </div>
        <div style={{ display: 'flex', flexDirection: 'column',height:'150px' }}> 
          <img style={{ width: '260px', height: '140px', padding: 0, margin: 0 }} src={appStore} />
          <img style={{width:'260px', height:'140px',padding:0,margin:0}} src={googlePlay} />
        </div>
      </div>
      <hr />
      <div style={{ "display": "flex", flexDirection:'column',paddingLeft:'70px', paddingRight:'70px'}}>
        <div>
          <h5 className='contentheaders'>
              WE DELIVER TO
        </h5>
        </div>
        <div style={{display:'flex',justifyContent:'space-evenly'}}>
          <ul>
            <li>Abohar</li>
            <li> Adilabad</li>
            <li> Adityapur</li>
            <li> Adoni</li>
            <li> Agartala</li>
            <li> Agra</li>
            <li> Ahmedabad</li>
            <li>Ahmednagar</li>
            <li> Aizawl</li>
            <li> Ajmer</li>
            <li> Akola</li>
          </ul>
          <ul>
            <li>Baddi</li>
            <li> Bagalkot</li>
            <li>Bagdogra</li>
            <li>Bahadurgarh</li>
            <li>Bahraich</li>
            <li>Balaghat</li>
            <li>Balangir</li>
            <li> Balasore</li>
            <li> Ballari</li>
            <li> Balrampur</li>
            <li>Bangalore</li>
          </ul>
          <ul>
            <li>Dehradun</li>
            <li>  Dehri</li>
            <li>Delhi</li>
            <li>Deoghar</li>
            <li>Deoria-City</li>
            <li> Dewas</li>
            <li>Dhanbad</li>
          <li>Dharamshala</li>
          <li>Dharapuram</li>
          <li> Dharmapuri</li>
          <li> Dharwad</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Footer;