import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { FaGithub } from 'react-icons/fa';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Background from '../components/Background';
import Mac from '../components/mac/Mac';
import Button from '../components/MainButton';
import IPhone from '../components/iphone/Iphone';
import Tech from '../components/Tech';
import Projects from '../components/Projects';
import Dock from '../components/mac/Dock';
import Terminal from '../components/mac/Terminal';
import IPhoneApp from '../components/iphone/App';
import Footer from '../components/Footer';
import GetInTouch from '../components/GetInTouch';
import AboutMe from '../components/AboutMe';

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    padding-top: 60px;
  }
`;

const ButtonSection = styled.div`
  position: absolute;
  bottom: 12%;
  display: flex;
  justify-content: space-between;
  width: 440px;

  @media (max-width: 600px) {
    position: static;
    padding-top: 20px;
    flex-direction: column;
    align-items: center;
    width: 80%;
  }

  a {
    width: 200px;

    @media (max-width: 600px) {
      width: 100%;
    }
  }
`;


const keywords = [
  'gatsby', 'anthony campbell', 'blog',
  'javascript', 'react', 'full-stack developer',
  'portfolio', 'golang',
  'developer', 'Amsterdam',
  'back-end developer', 'Netherlands',
];


function Home({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Home"
        keywords={keywords}
      />

      <Background />

      <Container>
        <Mac>
          <Terminal />
          <Dock />
        </Mac>
        <IPhone>
          <IPhoneApp />
        </IPhone>

        <ButtonSection>
          <AnchorLink href="#projects" style={{ width: '100%' }} offset={60}>
            <Button text="projects" color="#fff" background="#24292e" />
          </AnchorLink>
          <a
            href="https://github.com/anthonyjcampbell"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button text="github" icon={<FaGithub />} background="#fff" />
          </a>
        </ButtonSection>

      </Container>
      <Tech />
      <AboutMe />
      <Projects />
      <GetInTouch />
      <Footer />
    </Layout>
  );
}

Home.propTypes = {
  data: PropTypes.arrayOf().isRequired,
  location: PropTypes.shape().isRequired,
};

export default Home;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
