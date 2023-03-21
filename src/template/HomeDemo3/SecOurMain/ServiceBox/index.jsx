import Div from "../../../../components/Div";
import Atag from "../../../../components/Atag";
import H3Tag from "../../../../components/H3Tag";
import ImgTag from "../../../../components/ImgTag";
import ITag from "../../../../components/ITag";
import H1Tag from "../../../../components/H1Tag";
import SpanTag from "../../../../components/SpanTag";
import { Link } from "react-router-dom";

const ServiceBox = ({ img, title, text1, text2, text3 }) => {
  return (
    <Div
      className="container-fluid "
      // className="col-lg-4 col-md-6 col-sm-12 "
    >
      <Div className="services-block-four v2">
        <Div className="inner-box">
          <H1Tag className="w-text wow fadeInUp" data-wow-delay="0.2s">
            <SpanTag className="gradient-text d-flex justify-content-center">
            	About HedUp
            </SpanTag>{" "}
          </H1Tag>
          <Div className="text">
            We're a leading contractor company in the telecommunications and
            Information Technology industry, providing high-quality services to
            businesses and organizations of all sizes. Whether you need help
            with NBN installation, network design and implementation,
            maintenance and support, or project management, Hedup has the
            expertise and resources to deliver successful outcomes. We look
            forward to working with you to achieve your telecommunications and
            information technology goals.
          </Div>
		
		  <Link to="/About-Us" className="d-flex justify-content-center"> <Atag href="#" className="btn more-btn mr-3">
                    Read More
                  </Atag></Link>
          {/* <Div className="icon-img-box">
		      <ImgTag src={img} alt="" />
		    </Div> */}
          {/* <H3Tag><Atag href="#" className="">{title}</Atag></H3Tag>
		    <Div className="text">We're a leading contractor company in the telecommunications industry, providing high-quality services to businesses and organizations of all sizes.</Div> */}
          {/* <Div className="side-feature-list-item v2 ">
		      <ITag className="fa fa-check check-mark-icon-font" aria-hidden="true" />
		      <Div className="foot-c-info">{text1}</Div>
		    </Div>
		    <Div className="side-feature-list-item v2 ">
		      <ITag className="fa fa-check check-mark-icon-font" aria-hidden="true" />
		      <Div className="foot-c-info">{text2}</Div>
		    </Div>
		    <Div className="side-feature-list-item v2 ">
		      <ITag className="fa fa-check check-mark-icon-font" aria-hidden="true" />
		      <Div className="foot-c-info">{text3}</Div>
		    </Div> */}
        </Div>
      </Div>
    </Div>
  );
};

export default ServiceBox;
