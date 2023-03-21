import {useEffect} from "react"
import {loader} from '../../utils'
import { Helmet } from "react-helmet";
import Div from "../Div";

function PreloaderContainer({Title}){

	useEffect(() => {
		loader()
	},[])

	return(
		<>
	        <Helmet>
	            <meta charSet="utf-8" />
	            <meta name="robots" content="noindex, follow" />
	            <meta
	                name="description"
	                content="Hope – Health &amp; Medical React JS Template"
	            />
	            <meta
	                name="viewport"
	                content="width=device-width, initial-scale=1, shrink-to-fit=no"
	            />
	            <title>{Title}</title>
	        </Helmet>
		    <Div id="preloader">
		        <Div className="preload-content">
		            <Div id="loader-load"></Div>
		        </Div>
		    </Div>
	    </>
	)
}

export default PreloaderContainer