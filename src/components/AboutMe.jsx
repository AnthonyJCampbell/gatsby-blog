import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import SpinningElements from './SpinningElements';

const Container = styled.section`
    position: relative;
    min-height: 725px;
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
    z-index: 5;
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
    min-height: 750px;
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

const text = [`Hi! I'm Anthony and I am a Full-Stack Javascript developer from The Netherlands. Since this is my portfolio, I assume that's why you're here.`,
  `I started programming around the age of 14, playing around with basic HTML and CSS, along with Python and PHP. Through copious amount of trial and error, I actually became somewhat decent and started building websites for friends and local businesses. This allowed me to pay my way through college to get my business degree. It became pretty clear that I wanted to become a better developer so I applied to Lambda School's Web Development program. `,
  `Just like moms are not supposed to have a favorite child (Hint: it wasn't me), I still prefer some technologies over others. For the most part, I use a MERN stack in my projects but I've been playing around with Next.js, Flask, and PostGres lately. At the moment, I am diving deeper into the particulars of Node and vanilla Javascript. If you don't know, monads are game-changers!
  `,
  `I don't just live for code, though. I'm a former semi-professional MMA fighter, and an aspiring powerlifter. I sporadically write on my blog about programming, life hacks, and books (though I'm trying to be more consistent). Also, I usually read anywhere between 50-70 books per year and I've got a near-encyclopedic knowledge of everything to do with Star Wars.`,
  `I'm not sure if people even read this, so if you've read all the way to this last paragraph, you're probably an awesome person and/or interested in my skills by now. If so, feel free to reach out to me for a cup of coffee or a quick call. First coffee is on me.`,
  ]; // eslint-display-line

function AboutMe() {
  return (
    <Container>
      <SpinningElements />
      <Sheet>
        <Heading>
          <h1>About Me</h1>
        </Heading>
        <Body>
          {text.map(each => <p>{each}</p>)}
        </Body>
      </Sheet>
    </Container>
  );
}

export default AboutMe;
