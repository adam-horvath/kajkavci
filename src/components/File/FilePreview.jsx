import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

import { Dialog } from 'components';
import { auto, block, center, cover, flex, hidden, pointer, relative } from 'constants/Jss';

const styles = (theme) => ({
  FilePreview: {
    display: flex,
    '& .preview-bg': {
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        marginTop: theme.spacing(1),
      },
    },
    width: '100%',
    height: theme.spacing(16),
    margin: auto,
    overflow: hidden,
    position: relative,
  },
  FileNameOnly: {
    display: flex,
    alignItems: center,
  },
  DialogContent: {
    display: flex,
    justifyContent: center,
  },
  DialogContentRoot: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  PreviewBg: {
    marginLeft: theme.spacing(1),
    width: '100%',
    backgroundSize: cover,
    backgroundPosition: center,
    cursor: pointer,
  },
  Preview: {
    maxWidth: '100%',
    maxHeight: '100%',
    paddingLeft: theme.spacing(4),
    cursor: pointer,
    margin: auto,
    display: `${block} !important`,
  },
  Video: {
    objectFit: 'initial',
    width: 640,
    height: 480,
    '&.loading': {
      visibility: hidden,
    },
  },
});

export const FileTypes = {
  image: 'image',
  video: 'video',
};

class FilePreview extends Component {
  static propTypes = {
    type: PropTypes.string,
  };

  static defaultProps = {
    type: FileTypes.image,
  };

  state = {
    open: false,
  };

  videoPlayer = React.createRef();

  previewProps = () => {
    const { file, alt } = this.props;
    return {
      inline: {
        image: {
          alt: file.name || file.filename || alt || '',
        },
        video: {},
      },
      dialog: {
        image: {
          alt: file.name || file.filename || alt || '',
        },
        video: {
          className: 'video-preview',
          controls: true,
          onClick: this.playVideo,
        },
      },
    };
  };

  toggleDialog = () => {
    this.setState({ open: !this.state.open });
  };

  playVideo = () => {
    if (this.videoPlayer.current) {
      if (this.videoPlayer.current.paused) {
        this.videoPlayer.current.play();
      } else {
        this.videoPlayer.current.pause();
      }
    }
  };

  pauseVideo = () => {
    if (this.videoPlayer.current && !this.videoPlayer.current.paused) {
      this.videoPlayer.current.pause();
    }
  };

  getPreviewContent({ alt, className, dialog, ...props } = {}) {
    const { file, classes, type } = this.props;

    if (type === FileTypes.image) {
      return dialog ? (
        <img src={file.preview || file.url} alt={alt} className={className} {...props} />
      ) : (
        <div
          className={classNames('preview-bg', classes.PreviewBg)}
          style={{ backgroundImage: `url(${file.preview || file.url})` }}
          {...props}
        />
      );
    } else if (type === FileTypes.video) {
      return (
        <video
          {...props}
          className={classNames(className, classes.Video)}
          ref={this.videoPlayer}
          key={file.preview || file.url}
        >
          <source src={file.preview || file.url} />
          {file.name || file.filename}
        </video>
      );
    } else {
      return <div className={classes.FileNameOnly}>{file.name || file.filename}</div>;
    }
  }

  render() {
    const { file, type, classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.FilePreview}>
        {file &&
          (file.preview || file.url) &&
          this.getPreviewContent({
            className: classes.Preview,
            onClick: this.toggleDialog,
            ...this.previewProps().inline[type],
          })}
        <Dialog
          open={open}
          onClose={this.toggleDialog}
          title={file.name ? file.name : file.preview || file.url}
          content={
            <div className={classes.DialogContent}>
              {file &&
                (file.preview || file.url) &&
                this.getPreviewContent({ ...this.previewProps().dialog[type], dialog: true })}
            </div>
          }
          contentClass={classes.DialogContentRoot}
        />
      </div>
    );
  }
}

export default withStyles(styles)(FilePreview);
