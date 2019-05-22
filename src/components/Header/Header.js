import React from 'react';
import { Link } from '../Router/Router';
import { withSiteData } from 'react-static';
import instagram from '../../images/instagram.svg';
import facebook from '../../images/facebook.svg';
import linkedin from '../../images/linkedin.svg';

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: 'active' } : { className: 'header-link' };
};

export default withSiteData(({ title }) => (
  <header>
    <div className="title-link-container">
      <div />
      <h1 className="header-h1">
        <Link className="main-header-link" to="/">
          {title}
        </Link>
      </h1>
      <div className="header-link-container">
        <a
          href="https://www.instagram.com/kimaleentran/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-image" src={instagram} alt="instagram" />
        </a>
        <a
          href="https://www.linkedin.com/in/kimaleentran/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-image" src={linkedin} alt="linkedin" />
        </a>
        <a
          href="https://www.facebook.com/kimaleen.tran.3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-image" src={facebook} alt="facebook" />
        </a>
      </div>
    </div>
    <nav className="header-nav">
      <Link getProps={isActive} className="header-link" id="home" to="/">
        Home
      </Link>
      <Link getProps={isActive} className="header-link" id="about" to="/about">
        About
      </Link>
      <Link getProps={isActive} className="header-link" id="blog" to="/blog">
        Blog
      </Link>
    </nav>
  </header>
));