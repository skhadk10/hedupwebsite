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
import ICTSectionHeading from "../../components/SectionHeading/ICTSupport.jsx";
import FooterPages from "../../layouts/Footer/FooterPages/index.jsx";

const ICTServicesContainer = () => {
  return (
    <>
      <Header Title="Services" />
      <Breadcumb title="Services" text="Home" />
      <section className=" section-padding-100-70">
        <div className="container">
          <ICTSectionHeading title="OUR SERVICES" text="Our Core Services" />
          <div className="row">
            {ServiceMultipleInfo && ServiceMultipleInfo[2] && (
              <SubSecContent
           
                img={ServiceMultipleInfo[2].img}
                title={ServiceMultipleInfo[2].title}
                text0={ServiceMultipleInfo[2].text0}
                text1={ServiceMultipleInfo[2].text1}
                text2={ServiceMultipleInfo[2].text2}
                text3={ServiceMultipleInfo[2].text3}
                text4={ServiceMultipleInfo[2].text4}
                text5={ServiceMultipleInfo[2].text5}
               
              />
            )}
          </div>
        </div>
      </section>
      <section className="about-us-area special section-padding-0-100 clearfix cir-right">
        <div className="container">
          <SectionHeading title="How IT Works" text=" How Our Platform Works" />
          <div className="row">
            <div className="col-md-6">
              
            {ServicesBlockInfo &&
                ServicesBlockInfo[9] && (
                  <div
                    className="services-block-four how"
                 
                    style={{ marginBottom: `${ ServicesBlockInfo[9].checkLast ? 0 : "30px"}` }}
                  >
                    <div className="inner-box">
                      <div className="step">{ ServicesBlockInfo[9].Step}</div>
                      <h3>
                        <a className="normal" href="#">
                          { ServicesBlockInfo[9].title}
                        </a>
                      </h3>
                      <div className="text">
                        <p>{ ServicesBlockInfo[9].text}</p>
                      </div>
                    </div>
                  </div>
                )}

              {ServicesBlockInfo &&
                ServicesBlockInfo[10] && (
                  <div
                    className="services-block-four how"
                 
                    style={{ marginBottom:"30px"} }
                  >
                    <div className="inner-box">
                      <div className="step">{ ServicesBlockInfo[10].Step}</div>
                      <h3>
                        <a className="normal" href="#">
                          { ServicesBlockInfo[10].title}
                        </a>
                      </h3>
                      <div className="text">
                        <p>{ ServicesBlockInfo[10].text}</p>
                      </div>
                    </div>
                  </div>
                )}
           
              {ServicesBlockInfo &&
                ServicesBlockInfo[11] && (
                  <div
                    className="services-block-four how"
                 
                    style={{ marginBottom:"30px"} }
                  >
                    <div className="inner-box">
                      <div className="step">{ ServicesBlockInfo[11].Step}</div>
                      <h3>
                        <a className="normal" href="#">
                          { ServicesBlockInfo[11].title}
                        </a>
                      </h3>
                      <div className="text">
                        <p>{ ServicesBlockInfo[11].text}</p>
                      </div>
                    </div>
                  </div>
                )}
           
              {ServicesBlockInfo &&
                ServicesBlockInfo[12] && (
                  <div
                    className="services-block-four how"
                 
                    style={{ marginBottom:"30px"} }
                  >
                    <div className="inner-box">
                      <div className="step">{ ServicesBlockInfo[12].Step}</div>
                      <h3>
                        <a className="normal" href="#">
                          { ServicesBlockInfo[12].title}
                        </a>
                      </h3>
                      <div className="text">
                        <p>{ ServicesBlockInfo[12].text}</p>
                      </div>
                    </div>
                  </div>
                )}
            </div>
            <div className="col-md-6">
              <div className="service-img-wrapper">
                <div className="image-box">
                {ServicesBlockInfo &&
                ServicesBlockInfo[13] && (
                  <div
                    className="services-block-four how"
                 
                    style={{ marginBottom:"30px"} }
                  >
                    <div className="inner-box">
                      <div className="step">{ ServicesBlockInfo[13].Step}</div>
                      <h3>
                        <a className="normal" href="#">
                          { ServicesBlockInfo[13].title}
                        </a>
                      </h3>
                      <div className="text">
                        <p>{ ServicesBlockInfo[13].text}</p>
                      </div>
                    </div>
                  </div>
                )}
           
                {ServicesBlockInfo &&
                ServicesBlockInfo[14] && (
                  <div
                    className="services-block-four how"
                 
                    style={{ marginBottom:"30px"}}
                  >
                    <div className="inner-box">
                      <div className="step">{ ServicesBlockInfo[14].Step}</div>
                      <h3>
                        <a className="normal" href="#">
                          { ServicesBlockInfo[14].title}
                        </a>
                      </h3>
                      <div className="text">
                        <p>{ ServicesBlockInfo[14].text}</p>
                      </div>
                    </div>
                  </div>
                )}
           
                {ServicesBlockInfo &&
                ServicesBlockInfo[15] && (
                  <div
                    className="services-block-four how"
                 
                    style={{ marginBottom: "30px"} }
                  >
                    <div className="inner-box">
                      <div className="step">{ ServicesBlockInfo[15].Step}</div>
                      <h3>
                        <a className="normal" href="#">
                          { ServicesBlockInfo[15].title}
                        </a>
                      </h3>
                      <div className="text">
                        <p>{ ServicesBlockInfo[15].text}</p>
                      </div>
                    </div>
                  </div>
                )}
                {ServicesBlockInfo &&
                ServicesBlockInfo[16] && (
                  <div
                    className="services-block-four how"
                 
                    style={{ marginBottom: "30px"} }
                  >
                    <div className="inner-box">
                      <div className="step">{ ServicesBlockInfo[16].Step}</div>
                      <h3>
                        <a className="normal" href="#">
                          { ServicesBlockInfo[16].title}
                        </a>
                      </h3>
                      <div className="text">
                        <p>{ ServicesBlockInfo[16].text}</p>
                      </div>
                    </div>
                  </div>
                )}
           
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterPages />
    </>
  );
};

export default ICTServicesContainer;
