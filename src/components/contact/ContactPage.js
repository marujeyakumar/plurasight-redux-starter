import React, {PropTypes} from 'react';

class ContactPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Contact Information</h1>
                <address>
                    <strong>Twitter, Inc.</strong><br />
                     1355 Market Street, Suite 900<br />
                     San Francisco, CA 94103<br />
                    <abbr title="Phone">P:</abbr> (123) 456-7890
                </address>
                <address>
                    <strong>Maru Jeyakumar</strong><br />
                    <a href="mailto:#">MJeyakumar@hoopp.com</a>
                </address>
            </div>
        );
    }
}

export default ContactPage; 