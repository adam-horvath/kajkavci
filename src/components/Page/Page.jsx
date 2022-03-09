import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const Page = (WrappedComponent, ClassName, PageTitle) => {
  return class extends Component {
    render() {
      const { pages } = this.props;
      return (
        <div>
          <Container maxWidth="lg" className={classNames('Page', 'MainContainer')}>
            <Grid container spacing={4}>
              {PageTitle ? (
                <Box mb={5} className="PageTitleContainer">
                  <Box className={classNames('Title', 'PageTitle')}>{PageTitle}</Box>
                  <div className={classNames('TitleBorder', 'PageTitleBorder')} />
                </Box>
              ) : null}
              <WrappedComponent pages={pages} />
            </Grid>
          </Container>
        </div>
      );
    }
  };
};

Page.propTypes = {
  WrappedComponent: PropTypes.node.isRequired,
};

export default Page;
