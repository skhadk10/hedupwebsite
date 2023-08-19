import { NavLink } from "react-router-dom";

import Div from '../../../components/Div';
import Atag from '../../../components/Atag';
import LiTag from '../../../components/LiTag';
import SpanTag from '../../../components/SpanTag';
import UlTag from '../../../components/UlTag';
import Button from '../../../components/Button';
import ImgTag from '../../../components/ImgTag';
import { Link } from "react-router-dom";
// import './secHeader.css'

const SecHeader = ({
  Logo,
  dropdownItem,
  LoginSignupInfo,
  MenuInfo,
  headInHome=false
}) => {

  return (
      <nav className="navbar navbar-expand-md navbar-white fixed-top" id="banner">
        <Div className="container">
          {/* Brand */}
          <Atag className="navbar-brand" href="/#"><SpanTag><ImgTag src={Logo} alt="logo" /></SpanTag></Atag>
          {/* Toggler/collapsibe Button */}
          <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <SpanTag className="navbar-toggler-icon"></SpanTag>
          </Button>
          {/* Navbar links */}
          <Div className="collapse navbar-collapse" id="collapsibleNavbar">
            <UlTag className="navbar-nav ml-auto">
              {!headInHome ? (
                <>
                <LiTag className="nav-item">
                <NavLink className="nav-link" to ="/" >Home</NavLink>
                </LiTag>
                  {/* <LiTag className="nav-item dropdown">
                    <Atag className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">Home</Atag>
                    <Div className="dropdown-menu">
                      {dropdownItem && dropdownItem.map((item , key) => (
                          <NavLink key={key} className="dropdown-item" to={item.path}>{item.nameLink}</NavLink>
                      ))}
                    </Div>
                  </LiTag> */}
                  {MenuInfo && MenuInfo.map((item , key) => (
                    <LiTag className="nav-item" key={key}>
                      <NavLink className="nav-link" to={item.path}>{item.nameLink}</NavLink>
                    </LiTag>
                  ))}
                </>
              ):(
                <>
                  <LiTag className="nav-item">
                    <Atag className="nav-link" href="#">Home</Atag>
                  </LiTag>
                  <LiTag className="nav-item">
                    <Atag className="nav-link" href="#">Choose Demos</Atag>
                  </LiTag>
                </>
              )}
              
              <LiTag class="lh-55px"><Link to="/login">
                <Atag class="btn login-btn ml-50">Login!</Atag></Link></LiTag>
              <LiTag class="lh-55px"><Link to="/signup">
                <Atag class="btn login-btn ml-50">SignUp!</Atag></Link></LiTag>
            </UlTag>
          </Div>
        </Div>
      </nav>
    );
}

export default SecHeader;