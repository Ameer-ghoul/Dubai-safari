import FooterIcons from "./FooterIcons";
import { languages, currencies } from "../../data";
import "./footer.css"
import SelectBox from "./SelectBox";

const Footer = () => {
    return (
        <footer className="foter">
            <div className="footer-item select-box-wrapper">
                <SelectBox items={languages} label="languages" />
                <SelectBox items={currencies} label="currencies" />
            </div>
            <div className="footer-item">
                <h3 className="footer-item-title">Support</h3>
                <ul className="footer-item-list">
                    <li className="footer-item-link">Contact</li>
                    <li className="footer-item-link">Ligal Notice</li>
                    <li className="footer-item-link">Privacy Policy</li>
                    <li className="footer-item-link">General Terms</li>
                    <li className="footer-item-link">Site Map</li>
                </ul>
            </div>
            <div className="footer-item">
                <h3 className="footer-item-title">Company</h3>
                <ul className="footer-item-list">
                    <li className="footer-item-link">About Us</li>
                    <li className="footer-item-link">Careers</li>
                    <li className="footer-item-link">Blog</li>
                    <li className="footer-item-link">Press</li>
                    <li className="footer-item-link">Gift Cards</li>
                    <li className="footer-item-link">Magazine</li>
                    <li className="footer-item-link">Travel Guides</li>
                </ul>
            </div>
            <div className="footer-item">
                <h3 className="footer-item-title">Work With Us</h3>
                <ul className="footer-item-list">
                    <li className="footer-item-link">Become a Supplier</li>
                    <li className="footer-item-link">Become an Affiliate Partner </li>
                </ul>
                <FooterIcons />
                <div className="footer-copy-right">
                    copyright @copy; 2023 Dubai Safari
                </div>
            </div>
        </footer>
    )
}

export default Footer;