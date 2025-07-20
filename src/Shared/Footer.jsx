import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div>
            This is Footer
            <p>© 2023 Your Company. All rights reserved.</p>
            <Link to='/auth/admin-login'>Admin Login</Link>
        </div>
    );
};

export default Footer;