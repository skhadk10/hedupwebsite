import {
  AbsoImgInfo,
  service_single_content,
  FeaturesContent,
  PlatformContent,
  WhoWeHafe1,
  WhoWeHafe2,
  OurServiceContent,
} from '../../data/data-containers/data-HomeDemo1.js';

import {
  HomeDemo1About11,
  HomeDemo1About12,
  HomeDemo1Dotted1,
  HomeDemo1coreImgMap,
  HomeDemo1About5
} from '../../utils/allImgs'

import './style/HomeDemo1.scss'

import Header from "../../layouts/Header"
import FooterPages from '../../layouts/Footer/FooterPages'

import SecHeroSection from '../../components/HeroSection1_4'
import OurFeatures from '../../components/OurFeatures'
import WhoWeContant from '../../components/WhoWeContant'
import OurService from '../../components/OurService'
import PaymentPlatform from '../../components/PaymentPlatform'

import SecAbout from './SecAbout'

const HomeDemo1 = () => {

    return (
      <div>
        <Header Title="Home Template1" />
        <SecHeroSection
          ClassSec="hero-section ico-bg3 relative hidden"
          AbsoImgInfo={AbsoImgInfo}
          AddWrapper={true}
          img={HomeDemo1About5}
        />
        <div className="clearfix" />
        <SecAbout data={service_single_content} />
        <OurFeatures
          data={FeaturesContent}
          ClassSec="section-padding-0-70 relative"
          IdSec="feet"
          ClassBox="service_single_content text-center mb-100 fadeInUp"
          ClassHead="bold"
        />
        <PaymentPlatform
          data={PlatformContent}
          img1={HomeDemo1About11}
          img2={HomeDemo1About12}
          img3={HomeDemo1Dotted1}
        />
        <WhoWeContant 
          img={HomeDemo1coreImgMap} 
          WhoWeHafe1={WhoWeHafe1} 
          WhoWeHafe2={WhoWeHafe2}
          ClassSec="what-we-do section-padding-100-70"
        />
        <OurService data={OurServiceContent} />
        <FooterPages />
      </div>
    );
};

export default HomeDemo1