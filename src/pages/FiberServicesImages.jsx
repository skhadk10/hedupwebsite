import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeading from '../SectionHeading'
import './Testimonial.scss'
import SwiperCore, {
  Pagination
} from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';


import Section from "../Section";
import Div from "../Div";
import ImgTag from "../ImgTag";


SwiperCore.use([Pagination]);

// import Div from "../Div";
// import Section from "../Section";
// import ImgTag from "../ImgTag";

// install Swiper modules

const FiberservicesImages = ({data}) => {
	return(
      <Section className="clients_testimonials_area bg-img section-padding-0-0" id="test">
        <Div className="container">
          <Div className="row">
            <Div className="col-12">
              <SectionHeading title='Our Testimonials' text='Loved By Our Clients' />
            </Div>
          </Div>
        </Div>
        <Div className="cotainer-fluid">
          <Div className="row justify-content-center wow fadeInUp" data-wow-delay="0.4s">
            <Div className="col-12 col-md-10 col-xs-10 offset-xs-1">
              {/*<Div className="client_slides owl-carousel">*/}
		      <Swiper
		        slidesPerView={2}
		        spaceBetween={2}
		        slidesPerGroup={2}
		        loop={true}
		        loopFillGroupWithBlank={false}
		        pagination={{
		          clickable: true
		        }}
		        scrollbar={{ draggable: true }}
		        navigation={false}
		        autoplay={true}
		        className="client_slides"
		      >
                {data && data.map((item , key) => (
	                <SwiperSlide className="single-testimonial text-center" key={key}>
	                  {/* Testimonial Image */}
	                  <Div className="testimonial_image">
	                    <ImgTag src={item.img} alt="" />
	                  </Div>
	                  {/* Testimonial Feedback Text */}
	                  <Div className="testimonial-description">
	                    <Div className="testimonial_text">
	                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis magni, quisquam, accusantium dolores atque, doloribus odit minus maiores sunt mollitia consequatur, soluta quasi.</p>
	                    </Div>
	                    {/* Admin Text */}
	                    <Div className="admin_text">
	                      <h5>{item.name}</h5>
	                      <p>{item.title}</p>
	                    </Div>
	                  </Div>
	                </SwiperSlide>
                ))}
              {/*</Div>*/}
              </Swiper>
            </Div>
          </Div>
        </Div>
      </Section>
	)
}

export default FiberservicesImages