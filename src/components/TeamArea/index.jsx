import './Team.scss'
import Div from '../Div'
import Section from '../Section'
import SpanTag from '../SpanTag'
import LiTag from '../LiTag'
import Atag from '../Atag'
import ITag from '../ITag'
import UlTag from '../UlTag'
import ImgTag from '../ImgTag'
import SectionHeading from '../SectionHeading'

const TeamArea = ({data}) => {
	return(
	<Section className="our_team_area section-padding-0-70 clearfix" id="team">
		<Div className="container">
		  <Div className="row">
		    <Div className="col-12">
		      <SectionHeading title='Our Creative Team' text='Our Awesome Team' />
		    </Div>
		  </Div>
		  <Div className="row">
		    {data && data.map((item , key) => (
			    <Div className="col-12 col-sm-6 col-lg-3" key={key}>
			      <Div className="our-team ico-team">
			        <Div className="team_img">
			          <ImgTag src={item.img} className="mt-30 width-80" alt="chef-1" />
			          <UlTag className="social">
			            <LiTag><Atag href="#"><ITag className="fa fa-facebook" /></Atag></LiTag>
			            <LiTag><Atag href="#"><ITag className="fa fa-twitter" /></Atag></LiTag>
			            <LiTag><Atag href="#"><ITag className="fa fa-linkedin" /></Atag></LiTag>
			          </UlTag>
			        </Div>
			        <Div className="team-content">
			          <h4 className="title">{item.name}</h4>
			          <SpanTag className="post">{item.title}</SpanTag>
			        </Div>
			      </Div>
			    </Div>
		    ))}
		  </Div>
		</Div>
	</Section>
	)
}

export default TeamArea