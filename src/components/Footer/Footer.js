import './Footer.css';

import React from 'react';

//These are the codes of simple  footer component;
const Footer = () => {
    return (
        <div className='footer'>
            <h3>How React works?</h3>
            <p>In most cases, a web application written in plain JS is executed on the server before being sent to your browser.
                When you interact with such an application, the processing is done line by line from the top down.
                For this reason, an HTML DOM is generated. This is a time-consuming process.

                When you use ReactJS, all you get is an empty page with a div tag with the ID "root."

                The render() method is then used to add the application to the HTML DOM.

                The div tag is then returned using a return method, which dynamically loads the entire program.

                A virtual DOM is present, allowing React programs to access, edit, and render the app quickly.</p>
            <h3>How useState works?</h3>
            <p>You make a functioning component, attach a React hook that tracks state and updates it, and it just works.
                The React library includes a built-in function called useState().
                Only useState() within a functional component should be utilized.
                In a class component, useState() does not work.

                The function useState() returns a tuple.</p>
        </div>
    );
};

export default Footer;