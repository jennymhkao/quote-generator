import React from 'react';
import './authorFooter.scss';

const AuthorFooter = () => (
    <div className="authorFooter">
        <a href="https://www.github.com/mikuraji">
            <img className="authorFooter--logo" src="./logo.png" alt="Author logo" />
            <span className="authorFooter--text">made by<b>mikuraji</b></span>
        </a>
    </div>
);

export default AuthorFooter