import ContactContent from '../../data/data-containers/data-contact.js'

import './Contact.scss'

import Header from '../../layouts/Header'
import FooterWithout from '../../layouts/Footer/FooterWithout'

import SectionHeading from '../../components/SectionHeading'
import Breadcumb from '../../components/Breadcumb'
import FooterPages from '../../layouts/Footer/FooterPages/index.jsx'

const ContactContainer = () => {

  return (
    <>
      <Header Title="Contact" />
      <Breadcumb title='Contact Us' text='Home' />
      <section className="section-padding-100 contact_us_area" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <SectionHeading title='Contact Us' text='Contact With Us' />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="contact_form">
                <form action="form-handler.php" method="post" id="main_contact_form" noValidate>
                  <div className="row">
                    <div className="col-12">
                      <div id="success_fail_info" />
                    </div>
                    {ContactContent && ContactContent.map((item , key) => (
                      <div className={`col-12 ${item.lastItem && "col-md-6"}`}>
                        <div className="group wow fadeInUp" data-wow-delay="0.2s">
                          <input type="text" name={item.nameInput} id={item.nameInput} required />
                          <span className="highlight" />
                          <span className="bar" />
                          <label>{item.title}</label>
                        </div>
                      </div>
                    ))}
                    <div className="col-12">
                      <div className="group wow fadeInUp" data-wow-delay="0.5s">
                        <textarea name="message" id="message" required defaultValue={""} />
                        <span className="highlight" />
                        <span className="bar" />
                        <label>Message</label>
                      </div>
                    </div>
                    <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.6s">
                      <button type="submit" className="btn more-btn">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterPages />
    </>
  );
}

export default ContactContainer