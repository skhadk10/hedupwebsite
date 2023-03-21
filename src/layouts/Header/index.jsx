import {useEffect} from 'react'

import {
  Logo,
  MenuInfo,
  dropdownItem,
  Logininfo,
  LoginIco,
  Signupinfo,
  SignupIco
} from '../../data/data-layout/data-Header.js';

import {Addshrink , moveSmooth} from "../../utils/"

import './header.css'

import Preloader from '../../components/Preloader'

import SecHeader from './SecHeader'
import SecLogin from './SecLogin'
import SecSignup from './SecSignup'

const Header = ({Title , headInHome}) => {

  useEffect(() => {
      Addshrink()
  },[])

  useEffect(() => {
      moveSmooth()
  },[])

  return (
    <>
      <Preloader Title={Title} />
      <SecHeader Logo={Logo} dropdownItem={dropdownItem} MenuInfo={MenuInfo} headInHome={headInHome} />
    </>
  );
}

export default Header;