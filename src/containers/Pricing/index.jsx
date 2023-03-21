import {TableInfo , ServicesContent} from '../../data/data-containers/data-Pricing.js'

import './Price.scss'

import {

  AboutCoreImgAppo
} from '../../utils/allImgs'

import Header from '../../layouts/Header'
import FooterWith from '../../layouts/Footer/FooterWith'

import SectionHeading from '../../components/SectionHeading'
import Breadcumb from '../../components/Breadcumb'
import AboutUs from '../../components/AboutUs'

import SecTable from './SecTable'

const PricingContainer = () => {

  return (
    <>
      <Header Title="Pricing" />
      <Breadcumb title='Pricing' text='Home' />
      <section className="pricing section-padding-100-70">
        <div className="container">
          <SectionHeading title='Pricing Plans' text='Our Pricing Plans' />
          <div className="row no-gutters">
            {TableInfo && TableInfo.map((item , key) => (
              <SecTable
                  key={key}
                  text1={item.text1}
                  text2={item.text2}
                  text3={item.text3}
                  text4={item.text4}
                  text5={item.text5}
                  text6={item.text6}
                  text7={item.text7}
                  text8={item.text8}
                  setActive={item.setActive}
              />
            ))}
          </div>
        </div>
      </section>
      
      <AboutUs
        firstClass="about-us-area section-padding-0-70 clearfix"
        data={ServicesContent}
        img={AboutCoreImgAppo}
      />
      <FooterWith />
    </>
  );
}

export default PricingContainer

      // <section className="about-us-area section-padding-0-70 clearfix">
      //   <div className="container">
      //     <div className="row align-items-center">
      //       <div className="col-lg-6 offset-lg-0 col-xs-12">
              
      //         <div className="services-block-four transparent">
      //           <div className="inner-box">
      //             <div className="icon-icon bg4">
      //               <img src={PricingIconsI1} alt="" />
      //             </div>
      //             <h3><a className="normal" href="#">Register / Login to our Platform</a></h3>
      //             <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicin elit. Laudantium modi assumenda beatae provide nt dolor consectetur aliquam posuere tortor,.</p>
      //           </div>
      //         </div>
      //         {ServicesBlockInfo && ServicesBlockInfo.map((item , key) => (
      //           <SecServicesBlock key={key} img={item.img} text={item.text} />  
      //         ))}
      //       </div>
      //       <div className="col-12 col-lg-6">
      //         <div className="service-img-wrapper mb-30">
      //           <div className="image-box">
      //             <img src={PricingCoreImgAppo} className="center-block img-responsive phone-img" alt="" />
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </section>