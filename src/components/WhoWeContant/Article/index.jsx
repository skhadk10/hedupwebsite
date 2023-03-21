import Div from "../../Div"
import H3Tag from "../../H3Tag"
const Article = ({text}) => {
  return(
      <Div className="col-lg-12 col-sm-6 col-xs-12">
        <Div className="article hover box-shadow">
          <H3Tag className="article__title">{text}</H3Tag> 
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>               
        </Div>
      </Div>
  )
}

export default Article