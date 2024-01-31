import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
    return(
        <>
            <div className="footer_design">
                <p>Copyright © {year}</p>
            </div>
        </>
    )
}
export default Footer;