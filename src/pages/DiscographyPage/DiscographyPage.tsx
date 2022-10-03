import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import desetZlatnihGodinaCover from 'assets/images/10zgCover.jpg';
import miSmoKajkavciCover from 'assets/images/mskCover.jpg';
import radujteSeNarodiCover from 'assets/images/rsnCover.jpg';
import slatkeTajneCover from 'assets/images/stCover.jpg';
import { Track } from 'models';
import { Disk } from './Disk';
import { disks } from './disks';
import { LyricsDialog } from './LyricsDialog';
import classes from './DiscographyPage.module.scss';

export const DiscographyPage: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [songUrl, setSongUrl] = useState<string | null>(null);

  useEffect(() => {
    const params = queryString.parse(location.search);
    if (params.song !== songUrl) {
      setSongUrl(params.song as string | null);
    }
  }, []);

  const getTrackFromTitleUrl = (titleUrl: string): Track | null => {
    if (Object.keys(disks.slatkeTajne.tracks).indexOf(titleUrl) > -1) return disks.slatkeTajne.tracks[titleUrl];
    if (Object.keys(disks.radujteSeNarodi.tracks).indexOf(titleUrl) > -1) return disks.radujteSeNarodi.tracks[titleUrl];
    if (Object.keys(disks.miSmoKajkavci.tracks).indexOf(titleUrl) > -1) return disks.miSmoKajkavci.tracks[titleUrl];
    if (Object.keys(disks.desetZlatnihGodina.tracks).indexOf(titleUrl) > -1)
      return disks.desetZlatnihGodina.tracks[titleUrl];
    return null;
  };

  const closeDialog = () => {
    navigate(`${location.pathname}`);
    setSongUrl(null);
  };

  return (
    <div className={classes.Disks}>
      <Disk
        imageUrl={`url("${desetZlatnihGodinaCover}")`}
        title={disks.desetZlatnihGodina.title}
        tracks={disks.desetZlatnihGodina.tracks}
        getTrackFromTitleUrl={getTrackFromTitleUrl}
        setSongUrl={setSongUrl}
      />
      <Disk
        imageUrl={`url("${miSmoKajkavciCover}")`}
        title={disks.miSmoKajkavci.title}
        tracks={disks.miSmoKajkavci.tracks}
        getTrackFromTitleUrl={getTrackFromTitleUrl}
        setSongUrl={setSongUrl}
      />
      <Disk
        imageUrl={`url("${radujteSeNarodiCover}")`}
        title={disks.radujteSeNarodi.title}
        tracks={disks.radujteSeNarodi.tracks}
        getTrackFromTitleUrl={getTrackFromTitleUrl}
        setSongUrl={setSongUrl}
      />
      <Disk
        imageUrl={`url("${slatkeTajneCover}")`}
        title={disks.slatkeTajne.title}
        tracks={disks.slatkeTajne.tracks}
        getTrackFromTitleUrl={getTrackFromTitleUrl}
        setSongUrl={setSongUrl}
      />
      <LyricsDialog track={getTrackFromTitleUrl(songUrl || '')} closeDialog={closeDialog} open={!!songUrl} />
    </div>
  );
};
