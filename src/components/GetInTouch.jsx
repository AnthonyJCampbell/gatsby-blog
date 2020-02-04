import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import MainButton from './MainButton';

const Container = styled.section`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px #eaeaea solid;
    border-bottom: 1px #eaeaea solid;
    padding: 0 25%;
    background: #fafbfc;

    h1 {
        margin: 0;
        font-size: 40px;
        color: #000;
    }

    @media(max-width: 900px) {
      padding: 80px 5%;
      flex-direction: column;
    }
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;

    @media(max-width: 900px) {
      text-align: center;
      font-size: 30px;
    }
`;

function GetInTouch() {
  return (
    <Container>
      <Text>
        <h1>Want more?</h1>
      </Text>
      <div>
        <Link to="/contact" style={{ width: '200px' }}>
          <MainButton
            text="Get in touch"
            color="#fff"
          // background="#24292e"
            width="200px"
            background="#f43b47"
          />
        </Link>
        <br />
        <a href="https://drive.google.com/open?id=1B8sk4Ucd30B-VIxQLTYuLR5YY-c2LiBO" target="_blank" rel="noopener noreferrer" style={{ width: '200px' }}>
          <MainButton
            text="My Resume"
            color="#fff"
          // background="#24292e"
            width="200px"
            background="#f43b47"
          />
        </a>
      </div>
    </Container>
  );
}

export default GetInTouch;
