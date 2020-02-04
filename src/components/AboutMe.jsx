import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import SpinningElements from './SpinningElements';

const Container = styled.section`
    position: relative;
    min-height: 700px;
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
    z-index: 5;

    @media (max-width: 900px) {
      min-height: 480px;
    }

    @media (max-width: 585px) {
      min-height: 600px;
    }

    @media (max-width: 430px) {
      min-height: 720px;
    }
`;

const Heading = styled.div`
    width: 100%;
    height: 125px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    h1 {
        margin: 0;
        margin-top: 15px;
    }
`;

const Sheet = styled.div`
    position: absolute;
    border: 1px #dadce0 solid;
    top: -40px;
    min-height: 40vh;
    width: 600px;
    max-width: 90%;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 -1px 2px rgba(0, 0, 0, 0.05);
    z-index: 1; 
`;

const Body = styled.div`
    padding: 20px 50px;
    width: 100%;

    p {
        margin: 10px 0;
    }

    @media(max-width: 900px) {
      padding: 10px 20px;
      font-size: 14px;
    }
`;

function AboutMe() {
  return (
    <Container>
      <SpinningElements />
      <Sheet>
        <Heading>
          <h1>About Me</h1>
        </Heading>
        <Body>
        The MERN stack (MongoDB, Express, React, and Node) is my bread and butter. In addition, I’ve got plenty of experience with TypeScript, React Native, and Python/Flask. I use Jest for unit tests, Cypress for end-to-end testing, and have ample experience with build tools like Gulp and WebPack. As such, I’m already familiar with all the major technologies listed on the opening!

          <p>Hi! I&apos;m Anthony and I am a <b>Full-Stack Developer</b> from The Netherlands.</p>
          <p>Over the past 5 years, I&apos;ve run a web agency with over 20 completed projects, completed Lambda School&apos;s Web Development program, and built several smaller projects. I&apos;m currently looking to take the next step in my development career and move out to <b>London</b>.</p>
          <p>The <b>MERN stack</b> (MongoDB, Express, React, and Node) stack is my bread and butter. I&apos;ve also worked extensively with React Native, Python and Flask, TypeScript, and PostgreSQL. I&apos;ve recently been diving deeper into ES8+ and some of the more esoteric Node applications.
          </p>
          <p>I do more than just code, though. I sporadically write on my blog and I usually read 50-70 books per year. I&apos;m also a model rocket enthusiast. Finally,I am a former semi-professional MMA fighter and ice skater and I&apos;ve got a near-encyclopedic knowledge of Star Wars triva.</p>
          <p>I&apos;m not sure if people even read this, so if you&apos;ve read everything so far, you&apos;re probably an awesome person and/or interested in my skills. If so, <b>feel free to reach out</b> to me for a cup of coffee or a quick call. First coffee is on me.</p>
        </Body>
      </Sheet>
    </Container>
  );
}

export default AboutMe;
