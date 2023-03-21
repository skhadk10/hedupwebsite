import {FQAInfo , TeamMemberContent , TestimonialContent} from '../../data/data-containers/data-FAQ.js'

import {FAQCoreImg} from "../../utils/allImgs"
import Header from '../../layouts/Header'
import FooterWithout from '../../layouts/Footer/FooterWithout'

import TestimonialArea from '../../components/TestimonialArea'
import FaqTimeline from '../../components/FaqTimeline'
import TeamArea from '../../components/TeamArea'

import Breadcumb from '../../components/Breadcumb'

const FaqContainer = () => {

  return (
    <>
      <Header Title="FAQ" />
      <Breadcumb title='FAQ Questions' text='Home' />
      <FaqTimeline data={FQAInfo} img={FAQCoreImg} />
      <TeamArea data={TeamMemberContent} />
      <TestimonialArea data={TestimonialContent} />
      <FooterWithout HavMargn={false} />
    </>
  );
}

export default FaqContainer