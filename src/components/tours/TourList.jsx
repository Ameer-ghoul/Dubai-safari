import "./tour-list.css";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const TourList = ({ TourList }) => {
    return (
        <div className="tour-list">
            {TourList.map(item => <div className="tour-item">
                <img src={item.image} alt={item.title} className="tour-item-img" />
                <span className="tour-item-label">ADVENTURE</span>
                <div className="tour-body">
                    <div className="tour-item-title">{item.title}</div>
                    <div className="tour-item-duration">
                        <span>{item.duration}</span> <i className="bi bi-dot"></i>
                        pickup available
                    </div>
                    <Rating rating={item.rating} reviews={item.reviews} />
                    <div className="tour-item-price">
                        <strong>From $ {item.priceFrom}</strong> per person
                    </div>
                    <Link to={`/tour/${item.id}`} className="tour-item-link">
                        See More
                    </Link>
                </div>
            </div>)}

        </div>
    )
}

export default TourList;