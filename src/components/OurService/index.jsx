import SectionHeading from '../SectionHeading'

import Div from '../Div';
import ImgTag from '../ImgTag';
import Section from '../Section';
import { Link } from 'react-router-dom';

const OurService = ({data}) => {
  return (
    <Section className=" section-padding-100-70 d-sec">
      <Div className="container">
        <SectionHeading title='OUR SERVICES' text='Our Core Services' addWhite={true} ClassTextDown="text-light" />
        <Div className="row">
			{data && data.map((item , key) => (
				<Div className="col-12 col-md-6 col-lg-4" key={key}>
					<Div className="service_single_content text-center mb-100 fadeInUp" data-wow-delay="0.2s">
					  <Div className="service_icon">
					    <ImgTag src={item.img} alt="" />
					  </Div>
					  <h6 className="bold">{item.title}</h6>
					  <p>{item.text0}</p>
					  <Link to={item.path} className="btn more-btn">Read more</Link>
					</Div>
				</Div>				
			))}
        </Div>
      </Div>
    </Section>
  );
}

export default OurService