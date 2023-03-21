import Typed from "react-typed"

import Div from '../../components/Div';
import Atag from '../../components/Atag';
import H1Tag from '../../components/H1Tag';
import H3Tag from '../../components/H3Tag';
import Section from '../../components/Section';

import SpanTag from '../../components/SpanTag';
import ImgTag from '../../components/ImgTag';

const SecHeroSection = ({
  ClassSec="",
  imgUp="",
  imgDown="",
  AbsoImgInfo="",
  AddWrapper=false,
  specialHead="Become Totally Secure From Cyber Attacks ",
  cdHeadline="Trusted IT & Cyber Security Experts Provide "
}) => {

  return (
    <Section className={ClassSec} id="home">
      <Div className="hero-section-content">
        <Div className="container ">
          <Div className="row align-items-center">
            <Div className="col-12 col-lg-6 col-md-12">
              <Div className="welcome-content text-left">
                <Div className="promo-section">
                  <H3Tag className="special-head gradient-text cyan mt-s">{specialHead}</H3Tag>
                </Div>
                <Div className="cd-intro v2 text-left">
                  <H1Tag className="cd-headline clip is-full-width thin" style={{lineHeight: '1.7'}}>
                    <SpanTag className="w-text bold">{cdHeadline}</SpanTag>
                    <SpanTag className="cd-words-wrapper">
                      <Typed
                        className="gradient-text cyan bolder is-hidden"
                        strings={['Best Quality' ,'Fast Results','Total Suport']}
                        typeSpeed={50}
                        backSpeed={30}
                        backDelay={1000}
                        loop={true}
                      />
                    </SpanTag>
                  </H1Tag>
                </Div>
                <p className="g-text fadeInUp" data-wow-delay="0.3s">Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Odit quaerat est, a labore excepturi rem sed eius facere error! Dolore in porro dolor debitis Odit quaerat est</p>
                <Div className="info-btn-group fadeInUp w-text" data-wow-delay="0.4s">
                  <Atag href="#" className="btn more-btn pink mr-3">Learn More</Atag>
                  <Atag href="#" className="btn more-btn video-btn v2  mr-3"><i className="fa fa-play" /> </Atag>Watch Demo
                </Div>
              </Div>
            </Div>
            {AddWrapper ? (
              <Div className="mt-50 col-12 col-lg-6 offset-lg-0 col-md-10 offset-md-1 col-sm-12 ">
                <Div className="wow fadeInUp" data-wow-delay="0.5s">
                  <Div className="ab-wrapper v2 perwaz">
                    {AbsoImgInfo && AbsoImgInfo.map((item , key) => (
                      <ImgTag key={key} className={item.className} data-aos-delay={item.dataDelay && "200"} src={item.img} alt="" />   
                    ))}
                  </Div> 
                </Div>
              </Div>
            ) : (
              <Div className="mt-50 col-12 col-lg-6 offset-lg-0 col-md-10 offset-md-1 col-sm-12 ">
                <Div className="wow fadeInUp" data-wow-delay="0.5s">
                  <ImgTag src={imgUp} alt="" className="sity img-responsive center-block" />
                  <img class="wow banner2-img floating" data-wow-delay="0.2s" src={imgDown} alt="" />
                </Div>
              </Div>
            )}
          </Div>
        </Div>
      </Div>
    </Section>
  );
}

export default SecHeroSection;