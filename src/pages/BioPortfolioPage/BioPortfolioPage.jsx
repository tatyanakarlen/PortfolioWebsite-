import React from 'react';
import TopNav from '../../components/TopNav/TopNav';
import Hero from '../../components/Hero/Hero';
import PortfolioBox from '../../components/PortfolioBox/PortfolioBox';
import Skills from '../../components/Skills/Skills.jsx'

function BioPortfolioPage(props) {
  return (
    // <div style={{backgroundColor: '#ffffff'}}>
    <div>
      <TopNav />
      <Hero />
      <Skills />
      <PortfolioBox projects={props.projects} />
      <br />
      <br />
      <footer id="footer" class="text" style={{fontSize: '1.75rem'}}>
        Copyright Tatyana Karlen 2022
      </footer>
      <br />
      <br />
    </div>
  );
}

export default BioPortfolioPage;
