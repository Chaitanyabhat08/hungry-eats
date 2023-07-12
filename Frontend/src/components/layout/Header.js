import './Header.css';
import { LocalOffer } from '@mui/icons-material';
import { Help } from '@mui/icons-material';
import { Search } from '@mui/icons-material';
import { Home } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import home from '../../../public/images/house-solid.svg';
import UserOffline from '../User/userOffline';
// import UserOptions from '../components/User/UserOptions';
const Header = () => {
  return (
    <nav class="navbar navbar-expand navbar-light bg-light" style={{ paddingLeft: "80px", paddingRight: "80px", alignItems:'center',height:'80px'}}>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#"><img src='https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/9d/66/c5/9d66c5e9-37fa-302c-a6ce-1c18b5714587/source/256x256bb.jpg' style={{ width: "80px", borderRadius: "30px", padding: "10px", height: '80px' }} /></a>
        <div class="form-inline my-2 my-lg-0" style={{right:'0', display:'flex',justifyContent:'space-between',position:'absolute', alignItems:'center',marginRight:'150px'}}>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
    
            <li class="nav-item active" >
              <Link class="nav-link" to="/">
                <div style={{ display: 'flex', alignContent: 'center' }}>
                  Home<p><i class="fa-solid fa-house fa-flip"></i></p><span class="sr-only">(current)</span>
                </div>
              </Link>
              </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/help">
                <div style={{ display: 'flex', alignContent: 'center' }}>
                  Help<p><i class="fa-solid fa-circle-info fa-flip"></i></p><span class="sr-only">(current)</span>
                </div>
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/offers">
              <div style={{ display: 'flex', alignContent: 'center' }}>
                Offers<p><i class="fa-sharp fa-solid fa-tags fa-flip"></i></p><span class="sr-only">(current)</span>
                </div>
                </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/about">
                <div style={{ display: 'flex', alignContent: 'center' }}>
                  About Us<p><i class="fa-solid fa-address-book fa-flip"></i></p><span class="sr-only">(current)</span>
                </div>
              </Link>
            </li>
          </ul>
          <Link class="nav-link">
          <div style={{ display: 'flex', alignContent: 'center' }}>
            <p><i class="fa-solid fa-magnifying-glass fa-fade"></i></p><span class="sr-only">(current)</span>Search
            </div>
          </Link>
          <div>
            <Link to="/">
           <img src='https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE=' style={{
              width: '55px', height:'55px',margin:'10px', borderRadius:'50%'
              }} />
            </Link>
          </div>
        </div>
        </div>
      </nav>
  )
}

export default Header;
