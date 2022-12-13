import Carousel from "./Carousel";
import Thumbnail from "./Thumbnail";
import '../styles/modal.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faClose} from "@fortawesome/free-solid-svg-icons"

const Modal = ({handleModal}) => {

    return ( 
        <div className="modal-overlay">
            <div className="overlay-container">
                <FontAwesomeIcon 
                    icon={faClose} 
                    className = "ov-close"
                    onClick={handleModal}/>
                <Carousel />
                <Thumbnail />
            </div>
        </div>
     );
}
 
export default Modal;