import{
  FooterLogo,
  FAQCoreImg
} from '../../../utils/allImgs'

import '../Footer.scss'

import{
  IcoName,
  TextFooter,
  
  FQAInfo,
  TeamMemberContent,
  TestimonialContent,
  Partners
} from '../../../data/data-layout/data-Footer.js'

import Div from '../../../components/Div';
import Atag from '../../../components/Atag';
import ImgTag from '../../../components/ImgTag';

import Striples from './Striples'
import HomeStriples from './Home_Striples';

const FooterPages = () => {
    return (

      <footer className="footer-area bg-img">
      
      {/* <Striples 
          FQAInfo={FQAInfo}
          FAQCoreImg={FAQCoreImg}
          TeamMemberContent={TeamMemberContent}
          TestimonialContent={TestimonialContent}
          Partners={Partners}
        /> */}
        <HomeStriples 
          FQAInfo={FQAInfo}
          FAQCoreImg={FAQCoreImg}
          TeamMemberContent={TeamMemberContent}
          TestimonialContent={TestimonialContent}
          Partners={Partners}
        />

        <Div className="footer-content-area mt-0">
          <Div className="container">
            <Div className="row ">
              <Div className="col-12 col-lg-4 col-md-6">
                <Div className="footer-copywrite-info">
                  <Div className="copywrite_text fadeInUp" data-wow-delay="0.2s">
                    <Div className="footer-logo">
                      <Atag href="#"><ImgTag src={FooterLogo} alt="logo" /> </Atag>
                    </Div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ducimus voluptatibus neque illo id repellat quisquam? Autem expedita earum quae laborum ipsum ad.</p>
                  </Div>
                  <Div className="footer-social-info fadeInUp" data-wow-delay="0.4s">
                    {IcoName && IcoName.map((item , key) => (
                        <Atag key={key} href="#"><i className={item.IcoName} aria-hidden="true" /></Atag>    
                    ))}
                  </Div>
                </Div>
              </Div>
              {TextFooter && TextFooter.map((item , key) => (
                <Div key={key} className={item.classBlock}>
                  <Div className="contact_info_area d-sm-flex justify-content-between">
                    {/* Content Info */}
                    <Div className={item.classInfo} data-wow-delay="0.3s">
                      <h5>{item.title}</h5>
                      <Atag href><p>{item.text1}</p></Atag>
                      <Atag href><p>{item.text2}</p></Atag>
                      <Atag href><p>{item.text3}</p></Atag>
                      <Atag href><p>{item.text4}</p></Atag>
                      {item.text5 && <Atag href><p>{item.text5}</p></Atag>}
                    </Div>
                  </Div>
                </Div>
              ))}
            </Div>
          </Div>
        </Div>
      
      </footer>
    );
}

export default FooterPages