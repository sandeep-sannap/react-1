import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck,faTimes } from '@fortawesome/free-solid-svg-icons';

function Card(props){  
    let result = <>
    <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
            <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
                <h6 className="card-price text-center">{props.data.currancy}{props.data.price}<sub className="period">/{props.data.period}</sub></h6>
                <hr/>
               
                <ul className="fa-ul"> 
                    {
                        props.data.offers.map((offer)=>{
                            return <li className= {(offer.isEnabled) ? "":"text-muted"}><span className="fa-li"><FontAwesomeIcon icon={(offer.isEnabled) ? faCheck:faTimes}></FontAwesomeIcon></span>{offer.name}</li>
                        })                        
                    } 
                    
                </ul>
                <a href="#" className="btn btn-block btn-primary text-uppercase">Button</a>
            </div>
        </div>
      </div>
    </>;
    return result;
}
export default Card;