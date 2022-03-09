import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { withTranslation } from 'react-i18next';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';

import { discographyPageStyles } from './styles';
import desetZlatnihGodinaCover from 'assets/images/10zgCover.jpg';
import miSmoKajkavciCover from 'assets/images/mskCover.jpg';
import radujteSeNarodiCover from 'assets/images/rsnCover.jpg';
import slatkeTajneCover from 'assets/images/stCover.jpg';
import { Disk } from './Disk';
import { disks } from './disks';
import LyricsDialog from './LyricsDialog';

class DiscographyPage extends Component {
  state = {
    songUrl: null,
  };

  componentDidMount() {
    const { history } = this.props;
    const { songUrl } = this.state;
    const params = queryString.parse(history.location.search);
    if (params.song !== songUrl) {
      this.setSongUrl(params.song);
    }
  }

  getSongFromTitleUrl = (titleUrl) =>
    Object.keys(disks.slatkeTajne.tracks).indexOf(titleUrl) > -1
      ? disks.slatkeTajne.tracks[titleUrl]
      : Object.keys(disks.radujteSeNarodi.tracks).indexOf(titleUrl) > -1
      ? disks.radujteSeNarodi.tracks[titleUrl]
      : Object.keys(disks.miSmoKajkavci.tracks).indexOf(titleUrl) > -1
      ? disks.miSmoKajkavci.tracks[titleUrl]
      : Object.keys(disks.desetZlatnihGodina.tracks).indexOf(titleUrl) > -1
      ? disks.desetZlatnihGodina.tracks[titleUrl]
      : null;

  setSongUrl = (songUrl) => {
    this.setState({ songUrl });
  };

  closeDialog = () => {
    const { history } = this.props;
    history.push(`${history.location.pathname}`);
    this.setState({ songUrl: null });
  };

  render() {
    const { songUrl } = this.state;
    const { classes, history } = this.props;
    return (
      <div className={classes.Disks}>
        <Disk
          imageUrl={`url("${desetZlatnihGodinaCover}")`}
          title={disks.desetZlatnihGodina.title}
          tracks={disks.desetZlatnihGodina.tracks}
          history={history}
          getSongFromTitleUrl={this.getSongFromTitleUrl}
          setSongUrl={this.setSongUrl}
        />
        <Disk
          imageUrl={`url("${miSmoKajkavciCover}")`}
          title={disks.miSmoKajkavci.title}
          tracks={disks.miSmoKajkavci.tracks}
          history={history}
          getSongFromTitleUrl={this.getSongFromTitleUrl}
          setSongUrl={this.setSongUrl}
        />
        <Disk
          imageUrl={`url("${radujteSeNarodiCover}")`}
          title={disks.radujteSeNarodi.title}
          tracks={disks.radujteSeNarodi.tracks}
          history={history}
          getSongFromTitleUrl={this.getSongFromTitleUrl}
          setSongUrl={this.setSongUrl}
        />
        <Disk
          imageUrl={`url("${slatkeTajneCover}")`}
          title={disks.slatkeTajne.title}
          tracks={disks.slatkeTajne.tracks}
          history={history}
          getSongFromTitleUrl={this.getSongFromTitleUrl}
          setSongUrl={this.setSongUrl}
        />
        <LyricsDialog
          song={this.getSongFromTitleUrl(songUrl)}
          closeDialog={this.closeDialog}
          open={!!songUrl}
          history={history}
        />
      </div>
    );
  }
}

export default withRouter(withTranslation()(withStyles(discographyPageStyles)(DiscographyPage)));
