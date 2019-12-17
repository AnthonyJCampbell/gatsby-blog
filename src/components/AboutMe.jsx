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
          <p>Hi! I&apos;m Anthony and I am a <b>Full-Stack Developer</b> from The Netherlands.</p>
          <p>At age 14 I started programming and became pretty good through modding Minecraft and trial and error. I started building websites for local businesses and recently joined Lambda School&apos;s Web Development program. Now, I&apos;m truly committed to becoming a world-class full-stack developer.</p>
          <p>Just like moms secretly have a favorite child, I have my favorite technologies. I primarily use a <b>MERN stack</b> in my projects but I&apos;m experimenting with Next.js, Flask, and PostGres. I&apos;m also diving deeper into Node and vanilla JS.</p>
          <p>I do more than just code. I&apos;m a former semi-professional MMA fighter and ice skater. I also sporadically write on my blog and I usually read 50-70 books per year. Oh, and I&apos;ve got a near-encyclopedic knowledge of Star Wars triva.</p>
          <p>I&apos;m not sure if people even read this, so if you&apos;ve read everything so far, you:&apos;re probably an awesome person and/or interested in my skills. If so, <b>feel free to reach out</b> to me for a cup of coffee or a quick call. First coffee is on me.</p>
        </Body>
      </Sheet>
    </Container>
  );
}

export default AboutMe;
