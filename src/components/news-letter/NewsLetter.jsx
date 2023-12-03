import "./news-letter.css";
import newsletterimage from "../../images/newsletterimage.jpg";

const NewsLetter = () => {
    return (
        <div className="news-letter">
            <div className="news-letter-container">
                <div className="news-letter-img-wrapper">
                    <img src={newsletterimage} alt="news letter" className="news-letter-image" />
                </div>
                <div className="news-letter-content">
                    <h2 className="news-letter-title">
                        Your Dubai is Watting
                    </h2>
                    <p className="news-letter-desc">
                        Recieve a curated 48-hours itinerary featuring the most iconic
                        experience in dubai, straight to your inbox.
                    </p>
                    <div className="news-letter input">
                        <input type="text" placeholder="Your Email" className="news-letter-input" />
                        <button className="news-letter-btn">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter;