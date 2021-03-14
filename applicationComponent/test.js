import React from 'react';
export const Test = ({ children }) => {
    return (<div id="body">{children}</div>);
}

export const Header = ({ children }) => {
    return (<div id="header">{children}</div>);
}

export const Footer = ({ footer }) => {
    return (<div id="footer">{footer}</div>);
}

Test.Header = Header;
Test.Footer = Footer;


export default Test;