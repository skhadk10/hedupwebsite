import {
  HomeDemo1Appo
} from '../../../utils/allImgs'
import SectionHeading from '../../../components/SectionHeading';

import Div from '../../../components/Div';
import Atag from '../../../components/Atag';
import ImgTag from '../../../components/ImgTag';
import Section from '../../../components/Section';

const SecAbout = ({data}) => {

  return (
    <Section className="about-us-area section-padding-100-70 clearfix">
      <Div className="container">
        <SectionHeading title='How It Works' text=' How It Works' />
        <Div className="row align-items-center">
          <Div className="col-12 col-lg-6">
            <Div className="service-img-wrapper mb-30">
              <Div className="image-box">
                <ImgTag src={HomeDemo1Appo} className="center-block img-responsive phone-img" alt="" />
              </Div>
            </Div>
          </Div>
          <Div className="col-lg-6 offset-lg-0 col-xs-12">
            {data && data.map((item , key) => (
              <Div className={`services-block-four transparent ${item.checkLast && "mb-0"}`} key={key}>
                <Div className="inner-box">
                  <Div className="icon-icon bg4">
                    <ImgTag src={item.img} alt="" />
                  </Div>
                  <h3><Atag className="normal" href="#">{item.title}</Atag></h3>
                  <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicin elit. Laudantium modi assumenda beatae provide nt dolor consectetur aliquam posuere tortor,.</p>
                </Div>
              </Div>
            ))}
          </Div>
        </Div>
      </Div>
    </Section>
  );
}

export default SecAbout;