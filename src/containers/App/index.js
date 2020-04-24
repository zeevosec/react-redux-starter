import React from 'react';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import { Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import history from '../../modules/history';

import Home from '../Home';

import GlobalStyles from '../../components/GlobalStyles';

const App = () => {
  return (
    <Router history={history}>
      <Helmet />
      <GlobalStyles />
      <Container maxWidth="md">
        <Box my={8}>
          <Typography variant="h1" component="h1" gutterBottom>
            React Redux Material Starter
          </Typography>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Box>
      </Container>
    </Router>
  );
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(App);
