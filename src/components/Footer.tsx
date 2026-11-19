import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => (
  <footer className="pg-footer">
    <div className="pg-footer-inner">
      <div className="pg-footer-top">
        <div><span className="pg-footer-eyebrow"><span /> THE NEXT CHAPTER STARTS HERE</span><h2>Good things<br />start with <em>us.</em></h2></div>
        <div className="pg-footer-invitation"><p>A little time. A bold idea. A shared belief.<br />Whatever you bring, there’s a place for you.</p><Link to="/get-involved">Find your way to give back </Link></div>
      </div>
      <div className="pg-footer-links">
        <div className="pg-footer-mission"><span className="pg-footer-small-logo">progrow<span>↗</span></span><p>Empowering people.<br />Opening doors.<br />Growing possibilities.</p><Link to="/contact" className="pg-footer-contact">Let’s start a conversation </Link></div>
        <div><h3>Get to know us</h3><Link to="/about">Our story</Link><Link to="/about#mission">Our purpose</Link><Link to="/about#leadership">Our people</Link><Link to="/about#governance">Our governance</Link></div>
        <div><h3>Explore our world</h3><Link to="/focus-areas">Focus areas</Link><Link to="/initiatives">Our initiatives</Link><Link to="/youth-empowerment">Youth empowerment</Link><Link to="/impact-stories">Stories of possibility</Link></div>
        <div><h3>Be part of it</h3><Link to="/get-involved">Get involved</Link><Link to="/csr-partnerships">Partner with us</Link><Link to="/media-resources">Resources & insights</Link><Link to="/contact">Say hello </Link></div>
      </div>
      <div className="pg-footer-wordmark" aria-hidden="true">progrow<span>✳</span></div>
      <div className="pg-footer-bottom"><p>© {new Date().getFullYear()} Progrow Foundation</p><p>Made of purpose. Powered by people.</p><a href="#root">Back to the top </a></div>
    </div>
  </footer>
);
