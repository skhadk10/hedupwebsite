import ContactContent from "../../data/data-containers/data-contact.js";

import "./SignUp.scss";

import Header from "../../layouts/Header/index.jsx";
import FooterWithout from "../../layouts/Footer/FooterWithout/index.jsx";

import SectionHeading from "../../components/SectionHeading/index.jsx";
import Breadcumb from "../../components/Breadcumb/index.jsx";
import { useState } from "react";

const SignUpContainer = () => {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Header Title="SignUp" />
      <Breadcumb title="SignUp" text="Home" />
      <section className="section-padding-100 contact_us_area" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <SectionHeading title="SignUp" text="Employee SignUp" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="contact_form">
                <form
                  action="#"
                  method="post"
                  id="main_contact_form"
                  noValidate
                >
                  <div className="row">
                    <div className="col-12">
                      <div id="success_fail_info" />
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="group wow fadeInUp" data-wow-delay="0.2s">
                        <input type="text" value={name} required />
                        <span className="highlight" />
                        <span className="bar" />
                        <label>Name</label>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="group wow fadeInUp" data-wow-delay="0.2s">
                        <input type="text" value={surName} required />
                        <span className="highlight" />
                        <span className="bar" />
                        <label>SurName</label>
                      </div>
                    </div>

                    {/* {ContactContent && ContactContent.map((item , key) => (
                      <div className={`col-12 ${item.lastItem && "col-md-6"}`}>
                        <div className="group wow fadeInUp" data-wow-delay="0.2s">
                          <input type="text" name={item.nameInput} id={item.nameInput} required />
                          <span className="highlight" />
                          <span className="bar" />
                          <label>{item.title}</label>
                        </div>
                      </div>
                    ))} */}
                    <div className="col-12 col-md-6">
                      <div className="group wow fadeInUp" data-wow-delay="0.2s">
                        <input name="email" value={email} required />
                        <span className="highlight" />
                        <span className="bar" />
                        <label>Email</label>
                      </div>{" "}
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="group wow fadeInUp" data-wow-delay="0.2s">
                        <input name="password" value={password} required />
                        <span className="highlight" />
                        <span className="bar" />
                        <label>Password</label>
                      </div>
                    </div>
                    <div
                      className="col-12 text-center wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <button type="submit" className="btn more-btn">
                      SignUp
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterWithout HavMargn={true} />
    </>
  );
};

export default SignUpContainer;
