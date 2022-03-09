import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';

import { images } from './images';
import { imagesPageStyles } from './styles';
import ImageViewerDialog from './ImageViewerDialog';
import { detectLanguage } from 'utils/language';

class ImagesPage extends Component {
  state = {
    modalImage: null,
  };

  onImageClick = (modalImage) => {
    this.setState({ modalImage });
  };

  closeDialog = () => {
    this.setState({ modalImage: null });
  };

  render() {
    const { classes, history } = this.props;
    return (
      <>
        <Grid container className={classes.ImagesContainer}>
          {images.map((image) => (
            <Grid item md={3} sm={6} xs={12} className={classes.ImageContainer} key={image.thumbnailUrl}>
              <div
                className={classes.Image}
                style={{ backgroundImage: image.thumbnailUrl }}
                onClick={() => this.onImageClick(image)}
              />
              <div className={classes.Description}>{`${
                image[detectLanguage(history.location.pathname).toLowerCase()]
              }`}</div>
            </Grid>
          ))}
        </Grid>
        <ImageViewerDialog
          open={!!this.state.modalImage}
          closeDialog={this.closeDialog}
          images={images}
          imageIndex={this.state.modalImage ? images.indexOf(this.state.modalImage) : 0}
        />
      </>
    );
  }
}

export default withRouter(withTranslation()(withStyles(imagesPageStyles)(ImagesPage)));
