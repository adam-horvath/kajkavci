export interface Disks {
  [key: string]: Disk;
}

export interface Disk {
  title: string;
  tracks: Tracks;
}

export interface Tracks {
  [key: string]: Track;
}

export interface Track {
  title: string;
  music: string;
  lyrics?: string;
  text?: string[];
}
