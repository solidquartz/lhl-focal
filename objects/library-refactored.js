const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    },
  },
  printPlaylists: function() {
    for (let key in this.playlists) {

      let playlistId = key;
      let playlistName = this.playlists[key].name;
      let playlistLength = this.playlists[key].tracks.length;

      console.log(`${playlistId}: ${playlistName} - ${playlistLength} tracks\n`);
    }
  },
  printTracks: function() {
    for (let key in this.tracks) {

      let trackId = key;
      let trackName = this.tracks[key].name;
      let trackArtist = this.tracks[key].artist;
      let trackAlbum = this.tracks[key].album;

      console.log(`${trackId}: ${trackName} by ${trackArtist} (${trackAlbum})\n`);
    }
  },
  printPlaylist: function(playlistId) {
    let playlistName = playlistId.name;
    let playlistLength = playlistId.tracks.length;

    console.log(`${playlistId.id}: ${playlistName} - ${playlistLength} tracks`);

    for (let key of playlistId.tracks) {

      let trackId = this.tracks[key].id;
      let trackName = this.tracks[key].name;
      let trackArtist = this.tracks[key].artist;
      let trackAlbum = this.tracks[key].album;

      console.log(`${trackId}: ${trackName} by ${trackArtist} (${trackAlbum})`);
    }
  },
  addTrackToPlaylist: function(trackId, playlistId) {
    playlistId.tracks.push(trackId);
  },
  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function(name, artist, album) {
    let newTrackNumber = this.generateUid();

    this.tracks[newTrackNumber] = {
      id: newTrackNumber,
      name: name,
      artist: artist,
      album: album
    };
  },
  addPlaylist: function(name) {
    let newPlaylistNumber = this.generateUid();

    this.playlists[newPlaylistNumber] = {
      id: newPlaylistNumber,
      name: name
    };
  }
};


//tests
library.printPlaylists();
library.printTracks();
library.printPlaylist(library.playlists.p01);

library.addTrackToPlaylist("t01", library.playlists.p02);
console.log(library.playlists);

library.addTrack("Weekend", "Taeyeon", "INVU");
console.log(library.tracks);

library.addPlaylist("Lo-Fi Coding Beats to Sleep To");
console.log(library.playlists);

