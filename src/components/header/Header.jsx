import { useState } from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";
import "./header.css";

const Header = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <header className="header">
            <Logo />
            <Navbar toggle={toggle} setToggle={setToggle} />
            <div onClick={() => setToggle(prv => !prv)} className="header-menu">
                {toggle ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
            </div>
        </header>
    )
}

export default Header;