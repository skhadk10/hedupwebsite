
import {
  ServiceSingleInfo,
  ServicesBlockInfo,
  ServiceMultipleInfo,
} from "../../data/data-containers/data-Services.js";

import { ServicesCoreImgAppo } from "../../utils/allImgs";

import Header from "../../layouts/Header";
import FooterWith from "../../layouts/Footer/FooterWith";

import SectionHeading from "../../components/SectionHeading";
import Breadcumb from "../../components/Breadcumb";
import SecContent from "./SecContent";
import SubSecContent from "./SecContent/SubIndex.jsx";

const CopperServicesContainer = () => {
  return (
    <>
      <Header Title="Services" />
      <Breadcumb title="Services" text="Home" />
      <section className=" section-padding-100-70">
        <div className="container">
          <SectionHeading title="OUR SERVICES" text="Our Copper Services" />
          <div className="row">
            {ServiceMultipleInfo &&
              ServiceMultipleInfo[0] && (
                <SubSecContent
                 
                  img={ ServiceMultipleInfo[0].img}
                  title={ ServiceMultipleInfo[0].title}
                  text0={ ServiceMultipleInfo[0].text0}
                  text1={ ServiceMultipleInfo[0].text1}
                  text2={ ServiceMultipleInfo[0].text2}
                  text3={ ServiceMultipleInfo[0].text3}
                  text4={ ServiceMultipleInfo[0].text4}
                  text5={ ServiceMultipleInfo[0].text5}
                  
                />
              )}
          </div>
        </div>
      </section>
      <section className="about-us-area special section-padding-0-100 clearfix cir-right">
        <div className="container">
          <SectionHeading title="How IT Works" text=" How Our Platform Works" />
          <div className="row align-items-center">
            <div className="services-column col-lg-6 col-xs-12">
              {ServicesBlockInfo &&
                ServicesBlockInfo.map((item, key) => (
                  <div
                    className="services-block-four how"
                    key={key}
                    style={{ marginBottom: `${item.checkLast ? 0 : "30px"}` }}
                  >
                    <div className="inner-box">
                      <div className="step">{item.Step}</div>
                      <h3>
                        <a className="normal" href="#">
                          {item.title}
                        </a>
                      </h3>
                      <div className="text">
                     {item.text}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="col-12 col-lg-6 mt-s">
              <div className="service-img-wrapper">
                <div className="image-box">
                  <img
                    src={ServicesCoreImgAppo}
                    className="center-block img-responsive phone-img"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterWith />
    </>
  );
};

export default CopperServicesContainer;
