import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import { videosPageStyles } from './styles';
import { videos } from './videos';
import VideoDialog from './VideoDialog';

class VideosPage extends Component {
  state = {
    video: null,
  };

  onVideoClick = (video) => {
    this.setState({ video });
  };

  closeDialog = () => {
    this.setState({ video: null });
  };

  render() {
    const { classes } = this.props;
    const { video } = this.state;
    return (
      <>
        <Grid container className={classes.VideosContainer}>
          {videos.map((video) => (
            <Grid item md={3} sm={6} xs={12} key={video.thumbnail} className={classes.VideoContainer}>
              <div
                className={classes.Video}
                style={{ backgroundImage: video.thumbnail }}
                onClick={() => this.onVideoClick(video)}
              />
              <div className={classes.Description}>{`${video.title}, ${video.location}, ${video.year}`}</div>
            </Grid>
          ))}
        </Grid>
        <VideoDialog open={!!video} closeDialog={this.closeDialog} video={video} />
      </>
    );
  }
}

export default withRouter(withTranslation()(withStyles(videosPageStyles)(VideosPage)));
