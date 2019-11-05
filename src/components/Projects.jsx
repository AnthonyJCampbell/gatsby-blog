import React, { useState, useEffect } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

import Card from './Card';

const Container = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-top: 25px;
  border-top: 1px #eaeaea solid;
`;

const Heading = styled.div`
  width: 100%;
  padding-top: 30px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 0;
  }
`;

const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding-top: 30px;
  padding-bottom: 125px;
  z-index: 5;
  
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 600px) {
    overflow: scroll;
    scroll-snap-type: x mandatory;
    justify-content: flex-start;
  }
`;

const Cards = styled.div`
    display: flex; 
    padding: 0px 5%;
    transform: ${({ active }) => `translateX(${-(active * 320 - 960)}px)`};
    transition: transform 420ms;

    @media (max-width: 500px) {
      transition: transform 220ms;
      transform: none;
      padding-left: calc(50% - 125px);
      padding-right: calc(50% - 125px);
    }
    
`;

const cards = [
  {
    title: 'Boost Amsterdam',
    text: 'Website for Dutch non-profit helping refugees and immigrants acclimatize.',
    buttons: [
      {
        text: 'VISIT',
        link: 'https://boostamsterdam.nl/',
      },
    ],
  },
  {
    title: 'Peters Power Transmission',
    text: 'Website for a Dutch electrical engineering firm.',
    buttons: [
      {
        text: 'VISIT',
        link: 'https://peters.nl',
      },
    ],
  },
  {
    title: 'Tieme Ndo',
    text: 'A customer and resource management tool for a Ghanese non-profit.',
    buttons: [
      {
        text: 'VISIT',
        link: 'https://5d8e1ebe572fc40008e829e8--tieme-ndo.netlify.com/',
      },
      {
        text: 'GITHUB',
        link: 'https://github.com/tieme-ndo/',
      },
    ],
  },
  {
    title: 'Tipeasy',
    text: 'Web and mobile app for tipping waiters directly and securely.',
    buttons: [
      {
        text: 'VISIT',
        link: 'https://tipsease-1.netlify.com/',
      },
      {
        text: 'GITHUB',
        link: 'https://github.com/tip-easy/Tip-Easy',
      },
    ],
  },
  {
    title: 'EatMyRide',
    text: 'Website for customized meal planning for top athletes',
    buttons: [
      {
        text: 'VISIT',
        link: 'https://www.eatmyride.com/',
      },
    ],
  },
  {
    title: 'ARQ',
    text: 'Remote team and project management tool, built during Lambda Build Week.',
    buttons: [
      {
        text: 'VISIT',
        link: 'https://team-home-2.netlify.com/',
      },
      {
        text: 'GITHUB',
        link: 'https://github.com/tipsease/',
      },
    ],
  },
  {
    title: 'Essentialism',
    text: 'A Lambda back-end Build Week project, made w/ Postgres and Express',
    buttons: [
      {
        text: 'VISIT',
        link: 'https://mystifying-volhard-f70eb0.netlify.com/index.html',
      },
      {
        text: 'GITHUB',
        link: 'https://github.com/build-week-essentialism/essentialism-backend'
      },
    ],
  },
];

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const pageQuery = graphql`
  query imgQuery {
    peters: file(absolutePath: { regex: "/peters.png/" }) {
      ...fluidImage
    }
    boostamsterdam: file(absolutePath: { regex: "/boostamsterdam.png/" }) {
      ...fluidImage
    }
    tiemendo: file(absolutePath: { regex: "/tiemendo.png/" }) {
      ...fluidImage
    }
    tipsease: file(absolutePath: { regex: "/tipsease.png/" }) {
      ...fluidImage
    }
    eatmyride: file(absolutePath: { regex: "/eatmyride.png/" }) {
      ...fluidImage
    }
    arq: file(absolutePath: { regex: "/arq.png/" }) {
      ...fluidImage
    }
    essentialism: file(absolutePath: { regex: "/essentialism.png/" }) {
      ...fluidImage
    }
  }
`;

function Projects() {
  const [active, setActive] = useState(0);

  const scrollListener = (e) => {
    const activeEl = Math.floor((e.target.scrollLeft + 125) / 250);
    setActive(activeEl);
  };

  const clickHandler = (index) => {
    setActive(index);

    const isMobile = window.innerWidth < 500;

    if (isMobile) {
      const cardsWrapper = document.getElementById('cards-wrapper');
      cardsWrapper.scrollTo({
        left: index * 250,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const isDesktop = window.innerWidth > 500;
    if (isDesktop) setActive(3);
  }, []);

  return (
    <StaticQuery
      query={pageQuery}
      render={(data) => {
        const dataArray = Object.values(data);

        return (
          <Container id="projects">
            <Heading>
              <h1>Recent Projects</h1>
            </Heading>
            <CardsWrapper id="cards-wrapper" onScroll={scrollListener}>
              <Cards active={active}>
                { cards.map((card, index) => (
                  <Card
                    key={card.title}
                    {...card}
                    img={dataArray[index].childImageSharp.fluid}
                    active={active === index}
                    clickHandler={clickHandler}
                    index={index}
                  />
                ))}
              </Cards>
            </CardsWrapper>
          </Container>
        );
      }}
    />
  );
}

export default Projects;
