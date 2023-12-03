import "./banner.css";
import skyscrepper from "../../images/skyscrepper.jpg";

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-wrapper">
                <div className="banner-layout">
                    <h1 className="banner-layout-title">Dubai is watting for you</h1>
                </div>
                <img src={skyscrepper} alt="dubai-banner" className="banner-image" />
            </div>
        </div>
    )
}

export default Banner;