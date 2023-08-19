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
            {ServiceMultipleInfo && ServiceMultipleInfo[0] && (
              <SubSecContent
                img={ServiceMultipleInfo[0].img}
                title={ServiceMultipleInfo[0].title}
                text0={ServiceMultipleInfo[0].text0}
                text1={ServiceMultipleInfo[0].text1}
                text2={ServiceMultipleInfo[0].text2}
                text3={ServiceMultipleInfo[0].text3}
                text4={ServiceMultipleInfo[0].text4}
                text5={ServiceMultipleInfo[0].text5}
              />
            )}
          </div>
        </div>
      </section>
      <section className="about-us-area special section-padding-0-100 clearfix cir-right">
        <div className="container">
          <SectionHeading title="How IT Works" text=" How Our Platform Works" />
          <div className="row ">
            <div className="col-md-6">
              {ServicesBlockInfo && ServicesBlockInfo[3] && (
                <div
                  className="services-block-four how"
                  style={{
                    marginBottom: `${
                      ServicesBlockInfo[3].checkLast ? 0 : "30px"
                    }`,
                  }}
                >
                  <div className="inner-box">
                    <div className="step">{ServicesBlockInfo[3].Step}</div>
                    <h3>
                      <a className="normal" href="#">
                        {ServicesBlockInfo[3].title}
                      </a>
                    </h3>
                    <div className="text">
                      <p>{ServicesBlockInfo[3].text}</p>
                    </div>
                  </div>
                </div>
              )}
              {ServicesBlockInfo && ServicesBlockInfo[4] && (
                <div
                  className="services-block-four how"
                  style={{
                    marginBottom: `${
                      ServicesBlockInfo[4].checkLast ? 0 : "30px"
                    }`,
                  }}
                >
                  <div className="inner-box">
                    <div className="step">{ServicesBlockInfo[4].Step}</div>
                    <h3>
                      <a className="normal" href="#">
                        {ServicesBlockInfo[4].title}
                      </a>
                    </h3>
                    <div className="text">
                      <p>{ServicesBlockInfo[4].text}</p>
                    </div>
                  </div>
                </div>
              )}{" "}
              {ServicesBlockInfo && ServicesBlockInfo[5] && (
                <div
                  className="services-block-four how"
                  style={{
                    marginBottom: `${
                      ServicesBlockInfo[5].checkLast ? 0 : "30px"
                    }`,
                  }}
                >
                  <div className="inner-box">
                    <div className="step">{ServicesBlockInfo[5].Step}</div>
                    <h3>
                      <a className="normal" href="#">
                        {ServicesBlockInfo[5].title}
                      </a>
                    </h3>
                    <div className="text">
                      <p>{ServicesBlockInfo[5].text}</p>
                    </div>
                  </div>
                </div>
              )}{" "}
           
           
            </div>
            <div className="col-md-6">
              <div className="service-img-wrapper">
                <div className="image-box">
                {ServicesBlockInfo && ServicesBlockInfo[6] && (
                <div
                  className="services-block-four how"
                  style={{
                    marginBottom: `${
                      ServicesBlockInfo[6].checkLast ? 0 : "30px"
                    }`,
                  }}
                >
                  <div className="inner-box">
                    <div className="step">{ServicesBlockInfo[6].Step}</div>
                    <h3>
                      <a className="normal" href="#">
                        {ServicesBlockInfo[6].title}
                      </a>
                    </h3>
                    <div className="text">
                      <p>{ServicesBlockInfo[6].text}</p>
                    </div>
                  </div>
                </div>
              )}{" "}
              {ServicesBlockInfo && ServicesBlockInfo[7] && (
                <div
                  className="services-block-four how"
                  style={{
                    marginBottom: `${
                      ServicesBlockInfo[7].checkLast ? 0 : "30px"
                    }`,
                  }}
                >
                  <div className="inner-box">
                    <div className="step">{ServicesBlockInfo[7].Step}</div>
                    <h3>
                      <a className="normal" href="#">
                        {ServicesBlockInfo[7].title}
                      </a>
                    </h3>
                    <div className="text">
                      <p>{ServicesBlockInfo[7].text}</p>
                    </div>
                  </div>
                </div>
              )}
              {ServicesBlockInfo && ServicesBlockInfo[8] && (
                <div
                  className="services-block-four how"
                  style={{
                    marginBottom: `${
                      ServicesBlockInfo[8].checkLast ? 0 : "30px"
                    }`,
                  }}
                >
                  <div className="inner-box">
                    <div className="step">{ServicesBlockInfo[8].Step}</div>
                    <h3>
                      <a className="normal" href="#">
                        {ServicesBlockInfo[8].title}
                      </a>
                    </h3>
                    <div className="text">
                      <p>{ServicesBlockInfo[8].text}</p>
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
      <FooterWith />
    </>
  );
};

export default CopperServicesContainer;
