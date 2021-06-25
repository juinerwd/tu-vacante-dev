import React from 'react';

import '../styles/components/footer.scss';

const Footer = () => {
    return (
        <footer className="">
            <div className="footer__social">
                <p>VacanteDev</p>
                <div className="footer__social--media">
                    <span className="icon youtube"><i className="fab fa-youtube"></i></span>
                    <span className="icon facebook"><i className="fab fa-facebook-f"></i></span>
                    <span className="icon twitter"><i className="fab fa-twitter"></i></span>
                    <span className="icon linkedin"><i className="fab fa-linkedin-in"></i></span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
