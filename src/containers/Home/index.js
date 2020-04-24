import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Typography, Box, Link } from '@material-ui/core';

import Logo from '../../components/Logo';

const Red = styled.span`
  color: #e25555;
`;

const Home = () => {
  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        Start building your apps right away
      </Typography>
      <Typography variant="body1" gutterBottom>
        This project was built to reduce the ramp-up time for getting new projects off the ground.
        It is fairly opinionated in that it is comes out of the box with...
        <ul>
          <li>
            <Link href="https://reactjs.org/">React</Link> (of course)
          </li>
          <li>
            <Link href="https://redux.js.org/">Redux</Link> (duh)
          </li>
          <li>
            <Link href="https://redux-saga.js.org/"> Redux-Saga</Link> (for async actions)
          </li>
          <li>
            <Link href="https://redux-saga.js.org/"> Font Awesome</Link> (for icons <Logo />)
          </li>
          <li>
            <Link href="https://material-ui.com/">Material-UI</Link>{' '}
            <Typography display="inline" variant="button">
              (because it looks nice)
            </Typography>
          </li>
        </ul>
        This project was inspired by...
        <ul>
          <li>
            <Link href="https://redux-saga.js.org/">react-boilerplate</Link>
          </li>
          <li>
            <Link href="https://redux-saga.js.org/">react-redux-saga-boilerplate</Link>
          </li>
          <li>
            <Link href="https://github.com/facebook/create-react-app">create-react-app</Link>
          </li>
        </ul>
        Good luck!
      </Typography>
      <Typography variant="caption">
        Made with <Red>&hearts;</Red> by{' '}
        <Link href="https://twitter.com/zeevosec">Shane O'Neill</Link>
      </Typography>
    </Box>
  );
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Home);
